<template>
  <box :class="computeClassNames()">
    <slot />
  </box>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { DirectionType } from '../../typing/aliases';
import { FlexboxAlignment, IFlexboxComponent } from '../../typing/interfaces/flexbox';

import { BaseComponent } from '../basic/BaseComponent';
import { Box } from '../box';

@Component({
  name: 'BudsFlexbox',
  components: {
    Box,
  },
})
export default class Flexbox extends BaseComponent implements IFlexboxComponent {
  @Prop({ type: String })
  public readonly direction?: DirectionType;

  @Prop({ type: String })
  public readonly align?: FlexboxAlignment;

  @Prop({ type: String })
  public readonly justify?: FlexboxAlignment;

  @Prop({ type: Boolean })
  public readonly reverse?: boolean;

  private computeClassNames(): string[] {
    const classNames: string[] = [this.$style.Flexbox];

    if (this.direction === 'vertical') {
      classNames.push(this.$style['Flexbox--vertical']);
    } else {
      classNames.push(this.$style['Flexbox--horizontal']);
    }

    switch (this.align) {
      case 'center':
        classNames.push(this.$style['Flexbox--alignCenter']);
        break;
      case 'end':
        classNames.push(this.$style['Flexbox--alignEnd']);
        break;
      default:
        classNames.push(this.$style['Flexbox--alignStart']);
        break;
    }

    switch (this.justify) {
      case 'center':
        classNames.push(this.$style['Flexbox--justifyCenter']);
        break;
      case 'end':
        classNames.push(this.$style['Flexbox--justifyEnd']);
        break;
      default:
        classNames.push(this.$style['Flexbox--justifyStart']);
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
