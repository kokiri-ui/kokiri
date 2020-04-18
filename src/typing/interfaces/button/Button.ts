import { VNode } from 'vue';
import { SizeType } from '../../aliases';
import { IBaseComponent } from '../basic';

type ButtonType = 'filled' | 'dashed' | 'link';

type ButtonShape = 'round' | 'circle';

interface IButtonComponent extends IBaseComponent {
  type?: ButtonType;
  size?: SizeType;
  shape?: ButtonShape;
  icon?: VNode | string;
  primary?: boolean;
  danger?: boolean;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export { ButtonType, ButtonShape, IButtonComponent };
