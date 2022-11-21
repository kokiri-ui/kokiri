import { LooseSize } from 'petals-ui/dist/basic';
import { IBoxContentComponent } from 'petals-ui/dist/divided-box';

import { Component, Prop } from 'vue-property-decorator';

import { FlexBoxStructuralComponent } from './FlexBox';

/**
 * `HDividedBox` 和 `VDividedBox` 的子组件
 */
@Component
class BoxContentStructuralComponent
  extends FlexBoxStructuralComponent
  implements IBoxContentComponent {
  // 宽度，只在 `HDividedBox` 中有效
  @Prop({ type: [Number, String] })
  public readonly width!: LooseSize;

  // 高度，只在 `VDividedBox` 中有效
  @Prop({ type: [Number, String] })
  public readonly height!: LooseSize;
}

export { BoxContentStructuralComponent };
