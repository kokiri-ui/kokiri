import {
  TypoLinePosition,
  TypoTextColor,
  ITextComponent,
  TextHeadlessComponent,
} from 'petals-ui/dist/text';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class TextStructuralComponent
  extends BaseStructuralComponent<TextHeadlessComponent>
  implements ITextComponent {
  @Prop({ type: String, default: 'none' })
  public readonly line!: TypoLinePosition;

  @Prop({ type: String, default: '' })
  public readonly color!: TypoTextColor;

  @Prop({ type: Boolean, default: false })
  public readonly bold!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly ellipsis!: boolean;

  public created(): void {
    this.setHeadlessComponent(new TextHeadlessComponent(this));
  }
}

export { TextStructuralComponent };
