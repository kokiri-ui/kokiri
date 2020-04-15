import { AvatarShape, AvatarSize } from '../../aliases';

export interface IAvatarComponent {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  icon?: string;
}
