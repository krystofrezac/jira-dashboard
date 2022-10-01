import { FC } from 'react';

import { Badge, StyledBadge, VariantProps } from '@nextui-org/react';

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
    ToDo: 'default',
    InProgress: 'primary',
    CodeReview: 'warning',
    Done: 'success',
    Open: 'secondary',
  };

  return (
    <Badge size='sm' color={color[name]}>
      {name}
    </Badge>
  );
};

export default Status;
