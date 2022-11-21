import { INavSubMenuComponent, NavSubMenuHeadlessComponent } from 'petals-ui/dist/nav-menu';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class NavSubMenuStructuralComponent
  extends BaseStructuralComponent<NavSubMenuHeadlessComponent>
  implements INavSubMenuComponent {
  @Prop({ type: String, default: '' })
  public readonly flag!: string;

  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: String, default: '' })
  public readonly icon!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: String, default: '' })
  public readonly popupClassName!: string;

  public created(): void {
    this.setHeadlessComponent(new NavSubMenuHeadlessComponent(this));
  }
}

export { NavSubMenuStructuralComponent };
