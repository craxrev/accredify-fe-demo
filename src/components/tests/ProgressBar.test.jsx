import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProgressBar from "@/components/ProgressBar";

vi.mock("react-countup", () => ({
  default: ({ end }) => <span>{end}%</span>,
}));

describe("ProgressBar", () => {
  it("renders the ProgressBar with the correct percentage and SVG circle attributes", async () => {
    render(<ProgressBar percentage={75} colour="blue" />);

    await waitFor(() => {
      expect(screen.getByText("75%")).toBeInTheDocument();
    });
    const circles = screen.getAllByTestId("progress-circle");
    expect(circles).toHaveLength(2);
    const secondCircle = circles[1];
    expect(secondCircle).toHaveAttribute("stroke", "blue");
  });
});

describe("ProgressBar", () => {
  it("renders the ProgressBar 100% when percentage is over 100", async () => {
    render(<ProgressBar percentage={175} colour="blue" />);

    await waitFor(() => {
      expect(screen.getByText("100%")).toBeInTheDocument();
    });
  });
});

describe("ProgressBar", () => {
  it("renders the ProgressBar 0% when percentage is under 0", async () => {
    render(<ProgressBar percentage={-100} colour="blue" />);

    await waitFor(() => {
      expect(screen.getByText("0%")).toBeInTheDocument();
    });
  });
});
