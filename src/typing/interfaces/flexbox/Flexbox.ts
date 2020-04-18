import { DirectionType } from '../../aliases';

type FlexboxAlignment = 'start' | 'center' | 'end';

interface IFlexboxComponent {
  direction?: DirectionType;
  align?: FlexboxAlignment;
  justify?: FlexboxAlignment;
  reverse?: boolean;
}

export { FlexboxAlignment, IFlexboxComponent };
