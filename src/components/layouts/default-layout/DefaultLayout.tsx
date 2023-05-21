import { Outlet } from 'react-router-dom';

export const DefaultLayout = () => (
  <div>
    <nav>My nav</nav>
    <div>
      <Outlet />
    </div>
  </div>
);
