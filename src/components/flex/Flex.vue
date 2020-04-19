<template>
  <box :class="computeClassNames()">
    <slot />
  </box>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { DirectionType } from '../../typing/aliases';
import { FlexAlignment, IFlexComponent } from '../../typing/interfaces/flex';

import { BaseComponent } from '../basic/BaseComponent';
import { Box } from '../box';

@Component({
  name: 'BudsFlex',
  components: {
    Box,
  },
})
export default class Flex extends BaseComponent implements IFlexComponent {
  @Prop({ type: String })
  public readonly direction?: DirectionType;

  @Prop({ type: String })
  public readonly align?: FlexAlignment;

  @Prop({ type: String })
  public readonly justify?: FlexAlignment;

  @Prop({ type: Boolean })
  public readonly reverse?: boolean;

  private computeClassNames(): string[] {
    const classNames: string[] = [this.$style.Flex];

    if (this.direction === 'vertical') {
      classNames.push(this.$style['Flex--vertical']);
    } else {
      classNames.push(this.$style['Flex--horizontal']);
    }

    switch (this.align) {
      case 'center':
        classNames.push(this.$style['Flex--alignCenter']);
        break;
      case 'end':
        classNames.push(this.$style['Flex--alignEnd']);
        break;
      default:
        classNames.push(this.$style['Flex--alignStart']);
        break;
    }

    switch (this.justify) {
      case 'center':
        classNames.push(this.$style['Flex--justifyCenter']);
        break;
      case 'end':
        classNames.push(this.$style['Flex--justifyEnd']);
        break;
      default:
        classNames.push(this.$style['Flex--justifyStart']);
        break;
    }

    if (this.reverse) {
      classNames.push(this.$style['is-reverse']);
    }

    return classNames;
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
