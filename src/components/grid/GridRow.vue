<template>
  <box :class="$style.GridRow" :style="computedStyle">
    <slot />
  </box>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { IGridRowComponent } from '../../typing/interfaces/grid';
import { isNumber } from '../../helper/utils';
import { BaseComponent } from '../basic/BaseComponent';
import { Box } from '../box';

@Component({
  name: 'BudsGridRow',
  components: {
    Box,
  },
})
export default class GridRow extends BaseComponent implements IGridRowComponent {
  @Prop({ type: Number })
  public readonly gutter?: number;

  private get computedStyle(): any {
    const ret: any = {};

    if (isNumber(this.gutter) && this.gutter! > 0) {
      ret.marginLeft = `-${this.gutter! / 2}px`;
      ret.marginRight = ret.marginLeft;
    }

    return ret;
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
