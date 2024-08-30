import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, vi, beforeEach, test } from "vitest";
import Layout from "@/components/Layout";
import { useRouterState } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UNAUTHENTICATED_ROUTES } from "@/lib/constants";

vi.mock("@tanstack/react-router", () => ({
  useRouterState: vi.fn(),
  useNavigate: vi.fn(),
  Link: (prop) => {
    const { children } = prop;
    return <a>{children}</a>;
  },
}));

describe("Layout component", () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderWithQueryClient = (ui) => {
    return render(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );
  };

  test("should render children without layout for unauthenticated routes", () => {
    useRouterState.mockReturnValue({
      location: { pathname: UNAUTHENTICATED_ROUTES[0] },
    });
    const childText = "Unauthenticated Route Content";
    renderWithQueryClient(
      <Layout>
        <p>{childText}</p>
      </Layout>
    );
    expect(screen.getByText(childText)).toBeInTheDocument();
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    expect(screen.queryByTestId("authorized-route")).not.toBeInTheDocument();
  });

  test("should render the default layout for authenticated routes", async () => {
    useRouterState.mockReturnValue({
      location: { pathname: "/dashboard" },
    });
    const childText = "Authenticated Route Content";
    renderWithQueryClient(
      <Layout>
        <p>{childText}</p>
      </Layout>
    );

    waitFor(() => {});

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.queryByTestId("authorized-route")).toBeInTheDocument();
    expect(screen.getByText(childText)).toBeInTheDocument();
  });
});
