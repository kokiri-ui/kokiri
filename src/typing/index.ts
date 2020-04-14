import { DirectionType } from './direction';
import { IconOption } from './icon';

type ResizeType = DirectionType | 'both' | 'none';

type CheckableValue = string | number | boolean;

type ComponentStyle = { [key: string]: string };

interface LoadingOption {
  spinning?: boolean;
  fullscreen?: boolean;
  lock?: boolean;
  text?: string;
  spinner?: IconOption | string;
  background?: string;
}

export { ResizeType, CheckableValue, ComponentStyle, LoadingOption };

export * from './basic';
export * from './breakpoint';
export * from './color';
export * from './direction';
export * from './position';
export * from './alignment';
export * from './shape';
export * from './size';
export * from './status';
export * from './layout';
export * from './icon';
