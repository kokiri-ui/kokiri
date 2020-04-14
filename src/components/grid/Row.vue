<template>
  <box :class="computedClassNames" :style="computedStyle">
    <slot />
  </box>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Box } from '../box';

@Component({
  name: 'Row',
  components: {
    Box,
  },
})
export default class Row extends Vue {
  @Prop({ type: String, default: 'grid' })
  type!: string;

  /**
   * 栅格间距
   */
  @Prop({ type: Number, default: 0 })
  gutter!: number;

  private get computedClassNames(): string[] {
    return [this.$style.Row, this.$style[`Row--${this.type === 'flex' ? 'flex' : 'grid'}`]];
  }

  private get computedStyle(): any {
    const ret: any = {};

    if (this.gutter > 0) {
      ret.marginLeft = `-${this.gutter / 2}px`;
      ret.marginRight = ret.marginLeft;
    }

    return ret;
  }
}
</script>
