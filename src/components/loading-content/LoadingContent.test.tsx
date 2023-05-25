import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { LoadingContent } from './LoadingContent';

const content = <h1>Content</h1>;

describe('LoadingContent', () => {
  it('Hide content while loading', () => {
    render(<LoadingContent isLoading>{content}</LoadingContent>);

    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument();
    expect(
      screen.getByRole('status', { name: 'Loading content' })
    ).toBeInTheDocument();
  });
  it('Show content when is not loading', () => {
    render(<LoadingContent isLoading={false}>{content}</LoadingContent>);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
