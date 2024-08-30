import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import DocumentRow from "@/components/DocumentRow"; 

describe("DocumentRow", () => {
  test("renders document information correctly", () => {
    const document = {
      document_name: "Sample Document",
      received_on: "2024-08-29T00:00:00Z",
    };

    render(<DocumentRow document={document} />);
    expect(screen.getByText("Sample Document")).toBeInTheDocument();
    expect(screen.getByText("29 Aug 2024")).toBeInTheDocument();
  });
});
