import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App Component', () => {
  test('renders title', () => {
    render(<App />);
    const titleElement = screen.getByText(/植田雄士のホームページ/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders introduction section', () => {
    render(<App />);
    const introductionHeading = screen.getByText(/自己紹介/i);
    expect(introductionHeading).toBeInTheDocument();
  });

  test('renders works section', () => {
    render(<App />);
    const worksHeading = screen.getByText(/研究業績/i);
    expect(worksHeading).toBeInTheDocument();
  });

  test('renders education section', () => {
    render(<App />);
    const educationHeading = screen.getByText(/学歴/i);
    expect(educationHeading).toBeInTheDocument();
  });

  test('renders interview section', () => {
    render(<App />);
    const interviewHeading = screen.getByText(/インタビュー/i);
    expect(interviewHeading).toBeInTheDocument();
  });

  test('renders name', () => {
    render(<App />);
    const nameElement = screen.getByText(/植田 雄士/i);
    expect(nameElement).toBeInTheDocument();
  });
});
