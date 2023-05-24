import { Helmet } from 'react-helmet-async';

export const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1>PAGE NOT FOUND</h1>
    </>
  );
};
