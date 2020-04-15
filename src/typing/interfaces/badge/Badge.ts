import { NumberOrString, ProcessStatusType, ColorType } from '../../aliases';

export interface IBadgeComponent {
  count?: NumberOrString;
  text?: string;
  status?: ProcessStatusType;
  max?: number;
  dot?: boolean;
  color?: ColorType;
}
