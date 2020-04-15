import { FormLayoutType } from '../../aliases';
import { IFormItemBasic } from './FormItem';

export interface IFormComponent extends IFormItemBasic {
  layout?: FormLayoutType;
}
