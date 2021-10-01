import { DirectionType, AdjustmentType } from 'petals-ui/dist/basic';
import { IDividedBoxComponent } from 'petals-ui/dist/divided-box';

import { Component, Prop } from 'vue-property-decorator';

import { FlexBoxStructuralComponent } from './FlexBox';

@Component
class DividedBoxStructuralComponent
  extends FlexBoxStructuralComponent
  implements IDividedBoxComponent {
  @Prop({ type: String, default: 'vertical' })
  public readonly direction!: DirectionType;

  /**
   * 宽度/高度适配方式
   *
   * 可选值为 `'average'` 和 `'auto'`
   * `HDividedBox` 默认为 `'average'`，`VDividedBox` 默认为 `'auto'`
   */
  @Prop({ type: String })
  public readonly adjust!: AdjustmentType;
}

export { DividedBoxStructuralComponent };
