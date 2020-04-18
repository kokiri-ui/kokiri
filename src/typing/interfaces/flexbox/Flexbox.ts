import { DirectionType } from '../../aliases';
import { IBaseComponent } from '../basic';

type FlexboxAlignment = 'start' | 'center' | 'end';

interface IFlexboxComponent extends IBaseComponent {
  direction?: DirectionType;
  align?: FlexboxAlignment;
  justify?: FlexboxAlignment;
  reverse?: boolean;
}

export { FlexboxAlignment, IFlexboxComponent };
