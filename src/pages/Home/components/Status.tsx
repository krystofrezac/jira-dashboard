import { FC, MouseEventHandler } from 'react';

import { Badge } from '@nextui-org/react';

interface StatusProps {
  name: string;
  size?: 'sm' | 'md';
  variant?: 'default' | 'bordered';
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

const Status: FC<StatusProps> = ({
  name,
  size = 'md',
  variant = 'default',
  onClick,
}) => {
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
    DEV: 'success',
    'To Do': 'secondary',
    Blocked: 'error',
  };

  return (
    <Badge
      size={size}
      color={color[name]}
      variant={variant}
      onClick={onClick}
      css={{ cursor: onClick && 'pointer' }}
    >
      {name}
    </Badge>
  );
};

export default Status;
