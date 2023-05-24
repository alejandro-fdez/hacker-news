import { CardArticleProps } from '../Card.types';
import { Card, CardFooter, CardHeader, CardTitle } from '../Card';

export const CardArticle = ({ className, data }: CardArticleProps) => {
  const { title, type, by, time, kids, url } = data;

  return (
    <Card className={className}>
      <CardHeader time={time} type={type} />
      <CardTitle url={url}>{title}</CardTitle>
      <CardFooter author={by} numComments={kids?.length ?? 0} />
    </Card>
  );
};
