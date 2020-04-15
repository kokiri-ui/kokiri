import { ComplexPlacementType, TriggerType } from '../../aliases';

export interface IPopoverComponent {
  title?: string;
  trigger?: TriggerType;
  placement?: ComplexPlacementType;
}
