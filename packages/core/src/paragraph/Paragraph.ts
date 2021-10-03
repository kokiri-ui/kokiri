import {
  TypoLinePosition,
  TypoTextColor,
  IParagraphComponent,
  ParagraphHeadlessComponent,
} from 'petals-ui/dist/paragraph';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class ParagraphStructuralComponent
  extends BaseStructuralComponent<ParagraphHeadlessComponent>
  implements IParagraphComponent {
  @Prop({ type: String, default: 'none' })
  public readonly line!: TypoLinePosition;

  @Prop({ type: String, default: '' })
  public readonly color!: TypoTextColor;

  @Prop({ type: Boolean, default: false })
  public readonly bold!: boolean;

  public created(): void {
    this.setHeadlessComponent(new ParagraphHeadlessComponent(this));
  }
}

export { ParagraphStructuralComponent };
