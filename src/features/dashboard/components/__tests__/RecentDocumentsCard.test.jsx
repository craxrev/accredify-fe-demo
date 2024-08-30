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
        {
          id: 1,
          document_name: "Document 1",
          received_on: "2024-01-01",
          expected_received_on: "1 Jan 2024",
        },
        {
          id: 2,
          document_name: "Document 2",
          received_on: "2024-02-01",
          expected_received_on: "1 Feb 2024",
        },
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
      expect(screen.getByText(document.document_name)).toBeInTheDocument();
      expect(
        screen.getByText(document.expected_received_on),
      ).toBeInTheDocument();
    });
  });
});
