<template>
  <el-tooltip :content="content" :placement="popupPlacement" :disabled="disabled">
    <slot />
  </el-tooltip>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { Tooltip as ElTooltip } from 'element-ui';
import { PopupLayer } from '../../helper/mixins';

@Component({
  components: {
    ElTooltip,
  },
})
export default class SsTooltip extends PopupLayer {
  @Prop({ type: String })
  public readonly content?: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;
}
</script>
