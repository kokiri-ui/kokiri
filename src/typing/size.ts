import { NumberOrString } from './basic';

type LooseSize = NumberOrString;

type SizeType = 'small' | 'medium' | 'large';

type AvatarSize = SizeType | number;

export { LooseSize, SizeType, AvatarSize };
