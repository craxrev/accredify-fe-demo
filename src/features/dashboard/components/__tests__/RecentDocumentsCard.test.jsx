import { render, screen } from "@testing-library/react";
import { vi, describe, afterEach, test, expect } from "vitest";
import RecentDocumentsCard from "@/features/dashboard/components/RecentDocumentsCard";
import { useQuery } from "@tanstack/react-query";

// Mocking the dependencies
vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));
vi.mock("@tanstack/react-router", () => ({
  Link: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
}));
vi.mock("@/features/dashboard/components/DocumentRow", () => ({
  __esModule: true,
  default: ({ document }) => (
    <div>
      <p>{document.name}</p>
      <p>{document.receivedOn}</p>
    </div>
  ),
}));

describe("RecentDocumentsCard Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should display loading text while data is loading", () => {
    useQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    render(<RecentDocumentsCard />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("should render document rows when documents are available", async () => {
    const mockDocuments = {
      data: [
        { id: 1, name: "Document 1", receivedOn: "2024-01-01" },
        { id: 2, name: "Document 2", receivedOn: "2024-02-01" },
      ],
    };

    useQuery.mockReturnValue({
      data: mockDocuments,
      isLoading: false,
    });

    render(<RecentDocumentsCard />);
    expect(screen.getByText("Recent Documents")).toBeInTheDocument();
    expect(screen.getByText("View All Documents")).toBeInTheDocument();
    mockDocuments.data.forEach((document) => {
      expect(screen.getByText(document.name)).toBeInTheDocument();
      expect(screen.getByText(document.receivedOn)).toBeInTheDocument();
    });
  });
});
