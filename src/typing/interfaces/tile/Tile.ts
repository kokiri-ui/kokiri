import { DirectionType, LooseSize } from '../../aliases';

export interface ITileComponent {
  direction?: DirectionType; // 排列方向
  width?: LooseSize; // 每个单元格的宽度
  height?: LooseSize; // 每个单元格的高度
}
