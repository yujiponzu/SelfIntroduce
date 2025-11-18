import { render, screen } from "@testing-library/react";
import { TitleComponents, Heading } from "./StyledComponents";

describe("TitleComponents", () => {
  test("renders title text", () => {
    render(<TitleComponents title="Test Title" />);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders with custom title", () => {
    const customTitle = "カスタムタイトル";
    render(<TitleComponents title={customTitle} />);
    const titleElement = screen.getByText(customTitle);
    expect(titleElement).toBeInTheDocument();
  });
});

describe("Heading", () => {
  test("renders heading text", () => {
    render(<Heading heading="Test Heading" />);
    const headingElement = screen.getByText(/Test Heading/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders with custom heading", () => {
    const customHeading = "カスタム見出し";
    render(<Heading heading={customHeading} />);
    const headingElement = screen.getByText(customHeading);
    expect(headingElement).toBeInTheDocument();
  });
});
