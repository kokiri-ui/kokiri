import { GridBreakpointProp } from '../../aliases';

interface IGridColComponent extends GridBreakpointProp {
  xs?: number | GridBreakpointProp;
  sm?: number | GridBreakpointProp;
  md?: number | GridBreakpointProp;
  lg?: number | GridBreakpointProp;
  xl?: number | GridBreakpointProp;
  xxl?: number | GridBreakpointProp;
}

export { IGridColComponent };
