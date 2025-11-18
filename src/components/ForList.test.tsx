import { render, screen } from "@testing-library/react";
import { WorksList, EducationsList, InterviewList, SNSList } from "./ForList";
import { Work, Education, Interview, SNS } from "../WorksAndEducations";

describe("WorksList", () => {
  const mockWorks: Work[] = [
    {
      title: "Test Work 1",
      description: "Test description 1",
      peerReview: true,
      book: "Test Conference 2024",
    },
    {
      title: "Test Work 2",
      description: "Test description 2",
      peerReview: false,
    },
  ];

  test("renders works list", () => {
    render(<WorksList works={mockWorks} />);
    expect(screen.getByText("Test Work 1")).toBeInTheDocument();
    expect(screen.getByText("Test Work 2")).toBeInTheDocument();
  });

  test("displays peer review badge for reviewed works", () => {
    render(<WorksList works={mockWorks} />);
    expect(screen.getByText("査読有")).toBeInTheDocument();
  });
});

describe("EducationsList", () => {
  const mockEducations: Education[] = [
    {
      school: "Test University",
      status: "入学",
      time: "2020年4月",
    },
    {
      school: "Test University",
      status: "卒業",
      time: "2024年3月",
    },
  ];

  test("renders education list", () => {
    render(<EducationsList educations={mockEducations} />);
    expect(screen.getByText("Test University 入学")).toBeInTheDocument();
    expect(screen.getByText("Test University 卒業")).toBeInTheDocument();
  });

  test("renders time correctly", () => {
    render(<EducationsList educations={mockEducations} />);
    expect(screen.getByText("2020年4月")).toBeInTheDocument();
    expect(screen.getByText("2024年3月")).toBeInTheDocument();
  });
});

describe("InterviewList", () => {
  const mockInterviews: Interview[] = [
    {
      title: "Test Interview",
      time: "2023年1月",
      description: "Test interview description",
      url: "https://example.com",
      specifiedId: "test-id",
    },
  ];

  test("renders interview list", () => {
    render(<InterviewList interviews={mockInterviews} />);
    expect(screen.getByText("Test Interview")).toBeInTheDocument();
    expect(screen.getByText("2023年1月")).toBeInTheDocument();
    expect(screen.getByText("Test interview description")).toBeInTheDocument();
  });
});

describe("SNSList", () => {
  const mockSNS: SNS[] = [
    {
      address: "/images/test.svg",
      name: "Test SNS",
      url: "https://test.com",
    },
  ];

  test("renders SNS list", () => {
    render(<SNSList sns={mockSNS} />);
    const image = screen.getByAltText("Test SNS");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/test.svg");
  });
});
