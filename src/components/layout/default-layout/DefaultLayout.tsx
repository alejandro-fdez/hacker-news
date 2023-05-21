import { Outlet } from 'react-router-dom';
import { NavBar } from './nav-bar/NavBar';
import { Container } from './container/Container';

export const DefaultLayout = () => (
  <div>
    <NavBar />
    <Container>
      <Outlet />
    </Container>
  </div>
);
