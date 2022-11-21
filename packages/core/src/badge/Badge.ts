import { NumberOrString, ColorType } from 'petals-ui/dist/basic';
import { IBadgeComponent, BadgeHeadlessComponent } from 'petals-ui/dist/badge';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class BadgeStructuralComponent
  extends BaseStructuralComponent<BadgeHeadlessComponent>
  implements IBadgeComponent {
  @Prop({ type: [Number, String] })
  public readonly count!: NumberOrString;

  @Prop({ type: Number, default: 99 })
  public readonly max!: number;

  @Prop({ type: String })
  public readonly text!: string;

  @Prop({ type: Boolean, default: false })
  public readonly dot!: boolean;

  @Prop({ type: String })
  public readonly color!: ColorType;

  public created(): void {
    this.setHeadlessComponent(new BadgeHeadlessComponent(this));
  }
}

export { BadgeStructuralComponent };
