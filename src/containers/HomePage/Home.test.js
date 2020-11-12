import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders learn title', () => {
    render(<HomePage />);
    const title = screen.getByText(/car rental/i);
    expect(title).toBeInTheDocument();
  });
})
