import { Component, Prop } from 'vue-property-decorator';

import {
  IDropdownMenuItemComponent,
  DropdownMenuItemHeadlessComponent,
} from 'petals-ui/dist/dropdown';

import { BaseStructuralComponent } from '../basic';

@Component
class DropdownMenuItemStructuralComponent
  extends BaseStructuralComponent<DropdownMenuItemHeadlessComponent>
  implements IDropdownMenuItemComponent {
  @Prop({ type: String, default: '' })
  public readonly flag!: string;

  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: String, default: '' })
  public readonly icon!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  public created(): void {
    this.setHeadlessComponent(new DropdownMenuItemHeadlessComponent(this));
  }
}

export { DropdownMenuItemStructuralComponent };
