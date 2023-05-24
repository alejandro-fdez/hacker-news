import { CardAskProps } from '../Card.types';
import { Card, CardFooter, CardHeader, CardTitle } from '../Card';

export const CardAsk = ({ className, data }: CardAskProps) => {
  const { title, time, by, kids } = data;

  return (
    <Card className={className}>
      <CardHeader time={time} />
      <CardTitle>{title}</CardTitle>
      <CardFooter author={by} numComments={kids?.length ?? 0} />
    </Card>
  );
};
