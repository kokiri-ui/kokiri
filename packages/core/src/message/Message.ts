import { IMessageComponent, MessageHeadlessComponent } from 'petals-ui/dist/message';
import { Component } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class MessageStructuralComponent
  extends BaseStructuralComponent<MessageHeadlessComponent>
  implements IMessageComponent {
  public created(): void {
    this.setHeadlessComponent(new MessageHeadlessComponent(this));
  }
}

export { MessageStructuralComponent };
