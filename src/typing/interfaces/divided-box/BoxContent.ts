import { LooseSize } from '../../aliases';
import { IFlexBoxComponent } from './FlexBox';

export interface IBoxContentComponent extends IFlexBoxComponent {
  width?: LooseSize;
  height?: LooseSize;
}
