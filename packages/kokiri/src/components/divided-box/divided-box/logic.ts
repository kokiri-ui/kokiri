import { CreateElement, VNode } from 'vue';
import { Component, Provide } from 'vue-property-decorator';

import { getComponentName, DividedBoxStructuralComponent } from '@kokiri/core/dist/divided-box';

import { Box } from '../../box';

@Component({
  name: getComponentName('dividedBox'),
  components: { Box },
})
export default class DividedBox extends DividedBoxStructuralComponent {
  @Provide('__kokiri-parentDividedBox')
  private readonly parentDividedBox: any = {};

  private get defaultAdjustment(): string {
    return this.direction === 'horizontal' ? 'average' : 'auto';
  }

  private resolveClassNames(): string[] {
    const adjustment = ['average', 'auto'].some(a => this.adjust === a)
      ? this.adjust!
      : this.defaultAdjustment;

    this.parentDividedBox.adjustment = adjustment;

    return [
      this.direction === 'horizontal' ? this.$style.HDividedBox : this.$style.VDividedBox,
      adjustment === 'average' ? this.$style['is-average'] : this.$style['is-auto'],
    ].concat(this.resolveFlexBoxClassNames());
  }

  private render(h: CreateElement): VNode {
    return h('box', { class: this.resolveClassNames() }, this.$slots.default);
  }

  public created(): void {
    this.parentDividedBox.direction = this.direction;
  }
}
