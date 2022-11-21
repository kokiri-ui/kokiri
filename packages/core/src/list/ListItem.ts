import { IListItemComponent, ListItemHeadlessComponent } from 'petals-ui/dist/list';

import { Component } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class ListItemStructuralComponent
  extends BaseStructuralComponent<ListItemHeadlessComponent>
  implements IListItemComponent {
  public created(): void {
    this.setHeadlessComponent(new ListItemHeadlessComponent(this));
  }
}

export { ListItemStructuralComponent };
