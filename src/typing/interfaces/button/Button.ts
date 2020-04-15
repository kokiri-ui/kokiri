import { StatusType, ButtonShape, SizeType } from '../../aliases';

export interface IButtonComponent {
  type?: StatusType;
  size?: SizeType;
  disabled?: boolean;
  icon?: string;
  shape?: ButtonShape;
  loading?: boolean;
  plain?: boolean;
}
