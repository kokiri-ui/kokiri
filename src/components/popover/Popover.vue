<template>
  <el-popover
    :popper-class="resolvePopperClass()"
    :title="title"
    :trigger="trigger"
    :placement="popupPlacement"
    @show="handleVisibleChange(true)"
    @hide="handleVisibleChange(false)"
  >
    <box :class="[$style['Popover-body'], popupClass]">
      <slot />
    </box>
    <slot name="reference" slot="reference" />
  </el-popover>
</template>

<style lang="scss" module>
@include component-rules($__popover-component-name) {
  padding: 0 !important;

  &-body {
    padding: 18px 20px;
  }
}
</style>

<script lang="ts">
import { Component, Prop, Watch, Emit } from 'vue-property-decorator';
import { Popover as ElPopover } from 'element-ui';
import { Box } from '../box';
import { ComplexPlacement } from '../../typing';
import { PopupLayer } from '../../helper/mixins';

type TriggerType = 'hover' | 'click' | 'focus';

@Component({
  components: {
    ElPopover,
    Box,
  },
})
export default class SsPopover extends PopupLayer {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: String, default: 'hover' })
  public readonly trigger!: TriggerType;

  @Emit('visible-change')
  private handleVisibleChange(visible: boolean): void {}

  private resolvePopperClass(): string {
    return [this.$style.Popover, this.popupWrapperClass].filter(className => !!className).join(' ');
  }
}
</script>
