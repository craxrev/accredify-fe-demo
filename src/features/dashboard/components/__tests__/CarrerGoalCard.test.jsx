import { render, screen, waitFor } from "@testing-library/react";
import { vi, test, describe, afterEach, expect } from "vitest";
import CareerGoalCard from "@/features/dashboard/components/CareerGoalCard";
import { useQuery } from "@tanstack/react-query";

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));
vi.mock("@tanstack/react-router", () => ({
  Link: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
}));

describe("CareerGoalCard Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should display loading text while data is loading", () => {
    useQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
    });
    render(<CareerGoalCard />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("should render the goal details when data is available", async () => {
    const mockGoal = {
      name: "Software Engineer",
      progress: 70,
      description: "Achieve proficiency in software development",
    };

    useQuery.mockReturnValue({
      data: { data: [mockGoal] },
      isLoading: false,
    });

    render(<CareerGoalCard />);
    expect(screen.getByText("Career Goal")).toBeInTheDocument();
    expect(screen.getByText("Your Progress")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("70%")).toBeInTheDocument();
    });
    expect(screen.getByText("I want to become a")).toBeInTheDocument();
    expect(screen.getByText(mockGoal.name)).toBeInTheDocument();
    expect(screen.getByTitle(mockGoal.description)).toBeInTheDocument();
    expect(screen.getByText("View Insights")).toBeInTheDocument();
  });
});
