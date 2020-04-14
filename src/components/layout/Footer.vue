<template>
  <box :class="$style.LayoutFooter" :style="computeStyle()">
    <slot />
  </box>
</template>

<style lang="scss" module>
@include component-rules($__layout-footer-component-name) {
  box-sizing: border-box;
  height: var($cp--layout-footer-height, $ss--layout-footer-height);
  margin-bottom: calc(var(#{$cp--layout-footer-height}, #{$ss--layout-footer-height}) * -1);
  padding: var($cp--layout-footer-padding-y, $ss--layout-footer-padding-y)
    var($cp--layout-footer-padding-x, $ss--layout-footer-padding-x);
  font-size: var($cp--layout-footer-font-size, $ss--layout-footer-font-size);
  color: var($cp--layout-footer-color, $ss--layout-footer-color);
  background-color: var($cp--layout-footer-bg, $ss--layout-footer-bg);
}
</style>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { isNumeric } from '../../helper/utils';
import { LayoutControl } from '../../helper/mixins';
import { LooseSize, LayoutRole, ComponentStyle } from '../../typing';

import Box from '../box/Box.vue';

@Component({
  name: 'SsLayoutFooter',
  components: {
    Box,
  },
})
export default class SsLayoutFooter extends LayoutControl {
  @Prop({ type: [String, Number] })
  public readonly height?: LooseSize;

  protected role: LayoutRole = 'footer';

  private computeStyle(): ComponentStyle {
    let style: ComponentStyle = {};

    if (isNumeric(this.height)) {
      style = {
        height: `${this.height}px`,
        marginBottom: `-${this.height}px`,
      };
    }

    return style;
  }
}
</script>
