import { PlacementType } from '../../aliases';

export interface IDrawerComponent {
  title?: string;
  placement?: PlacementType;
  visible?: boolean;
  mask?: boolean;
  closable?: boolean;
  maskClosable?: boolean;
  appendToBody?: boolean;
  wrapperClass?: string | object;
  loading?: boolean;
}
