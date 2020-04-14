type VerticalPlacement = 'top' | 'bottom';
type VerticalCornerPlacement = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
type ComplexVerticalPlacement = VerticalPlacement | VerticalCornerPlacement;

type HorizontalPlacement = 'right' | 'left';
type HorizontalCornerPlacement = 'right-top' | 'right-bottom' | 'left-bottom' | 'left-top';
type ComplexHorizontalPlacement = HorizontalPlacement | HorizontalCornerPlacement;

type PlacementType = VerticalPlacement | HorizontalPlacement;
type ComplexPlacement =
  | PlacementType
  | 'top-left'
  | 'top-right'
  | 'right-top'
  | 'right-bottom'
  | 'bottom-right'
  | 'bottom-left'
  | 'left-bottom'
  | 'left-top';

export {
  VerticalCornerPlacement,
  ComplexVerticalPlacement,
  HorizontalCornerPlacement,
  ComplexHorizontalPlacement,
  PlacementType,
  ComplexPlacement,
};
