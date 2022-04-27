import { render, screen } from '@testing-library/react';
import Header from './header';

test('Header 테스트', () => {
    render(<Header title="aaa" />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });