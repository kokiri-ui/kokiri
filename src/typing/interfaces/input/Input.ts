import { ITextFormControl } from '../form/FormControl';
import { InputType } from '../../aliases';

export interface IInputComponent extends ITextFormControl {
  type?: InputType;
}
