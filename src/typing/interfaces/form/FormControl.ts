interface IFormControl<ValueType> {
  value?: ValueType;
  label?: string;
  disabled?: boolean;
}

interface ITextFormControl extends IFormControl<string> {
  placeholder?: string;
  readonly?: boolean;
  clearable?: boolean;
  minlength?: number;
  maxlength?: number;
}

export { IFormControl, ITextFormControl };
