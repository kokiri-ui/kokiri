import {
  TypoLinePosition,
  TypoTextColor,
  HeadingLevel,
  IHeadingComponent,
  HeadingHeadlessComponent,
} from 'petals-ui/dist/heading';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class HeadingStructuralComponent
  extends BaseStructuralComponent<HeadingHeadlessComponent>
  implements IHeadingComponent {
  @Prop({ type: String, default: 'none' })
  public readonly line!: TypoLinePosition;

  @Prop({ type: String, default: 'default' })
  public readonly color!: TypoTextColor;

  @Prop({ type: Boolean, default: false })
  public readonly bold!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly ellipsis!: boolean;

  @Prop({ type: Number, default: 1 })
  public readonly level!: HeadingLevel;

  protected get resolvedTag(): string {
    return `h${this.level}`;
  }

  public created(): void {
    this.setHeadlessComponent(new HeadingHeadlessComponent(this));
  }
}

export { HeadingStructuralComponent };
