import { INavMenuItemComponent, NavMenuItemHeadlessComponent } from 'petals-ui/dist/nav-menu';

import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

type LinkHref = string;

@Component
class NavMenuItemStructuralComponent
  extends BaseStructuralComponent<NavMenuItemHeadlessComponent>
  implements INavMenuItemComponent<LinkHref> {
  @Prop({ type: String, default: '' })
  public readonly flag!: string;

  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: String, default: '' })
  public readonly icon!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: String, default: '' })
  public readonly href!: LinkHref;

  @Emit('click')
  protected onClick(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new NavMenuItemHeadlessComponent(this));
  }
}

export { NavMenuItemStructuralComponent };
