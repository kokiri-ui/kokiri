import { StatusType } from '../../aliases';

export interface ILinkComponent {
  url?: string;
  type?: StatusType;
  disabled?: boolean;
  underline?: boolean;
}
