import { NumberOrString } from '../../aliases';
import { ITextFormControl } from '../form/FormControl';

interface OptionItem {
  label: string;
  value: NumberOrString;
}

type IFilterOption = (input: string, option: OptionItem) => boolean;

type IValidateSearch = (text: string, split: string) => boolean;

export interface IMentionComponent extends ITextFormControl {
  rows?: number;
  split?: string;
  prefix?: string | string[];
  filter?: IFilterOption;
  validate?: IValidateSearch;
}

export type SuggestionItem = string | OptionItem;
export { OptionItem, IFilterOption, IValidateSearch };
