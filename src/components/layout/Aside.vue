<template>
  <box :class="$style.LayoutAside" :style="computeStyle()">
    <slot />
  </box>
</template>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { ComponentStyle } from '../../typing';
import { LooseSize, LayoutRole } from '../../typing/aliases';
import { ILayoutAsideComponent } from '../../typing/interfaces/layout';
import { isNumeric } from '../../helper/utils';

import { Box } from '../box';

import { LayoutControl } from './LayoutControl';

@Component({
  name: 'BudsLayoutAside',
  components: {
    Box,
  },
})
export default class LayoutAside extends LayoutControl implements ILayoutAsideComponent {
  @Prop({ type: [String, Number] })
  public readonly width?: LooseSize;

  protected role: LayoutRole = 'aside';

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

<style lang="scss" module>
.LayoutAside {
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
