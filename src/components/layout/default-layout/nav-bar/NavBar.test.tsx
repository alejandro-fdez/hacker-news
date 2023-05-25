import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';

const TestNavBar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
};

describe('NavBar', () => {
  it('Display Main Navigation Desktop', () => {
    render(<TestNavBar />);

    expect(
      screen.getByRole('navigation', { name: 'Main navigation' })
    ).toBeInTheDocument();

    expect(screen.getAllByRole('menuitem').length).toBeGreaterThan(0);
  });

  it('Hide Main Navigation mobile', () => {
    render(<TestNavBar />);

    expect(
      screen.queryByRole('navigation', { name: 'Main navigation mobile' })
    ).not.toBeInTheDocument();
  });

  it('Show/Hide Main Navigation mobile on click', () => {
    render(<TestNavBar />);
    const menuButton = screen.getByRole('button', { name: 'Open main menu' });
    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(
      screen.getByRole('navigation', { name: 'Main navigation mobile' })
    ).toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(
      screen.queryByRole('navigation', { name: 'Main navigation mobile' })
    ).not.toBeInTheDocument();
  });
});
