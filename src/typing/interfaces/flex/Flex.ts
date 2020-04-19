import { DirectionType } from '../../aliases';

type FlexAlignment = 'start' | 'center' | 'end';

interface IFlexComponent {
  direction?: DirectionType;
  align?: FlexAlignment;
  justify?: FlexAlignment;
  reverse?: boolean;
}

export { FlexAlignment, IFlexComponent };
