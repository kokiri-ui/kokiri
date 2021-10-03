import {
  TabNavFlag,
  TabNavType,
  ITabBarComponent,
  TabBarHeadlessComponent,
} from 'petals-ui/dist/tab-bar';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class TabBarStructuralComponent
  extends BaseStructuralComponent<TabBarHeadlessComponent>
  implements ITabBarComponent {
  @Prop({ type: Array, default: () => [] })
  public readonly navs!: TabNavType[];

  @Prop({ type: [Number, String], default: 0 })
  public readonly activeFlag!: TabNavFlag;

  /**
   * 选项卡是否拉伸
   */
  @Prop({ type: Boolean, default: false })
  public readonly stretch!: boolean;

  @Prop({ type: String, default: '' })
  public readonly prevButtonIcon!: string;

  @Prop({ type: String, default: '' })
  public readonly prevButtonClassName!: string;

  @Prop({ type: String, default: '' })
  public readonly nextButtonIcon!: string;

  @Prop({ type: String, default: '' })
  public readonly nextButtonClassName!: string;

  @Prop({ type: String, default: '' })
  public readonly mainClassName!: string;

  @Prop({ type: String, default: '' })
  public readonly extraClassName!: string;

  @Prop({ type: String, default: '' })
  public readonly contentClassName!: string;

  @Prop({ type: String, default: '' })
  public readonly navsClassName!: string;

  @Prop({ type: String, default: '' })
  public readonly navClassName!: string;

  @Prop({ type: String, default: '' })
  public readonly navActiveClassName!: string;

  @Prop({ type: String, default: '' })
  public readonly navDisabledClassName!: string;

  public created(): void {
    this.setHeadlessComponent(new TabBarHeadlessComponent(this));
  }
}

export { TabBarStructuralComponent };
