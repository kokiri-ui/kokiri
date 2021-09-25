import { includes } from '@ntks/toolbox';
import {
  ButtonBorder,
  ButtonSize,
  IButtonComponent,
  ButtonHeadlessComponent,
} from 'petals-ui/dist/button';
import { CreateElement, VNode } from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';
import { Button as IvuButton } from 'view-design';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('button'),
})
export default class Button
  extends BaseStructuralComponent<ButtonHeadlessComponent>
  implements IButtonComponent {
  @Prop({ type: String, default: 'medium' })
  public readonly size!: ButtonSize;

  @Prop({ type: String, default: 'solid' })
  public readonly border!: ButtonBorder;

  @Prop({ type: Boolean, default: false })
  public readonly outlined!: boolean;

  @Prop({ type: String, default: '' })
  public readonly color!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Emit('click')
  private handleClick(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public render(h: CreateElement): VNode {
    const props: Record<string, any> = { disabled: this.disabled, ghost: this.outlined };

    if (includes(this.color, ['primary', 'success', 'warning', 'danger', 'info'])) {
      props.type = this.color === 'danger' ? 'error' : this.color;
    }

    if (this.border === 'dashed') {
      props.type = 'dashed';
    } else if (this.border === 'none') {
      props.type = 'text';
    }

    if (includes(this.size, ['large', 'small'])) {
      props.size = this.size;
    }

    return h(IvuButton, { props, on: { click: this.handleClick } }, this.$slots.default);
  }

  public created(): void {
    this.setHeadlessComponent(new ButtonHeadlessComponent(this));
  }
}
