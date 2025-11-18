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
    const introductionHeadings = screen.getAllByText(/自己紹介/i);
    expect(introductionHeadings.length).toBeGreaterThan(0);
  });

  test('renders works section', () => {
    render(<App />);
    const worksHeadings = screen.getAllByText(/研究業績/i);
    expect(worksHeadings.length).toBeGreaterThan(0);
  });

  test('renders education section', () => {
    render(<App />);
    const educationHeadings = screen.getAllByText(/学歴/i);
    expect(educationHeadings.length).toBeGreaterThan(0);
  });

  test('renders interview section', () => {
    render(<App />);
    const interviewHeadings = screen.getAllByText(/インタビュー/i);
    expect(interviewHeadings.length).toBeGreaterThan(0);
  });

  test('renders name', () => {
    render(<App />);
    const nameElement = screen.getByText(/植田 雄士/i);
    expect(nameElement).toBeInTheDocument();
  });
});
