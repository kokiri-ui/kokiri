import { ICardHeaderComponent, CardHeaderHeadlessComponent } from 'petals-ui/dist/card';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class CardHeaderStructuralComponent
  extends BaseStructuralComponent<CardHeaderHeadlessComponent>
  implements ICardHeaderComponent {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: String, default: '' })
  public readonly image!: string;

  public created(): void {
    this.setHeadlessComponent(new CardHeaderHeadlessComponent(this));
  }
}

export { CardHeaderStructuralComponent };
