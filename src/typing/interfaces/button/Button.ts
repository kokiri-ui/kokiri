import { VNode } from 'vue';
import { SizeType } from '../../aliases';

type ButtonType = 'filled' | 'dashed' | 'link';

type ButtonShape = 'circle' | 'round';

interface IButtonComponent {
  type?: ButtonType;
  size?: SizeType;
  icon?: VNode | string;
  shape?: ButtonShape;
  primary?: boolean;
  danger?: boolean;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export { ButtonType, ButtonShape, IButtonComponent };
