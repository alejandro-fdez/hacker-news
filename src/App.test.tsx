import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

const WrappedApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

describe('App', () => {
  it('Renders Main Title', () => {
    render(<WrappedApp />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
  it('Renders Header and Navbar desktop and mobile', () => {
    render(<WrappedApp />);

    expect(
      screen.getByRole('banner', { name: 'Main header' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main navigation' })
    ).toBeInTheDocument();
  });
});
