import { LooseSize, GridBreakpointProp, GridBreakpointListProp, FlexBreakpointListProp } from '../../aliases';

export interface IFormItemBasic {
  labelWidth?: LooseSize | FlexBreakpointListProp;
  labelCol?: GridBreakpointProp | GridBreakpointListProp;
  controlCol?: GridBreakpointProp | GridBreakpointListProp;
}

export interface IFormItemComponent extends IFormItemBasic {
  label?: string;
  help?: string;
  separator?: string;
  required?: boolean;
  editable?: boolean;
}
