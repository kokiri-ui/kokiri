<template>
  <box :class="$style.LayoutSidebar" :style="computeStyle()">
    <slot />
  </box>
</template>

<style lang="scss" module>
@include component-rules($__layout-sidebar-component-name) {
  box-sizing: border-box;
  float: left;
  width: var($cp--layout-sidebar-width, $ss--layout-sidebar-width);
  margin-left: calc(var(#{$cp--layout-sidebar-width}, #{$ss--layout-sidebar-width}) * -1);
  height: 100%;
  font: {
    size: var($cp--layout-sidebar-font-size, $ss--layout-sidebar-font-size);
    weight: var($cp--layout-sidebar-font-weight, $ss--layout-sidebar-font-weight);
  }
  color: var($cp--layout-sidebar-color, $ss--layout-sidebar-color);
  border-right: var($cp--layout-sidebar-border-width, $ss--layout-sidebar-border-width) solid
    var($cp--layout-sidebar-border-color, $ss--layout-sidebar-border-color);
  background-color: var($cp--layout-sidebar-bg, $ss--layout-sidebar-bg);
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
  name: 'SsLayoutSidebar',
  components: {
    Box,
  },
})
export default class SsLayoutSidebar extends LayoutControl {
  @Prop({ type: [String, Number] })
  public readonly width?: LooseSize;

  protected role: LayoutRole = 'sidebar';

  private computeStyle(): ComponentStyle {
    let style: ComponentStyle = {};

    if (isNumeric(this.width)) {
      style = {
        width: `${this.width}px`,
        marginLeft: `-${this.width}px`,
      };
    }

    return style;
  }
}
</script>
