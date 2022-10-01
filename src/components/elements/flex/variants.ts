export const gapVariants = {
  xs: {
    gap: '$xs',
  },
  sm: {
    gap: '$sm',
  },
  md: {
    gap: '$md',
  },
};

const getSpacingVariant = (
  spacingProperty:
    | 'padding'
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingTop'
    | 'paddingBottom',
) => ({
  md: { [spacingProperty]: '$md' },
});

export const withSpacingVariants = getSpacingVariant('padding');
export const withSpacingLeftVariants = getSpacingVariant('paddingLeft');
export const withSpacingRightVariants = getSpacingVariant('paddingRight');
export const withSpacingTopVariants = getSpacingVariant('paddingTop');
export const withSpacingBottomVariants = getSpacingVariant('paddingBottom');

const allFlexVariants = {
  gap: gapVariants,
  withSpacing: withSpacingVariants,
  withSpacingLeft: withSpacingLeftVariants,
  withSpacingRight: withSpacingRightVariants,
  withSpacingTop: withSpacingTopVariants,
  withSpacingBottom: withSpacingBottomVariants,
};

export default allFlexVariants;
