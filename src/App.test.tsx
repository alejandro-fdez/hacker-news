import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('Renders Main Title', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
  it('Renders Header and Navbar desktop and mobile', () => {
    render(<App />);

    expect(
      screen.getByRole('banner', { name: 'Main header' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main navigation' })
    ).toBeInTheDocument();
  });
});
