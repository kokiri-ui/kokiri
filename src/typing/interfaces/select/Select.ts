import { IFormControl } from '../form/FormControl';
import { NumberOrString } from '../../aliases';

export type SelectValueType = NumberOrString | NumberOrString[];

export interface ISelectComponent extends IFormControl<SelectValueType> {
  placeholder?: string;
  clearable?: boolean;
  multiple?: boolean;
}
