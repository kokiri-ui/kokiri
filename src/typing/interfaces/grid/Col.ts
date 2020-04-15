import { GridBreakpointProp } from '../../aliases';

export interface IGridColComponent {
  span?: number;
  offset?: number;
  pull?: number;
  push?: number;
  xs?: number | GridBreakpointProp;
  sm?: number | GridBreakpointProp;
  md?: number | GridBreakpointProp;
  lg?: number | GridBreakpointProp;
  xl?: number | GridBreakpointProp;
  xxl?: number | GridBreakpointProp;
}
