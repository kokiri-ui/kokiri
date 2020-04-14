export enum LayoutType {
  Grid = 'grid',
  Flex = 'flex',
  Vertical = 'vertical',
  Inline = 'inline'
}

export interface GridBreakpointProp {
  span?: number;
  offset?: number;
  pull?: number;
  push?: number;
}

export interface GridBreakpointListProp {
  xs?: GridBreakpointProp;
  sm?: GridBreakpointProp;
  md?: GridBreakpointProp;
  lg?: GridBreakpointProp;
  xl?: GridBreakpointProp;
  xxl?: GridBreakpointProp;
}

export interface FlexBreakpointListProp {
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  xxl?: number | string;
}
