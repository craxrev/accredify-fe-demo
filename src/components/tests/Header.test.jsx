import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi, describe, beforeEach, test, expect } from "vitest";
import Header from "@/components/Header";
import { useUser } from "@/hooks/user";
import { removeAuthCookies } from "@/features/auth/utils/authCookies.utils";
import { useNavigate } from "@tanstack/react-router";

vi.mock("@tanstack/react-router", () => ({
  useNavigate: vi.fn(),
}));

vi.mock("@/hooks/user", () => ({
  useUser: vi.fn(),
}));

vi.mock("@/features/auth/utils/authCookies.utils", () => ({
  removeAuthCookies: vi.fn(),
}));

describe("Header component", () => {
  const navigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    useNavigate.mockReturnValue(navigate);
  });

  test("should render loading state", () => {
    useUser.mockReturnValue({
      user: null,
      isLoading: true,
    });

    render(<Header />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test("should render the user's name and initials", () => {
    useUser.mockReturnValue({
      user: { data: { name: "John Doe" } },
      isLoading: false,
    });

    render(<Header />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  test("should render a popover and call handleLogout on logout button click", async () => {
    useUser.mockReturnValue({
      user: { data: { name: "John Doe" } },
      isLoading: false,
    });
    render(<Header />);
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() =>
      expect(screen.getByText("Log out")).toBeInTheDocument()
    );
    fireEvent.click(screen.getByText(/Log out/i));
    expect(removeAuthCookies).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith({ to: "/" });
  });
});
