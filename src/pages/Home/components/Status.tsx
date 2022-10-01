import { FC } from 'react';

import { Badge } from '@nextui-org/react';

interface StatusProps {
  name: string;
}

const Status: FC<StatusProps> = ({ name }) => {
  const color: Record<
    string,
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | undefined
  > = {
    InProgress: 'primary',
    CodeReview: 'warning',
    Done: 'success',
    'To Do': 'secondary',
  };

  return (
    <Badge size='sm' color={color[name]}>
      {name}
    </Badge>
  );
};

export default Status;
