import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useRouter } from '@/hooks/useRouter';
import { NavBar } from './nav-bar/NavBar';
import { Container } from './container/Container';

export const DefaultLayout = () => {
  const { currentPageData } = useRouter();

  const title = currentPageData?.title;

  return (
    <>
      <Helmet>{title && <title>{title}</title>}</Helmet>
      <div>
        <NavBar />
        <Container className="py-5">
          {title && (
            <h1>
              <strong className="bg-gradient-to-r from-primary-red via-primary-red-dark to-primary-red bg-[length:100%_5px] bg-no-repeat bg-bottom">
                {title}
              </strong>
            </h1>
          )}
          <Outlet />
        </Container>
      </div>
    </>
  );
};
