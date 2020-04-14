<template>
  <box :class="resolveClassNames()" :style="resolveStyle()">
    <box :class="$style['BoxContent-content']">
      <slot />
    </box>
  </box>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Component, Prop, Watch, Inject } from 'vue-property-decorator';

import Box from '../box/Box.vue';
import FlexBox from './FlexBox';

interface StyleObject {
  width?: number | string;
  height?: number | string;
  flexGrow?: number;
  overflow?: string;
}

/**
 * `HDividedBox` 和 `VDividedBox` 的子组件
 */
@Component({
  components: {
    Box,
  },
})
export default class BoxContent extends FlexBox {
  // 宽度，只在 `HDividedBox` 中有效
  @Prop([Number, String])
  public readonly width?: number | string;

  // 高度，只在 `VDividedBox` 中有效
  @Prop([Number, String])
  public readonly height?: number | string;

  @Inject({ from: '__ss-parentDividedBox', default: () => ({}) })
  private readonly parentDividedBox!: any;

  private resolveClassNames(): string[] {
    return [this.$style.BoxContent].concat(this.resolveFlexBoxClassNames());
  }

  private convertSize(size): string {
    return typeof size === 'string' && size.indexOf('%') > -1 ? size : `${size}px`;
  }

  private getComputedStyle(): StyleObject {
    const { adjustment, direction } = this.parentDividedBox;

    if (direction === 'horizontal' && this.width) {
      return { width: this.convertSize(this.width), flexGrow: 0 };
    }

    if (direction === 'vertical' && this.height) {
      return { height: this.convertSize(this.height), flexGrow: 0 };
    }

    return adjustment === 'average' ? { flexGrow: 1 } : {};
  }

  private resolveStyle(): StyleObject {
    return {
      ...this.getComputedStyle(),
      overflow: 'auto',
    };
  }
}
</script>
