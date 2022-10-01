import { styled } from '@nextui-org/react';

import allFlexVariants from './variants';

const Column = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    ...allFlexVariants,
    centerVertically: {
      true: { justifyContent: 'center' },
    },
  },
});

export default Column;
