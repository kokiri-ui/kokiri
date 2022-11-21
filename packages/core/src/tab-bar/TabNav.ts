import { TabNavFlag, ITabNavComponent, TabNavHeadlessComponent } from 'petals-ui/dist/tab-bar';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class TabNavStructuralComponent
  extends BaseStructuralComponent<TabNavHeadlessComponent>
  implements ITabNavComponent {
  @Prop({ type: [Number, String], default: 0 })
  public readonly flag!: TabNavFlag;

  @Prop({ type: Boolean, default: false })
  public readonly active!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: String, default: '' })
  public readonly activeClassName!: string;

  @Prop({ type: String, default: '' })
  public readonly disabledClassName!: string;

  public created(): void {
    this.setHeadlessComponent(new TabNavHeadlessComponent(this));
  }
}

export { TabNavStructuralComponent };
