import {
  INavMenuItemGroupComponent,
  NavMenuItemGroupHeadlessComponent,
} from 'petals-ui/dist/nav-menu';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class NavMenuItemGroupStructuralComponent
  extends BaseStructuralComponent<NavMenuItemGroupHeadlessComponent>
  implements INavMenuItemGroupComponent {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  public created(): void {
    this.setHeadlessComponent(new NavMenuItemGroupHeadlessComponent(this));
  }
}

export { NavMenuItemGroupStructuralComponent };
