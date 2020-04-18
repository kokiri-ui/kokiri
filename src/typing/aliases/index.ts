export type NumberOrString = number | string;

export type ColorType = string;

export type LooseSize = NumberOrString;
export type SizeType = 'small' | 'medium' | 'large';

export type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export type AvatarShape = 'circle' | 'square';
export type AvatarSize = SizeType | number;

type BasicStatus = 'default' | 'success' | 'warning';

export type StatusType = BasicStatus | 'primary' | 'danger' | 'info';
export type ProcessStatusType = BasicStatus | 'error' | 'processing';

export type AdjustmentType = 'auto' | 'average';
export type DirectionType = 'horizontal' | 'vertical';
export type ResizeType = DirectionType | 'both' | 'none';

export type OrientationType = 'left' | 'center' | 'right';

export type PlacementType = 'top' | 'right' | 'bottom' | 'left';
export type ComplexPlacementType =
  | PlacementType
  | 'top-left'
  | 'top-right'
  | 'right-top'
  | 'right-bottom'
  | 'bottom-right'
  | 'bottom-left'
  | 'left-bottom'
  | 'left-top';

export type GridType = 'grid' | 'flex';
export type FormLayoutType = GridType | 'vertical' | 'inline';

export type LayoutRole = 'container' | 'header' | 'footer' | 'content' | 'sidebar';

export type GridBreakpointProp = {
  span?: number;
  offset?: number;
  pull?: number;
  push?: number;
};

export type GridBreakpointListProp = {
  xs?: GridBreakpointProp;
  sm?: GridBreakpointProp;
  md?: GridBreakpointProp;
  lg?: GridBreakpointProp;
  xl?: GridBreakpointProp;
  xxl?: GridBreakpointProp;
};

export type FlexBreakpointListProp = {
  xs?: NumberOrString;
  sm?: NumberOrString;
  md?: NumberOrString;
  lg?: NumberOrString;
  xl?: NumberOrString;
  xxl?: NumberOrString;
};

export type InputType = 'text' | 'password' | 'url';

export type TriggerType = 'hover' | 'click' | 'focus';
