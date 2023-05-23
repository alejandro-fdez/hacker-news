import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useRouter } from '@/hooks/useRouter';
import { NavBar } from './nav-bar/NavBar';
import { Container } from './container/Container';

export const DefaultLayout = () => {
  const {
    currentPageData: { title },
  } = useRouter();

  return (
    <>
      <Helmet>{title && <title>{title}</title>}</Helmet>
      <div>
        <NavBar />
        <Container className="py-5">
          {title && <h1>{title}</h1>}
          <Outlet />
        </Container>
      </div>
    </>
  );
};
