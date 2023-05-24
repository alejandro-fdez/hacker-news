import { CardJobProps } from '../Card.types';
import { Card, CardHeader, CardTitle } from '../Card';

export const CardJob = ({ className, data }: CardJobProps) => {
  const { id, title, time, url } = data;

  const internalUrl = `/job/${id}`;

  return (
    <Card className={className}>
      <CardHeader time={time} />
      <CardTitle url={url ?? internalUrl} isInternalLink={!!internalUrl}>
        {title}
      </CardTitle>
    </Card>
  );
};
