import { Component, Prop } from 'vue-property-decorator';

import { CardBodyStyle, ICardComponent, CardHeadlessComponent } from 'petals-ui/dist/card';

import { BaseStructuralComponent } from '../basic';

@Component
class CardStructuralComponent
  extends BaseStructuralComponent<CardHeadlessComponent>
  implements ICardComponent {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: String, default: '' })
  public readonly bodyClassName!: string;

  @Prop({ type: Object, default: () => ({}) })
  public readonly bodyStyle!: CardBodyStyle;

  public created(): void {
    this.setHeadlessComponent(new CardHeadlessComponent(this));
  }
}

export { CardStructuralComponent };
