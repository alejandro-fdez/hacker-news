import { Navigate } from 'react-router-dom';
import { NavigateToNotFoundPageProps } from './NavigateToNotFoundPage.types';

export const NavigateToNotFoundPage = ({
  enabled,
}: NavigateToNotFoundPageProps) => {
  return enabled ? <Navigate to="/404" replace /> : null;
};
