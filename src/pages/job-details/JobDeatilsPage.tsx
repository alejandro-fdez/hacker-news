import { useParams } from 'react-router-dom';

export const JobDetailsPage = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};
