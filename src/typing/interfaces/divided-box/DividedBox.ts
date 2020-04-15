import { AdjustmentType, DirectionType } from '../../aliases';
import { IFlexBoxComponent } from './FlexBox';

export interface IDividedBoxComponent extends IFlexBoxComponent {
  adjust?: AdjustmentType;
  direction?: DirectionType;
}
