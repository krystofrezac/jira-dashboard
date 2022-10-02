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
    centerHorizontally: {
      true: { alignItems: 'center' },
    },
  },
});

export default Column;
