import { IListHeaderComponent, ListHeaderHeadlessComponent } from 'petals-ui/dist/list';

import { Component } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class ListHeaderStructuralComponent
  extends BaseStructuralComponent<ListHeaderHeadlessComponent>
  implements IListHeaderComponent {
  public created(): void {
    this.setHeadlessComponent(new ListHeaderHeadlessComponent(this));
  }
}

export { ListHeaderStructuralComponent };
