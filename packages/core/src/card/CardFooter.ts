import { ICardFooterComponent, CardFooterHeadlessComponent } from 'petals-ui/dist/card';
import { Component } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class CardFooterStructuralComponent
  extends BaseStructuralComponent<CardFooterHeadlessComponent>
  implements ICardFooterComponent {
  public created(): void {
    this.setHeadlessComponent(new CardFooterHeadlessComponent(this));
  }
}

export { CardFooterStructuralComponent };
