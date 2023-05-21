import { Outlet } from 'react-router-dom';
import { NavBar } from './nav-bar/NavBar';

export const DefaultLayout = () => (
  <div>
    <NavBar />
    <div>
      <Outlet />
    </div>
  </div>
);
