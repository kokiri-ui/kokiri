import { TabNavFlag, TabThemeType, TabBarPlacement } from 'petals-ui/dist/tab-bar';
import { ITabsComponent, TabsHeadlessComponent } from 'petals-ui/dist/tabs';

import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class TabsStructuralComponent
  extends BaseStructuralComponent<TabsHeadlessComponent, TabThemeType>
  implements ITabsComponent {
  /**
   * 默认激活的选项卡索引
   */
  @Prop({ type: [String, Number], default: 0 })
  public readonly activeFlag!: TabNavFlag;

  /**
   * 选项卡显示位置
   */
  @Prop({ type: String, default: 'top' })
  public readonly tabBarPlacement!: TabBarPlacement;

  /**
   * 选项卡标签是否拉伸
   */
  @Prop({ type: Boolean, default: false })
  public readonly tabBarStretch!: boolean;

  /**
   * 选项卡内容是否高度固定
   */
  @Prop({ type: Boolean, default: false })
  public readonly fixed!: boolean;

  @Emit('change')
  public onChange(activeFlag: TabNavFlag): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new TabsHeadlessComponent(this));
  }
}

export { TabsStructuralComponent };
