<script lang="ts">
import { includes } from '@ntks/toolbox';
import { CreateElement, VNode } from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';
import ElButton from 'element-ui/lib/button';

import {
  ButtonBorder,
  ButtonSize,
  IButtonComponent,
  ButtonHeadlessComponent,
} from 'petals-ui/dist/button';

import { getComponentName, BaseStructuralComponent } from '../basic';
import { convertSize } from './helper';

@Component({
  name: getComponentName('button'),
})
export default class Button
  extends BaseStructuralComponent<ButtonHeadlessComponent>
  implements IButtonComponent
{
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
    const props: Record<string, any> = { size: convertSize(this.size), disabled: this.disabled };

    if (includes(this.color, ['primary', 'success', 'warning', 'danger', 'info'])) {
      props.type = this.color;
    } else if (this.border === 'none' && this.outlined) {
      props.type = 'text';
    }

    return h(
      ElButton,
      {
        props,
        on: {
          click: this.handleClick,
        },
      },
      this.$slots.default,
    );
  }

  public created(): void {
    this.setHeadlessComponent(new ButtonHeadlessComponent(this));
  }
}
</script>
