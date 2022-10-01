import { styled } from '@nextui-org/react';

import allFlexVariants from './variants';

const Row = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  variants: {
    ...allFlexVariants,
    centerVertically: {
      true: { alignItems: 'center' },
    },
  },
});

export default Row;
