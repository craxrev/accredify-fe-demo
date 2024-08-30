import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Card from "@/components/Card"; 

describe("Card component", () => {
  test("should render children correctly", () => {
    const childText = "This is a child element";
    render(
      <Card>
        <p>{childText}</p>
      </Card>
    );
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  test("should apply the correct class names", () => {
    const customClassName = "custom-class";
    render(<Card className={customClassName}>Content</Card>);
    const cardElement = screen.getByText("Content").closest("div");
    expect(cardElement).toHaveClass(customClassName);
  });
});
