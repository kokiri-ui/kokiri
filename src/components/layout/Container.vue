<template>
  <box :class="computeClassNames()" :style="computeStyle()">
    <slot />
  </box>
</template>

<style lang="scss" module>
@include component-rules($__layout-container-component-name) {
  box-sizing: border-box;
  height: 100%;

  &--vertical {
    &.has-header {
      padding-top: var($cp--layout-header-height, $ss--layout-header-height);
    }

    &.has-footer {
      padding-bottom: var($cp--layout-footer-height, $ss--layout-footer-height);
    }
  }

  &--horizontal {
    &.has-sidebar {
      padding-left: var($cp--layout-sidebar-width, $ss--layout-sidebar-width);
    }

    @include pie-clearfix;
  }
}
</style>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { DirectionType, ComponentStyle, LayoutRole, LayoutContainer } from '../../typing';
import { isNumeric } from '../../helper/utils';
import { LayoutControl } from '../../helper/mixins';

import Box from '../box/Box.vue';

@Component({
  name: 'SsLayoutContainer',
  components: {
    Box,
  },
})
export default class SsLayoutContainer extends LayoutControl implements LayoutContainer {
  private roles: { [key: string]: Vue } = {};

  private direction: DirectionType = '' as any;

  private isTop!: boolean;

  protected role: LayoutRole = 'container';

  private hasRole(role: LayoutRole): boolean {
    return !!this.roles[role];
  }

  private computeClassNames(): string[] {
    const classNames = [this.$style.LayoutContainer];

    if (this.direction) {
      classNames.push(this.$style[`LayoutContainer--${this.direction}`]);
    }

    (['header', 'footer', 'sidebar'] as LayoutRole[]).forEach((role: LayoutRole) => {
      if (this.hasRole(role)) {
        classNames.push(this.$style[`has-${role}`]);
      }
    });

    return classNames;
  }

  private getRoleProp(role: LayoutRole, propName: string): any {
    return (this.roles[role] as any)[propName];
  }

  private computeStyle(): ComponentStyle {
    let style: ComponentStyle = {};

    if (this.direction === 'vertical') {
      if (this.hasRole('header') && isNumeric(this.getRoleProp('header', 'height'))) {
        style.paddingTop = `${this.getRoleProp('header', 'height')}px`;
      }

      if (this.hasRole('footer') && isNumeric(this.getRoleProp('footer', 'height'))) {
        style.paddingBottom = `${this.getRoleProp('footer', 'height')}px`;
      }
    } else if (this.direction === 'horizontal') {
      if (this.hasRole('sidebar') && isNumeric(this.getRoleProp('sidebar', 'width'))) {
        style.paddingLeft = `${this.getRoleProp('sidebar', 'width')}px`;
      }
    }

    return style;
  }

  public __registerRole($role: Vue, role: LayoutRole): void {
    this.roles[role] = $role;
  }

  public __removeRole(role: LayoutRole): void {
    if (this.roles[role]) {
      this.roles[role] = null as any;
      delete this.roles[role];
    }
  }

  public mounted(): void {
    this.isTop = this.container === null;
    this.direction = this.hasRole('header') || this.hasRole('footer') ? 'vertical' : 'horizontal';
  }
}
</script>
