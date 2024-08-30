import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi, test, expect, describe, beforeEach, afterEach } from "vitest";
import LoginAsPersonal from "@/features/auth/components/LoginAsPersonal";
import { useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { setAuthCookies } from "@/features/auth/utils/authCookies.utils";

vi.mock("@tanstack/react-router", () => ({
  useNavigate: vi.fn(),
}));
vi.mock("@tanstack/react-query", () => ({
  useMutation: vi.fn(),
}));
vi.mock("@/features/auth/api/login", () => ({
  login: vi.fn(),
}));
vi.mock("@/features/auth/utils/authCookies.utils", () => ({
  setAuthCookies: vi.fn(),
}));

describe("LoginAsPersonal Component", () => {
  const mockNavigate = vi.fn();
  const mockMutateAsync = vi.fn();

  beforeEach(() => {
    // Set up mocks
    useNavigate.mockReturnValue(mockNavigate);
    useMutation.mockReturnValue({
      mutateAsync: mockMutateAsync,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should render the login button", () => {
    render(<LoginAsPersonal />);
    expect(screen.getByText("Login as Personal")).toBeInTheDocument();
  });

  test("should call login API and navigate on successful login", async () => {
    const mockData = { data: { token: "test-token" } };
    mockMutateAsync.mockResolvedValueOnce(mockData);

    render(<LoginAsPersonal />);
    fireEvent.click(screen.getByText("Login as Personal"));

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalledWith("personal");
      expect(setAuthCookies).toHaveBeenCalledWith(mockData.data);
      expect(mockNavigate).toHaveBeenCalledWith({ to: "/dashboard" });
    });
  });

  test("should handle login failure", async () => {
    const mockError = new Error("Login failed");
    mockMutateAsync.mockRejectedValueOnce(mockError);
    console.error = vi.fn();

    render(<LoginAsPersonal />);
    fireEvent.click(screen.getByText("Login as Personal"));

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalledWith("personal");
      expect(console.error).toHaveBeenCalledWith(mockError);
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });
});
