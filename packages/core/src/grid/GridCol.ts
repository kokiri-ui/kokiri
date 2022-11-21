import {
  GridBreakpointOption,
  IGridColComponent,
  GridColHeadlessComponent,
} from 'petals-ui/dist/grid';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class GridColStructuralComponent
  extends BaseStructuralComponent<GridColHeadlessComponent>
  implements IGridColComponent {
  /**
   * 栅格占位格数
   *
   * 为 `0` 时相当于 `display: none;`
   */
  @Prop({ type: Number })
  public readonly span!: number;

  /**
   * 栅格左侧的间隔格数
   */
  @Prop({ type: Number, default: 0 })
  public readonly offset!: number;

  // /**
  //  * 栅格向左移动格数
  //  */
  // @Prop({ type: Number, default: 0 })
  // public readonly pull!: number;

  // /**
  //  * 栅格向右移动格数
  //  */
  // @Prop({ type: Number, default: 0 })
  // public readonly push!: number;

  /**
   * `<576px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object] })
  public readonly xs!: GridBreakpointOption;

  /**
   * `≥576px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object] })
  public readonly sm!: GridBreakpointOption;

  /**
   * `≥768px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object] })
  public readonly md!: GridBreakpointOption;

  /**
   * `≥992px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object] })
  public readonly lg!: GridBreakpointOption;

  /**
   * `≥1200px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object] })
  public readonly xl!: GridBreakpointOption;

  public created(): void {
    this.setHeadlessComponent(new GridColHeadlessComponent(this));
  }
}

export { GridColStructuralComponent };
