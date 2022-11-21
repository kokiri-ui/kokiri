import { LooseSize, DirectionType } from 'petals-ui/dist/basic';
import { ITileComponent } from 'petals-ui/dist/tile';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class TileStructuralComponent extends BaseStructuralComponent implements ITileComponent {
  /**
   * 排列方向
   *
   * 可选值为 `'horizontal'` 和 `'vertical'`，默认为 `'horizontal'`
   */
  @Prop({ type: String, default: 'horizontal' })
  public readonly direction!: DirectionType;

  /**
   * 每个单元格的宽度
   *
   * 为 `0` 时自动获取子项中最宽的作为基准
   */
  @Prop({ type: Number, default: 0 })
  public readonly width!: LooseSize;

  /**
   * 每个单元格的高度
   *
   * 为 `0` 时自动获取子项中最高的作为基准
   */
  @Prop({ type: Number, default: 0 })
  public readonly height!: LooseSize;
}

export { TileStructuralComponent };
