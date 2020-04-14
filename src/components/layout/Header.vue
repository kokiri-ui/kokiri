<template>
  <toolbar :class="$style.LayoutHeader" tag="header" :style="computeStyle()">
    <slot />
  </toolbar>
</template>

<style lang="scss" module>
@include component-rules($__layout-header-component-name) {
  box-sizing: border-box;
  height: var($cp--layout-header-height, $ss--layout-header-height);
  margin-top: calc(var(#{$cp--layout-header-height}, #{$ss--layout-header-height}) * -1);
  padding: var($cp--layout-header-padding-y, $ss--layout-header-padding-y)
    var($cp--layout-header-padding-x, $ss--layout-header-padding-x);
  box-shadow: var($cp--layout-header-box-shadow, $ss--layout-header-box-shadow);
  font-size: var($cp--layout-header-font-size, $ss--layout-header-font-size);
  color: var($cp--layout-header-color, $ss--layout-header-color);
  background-color: var($cp--layout-header-bg, $ss--layout-header-bg);
}
</style>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { LooseSize, LayoutRole, ComponentStyle } from '../../typing';
import { isNumeric } from '../../helper/utils';
import { LayoutControl } from '../../helper/mixins';

import Toolbar from '../toolbar/Toolbar.vue';

@Component({
  name: 'SsLayoutHeader',
  components: {
    Toolbar,
  },
})
export default class SsLayoutHeader extends LayoutControl {
  @Prop({ type: [String, Number] })
  public readonly height?: LooseSize;

  protected role: LayoutRole = 'header';

  private computeStyle(): ComponentStyle {
    let style: ComponentStyle = {};

    if (isNumeric(this.height)) {
      style = {
        height: `${this.height}px`,
        marginTop: `-${this.height}px`,
      };
    }

    return style;
  }
}
</script>
