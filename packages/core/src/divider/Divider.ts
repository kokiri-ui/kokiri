import { DirectionType, HorizontalAlignment } from 'petals-ui/dist/basic';
import { IDividerComponent, DividerHeadlessComponent } from 'petals-ui/dist/divider';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class DividerStructuralComponent
  extends BaseStructuralComponent<DividerHeadlessComponent>
  implements IDividerComponent {
  /**
   * 分割线方向
   */
  @Prop({ type: String, default: 'horizontal' })
  public readonly direction!: DirectionType;

  /**
   * 分割线文案位置
   */
  @Prop({ type: String, default: 'center' })
  public readonly align!: HorizontalAlignment;

  public created(): void {
    this.setHeadlessComponent(new DividerHeadlessComponent(this));
  }
}

export { DividerStructuralComponent };
