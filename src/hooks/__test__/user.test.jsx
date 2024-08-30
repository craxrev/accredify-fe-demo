import { renderHook, waitFor } from "@testing-library/react";
import { vi, describe, afterEach, test, expect } from "vitest";
import { useQuery } from "@tanstack/react-query";
import { getAuthCookies } from "@/features/auth/utils/authCookies.utils";
import { useUser } from "@/hooks/user";

// Mock dependencies
vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

vi.mock("@/features/auth/utils/authCookies.utils", () => ({
  getAuthCookies: vi.fn(),
}));

vi.mock("@/features/dashboard/api/user", () => ({
  getUser: vi.fn(),
}));

describe("useUser Hook", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should initialize with no user and call getUser with the correct user type after setting currentUserType", async () => {
    getAuthCookies.mockReturnValue({
      data: {
        current_organisation: {
          is_personal: true,
        },
      },
    });

    const mockUser = { name: "John Doe" };
    useQuery.mockReturnValue({
      data: mockUser,
      isLoading: false,
    });

    const { result } = renderHook(() => useUser());
    await waitFor(() => {
      expect(getAuthCookies).toHaveBeenCalled();
      expect(result.current.user).toEqual(mockUser);
    });

    expect(useQuery).toHaveBeenCalledWith(
      expect.objectContaining({
        queryKey: ["user", "personal"],
        queryFn: expect.any(Function),
      })
    );
  });

  test("should handle a managed user type correctly", async () => {
    getAuthCookies.mockReturnValue({
      data: {
        current_organisation: {
          is_personal: false,
        },
      },
    });
    const mockUser = { name: "Jane Smith" };
    useQuery.mockReturnValue({
      data: mockUser,
      isLoading: false,
    });

    const { result } = renderHook(() => useUser());
    await waitFor(() => {
      expect(getAuthCookies).toHaveBeenCalled();
      expect(result.current.user).toEqual(mockUser);
    });
    expect(useQuery).toHaveBeenCalledWith(
      expect.objectContaining({
        queryKey: ["user", "managed"],
        queryFn: expect.any(Function),
      })
    );
  });

  test("should return isLoading as true when user data is not yet available", async () => {
    getAuthCookies.mockReturnValue({
      data: {
        current_organisation: {
          is_personal: true,
        },
      },
    });
    useQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    const { result } = renderHook(() => useUser());
    await waitFor(() => {
      expect(result.current.isLoading).toBe(true);
    });
  });
});
