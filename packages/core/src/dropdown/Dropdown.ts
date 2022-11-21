import { Component, Prop } from 'vue-property-decorator';

import {
  DropdownMenuTrigger,
  DropdownMenuPlacement,
  IDropdownComponent,
  DropdownHeadlessComponent,
} from 'petals-ui/dist/dropdown';

import { BaseStructuralComponent } from '../basic';

@Component
class DropdownStructuralComponent
  extends BaseStructuralComponent<DropdownHeadlessComponent>
  implements IDropdownComponent {
  @Prop({ type: String, default: 'hover' })
  public readonly trigger!: DropdownMenuTrigger;

  @Prop({ type: String, default: 'bottom-left' })
  public readonly placement!: DropdownMenuPlacement;

  public created(): void {
    this.setHeadlessComponent(new DropdownHeadlessComponent(this));
  }
}

export { DropdownStructuralComponent };
