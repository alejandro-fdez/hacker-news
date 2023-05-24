import { CardJobProps } from '../Card.types';
import { Card, CardHeader, CardTitle } from '../Card';

export const CardJob = ({ className, data }: CardJobProps) => {
  const { title, time, url } = data;

  return (
    <Card className={className}>
      <CardHeader time={time} />
      <CardTitle url={url}>{title}</CardTitle>
    </Card>
  );
};
