import { LooseSize, ObjectFit } from '../../aliases';

export interface IImageComponent {
  src?: string;
  alt?: string;
  width?: LooseSize;
  height?: LooseSize;
  fit?: ObjectFit;
}
