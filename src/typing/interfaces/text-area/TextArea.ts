import { ITextFormControl } from '../form/FormControl';
import { ResizeType } from '../../aliases';

export interface ITextAreaComponent extends ITextFormControl {
  row?: number;
  showWordLimit?: boolean;
  resize?: ResizeType;
}
