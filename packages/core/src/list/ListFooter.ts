import { IListFooterComponent, ListFooterHeadlessComponent } from 'petals-ui/dist/list';

import { Component } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class ListFooterStructuralComponent
  extends BaseStructuralComponent<ListFooterHeadlessComponent>
  implements IListFooterComponent {
  public created(): void {
    this.setHeadlessComponent(new ListFooterHeadlessComponent(this));
  }
}

export { ListFooterStructuralComponent };
