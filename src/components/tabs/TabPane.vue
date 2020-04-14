<template>
  <box :class="$style.TabPane">
    <slot />
  </box>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Box } from '../box';

@Component({
  name: 'TabPane',
  components: {
    Box,
  },
})
export default class TabPane extends Vue {
  /**
   * 选项卡文本
   */
  @Prop({ type: String, required: true })
  label!: string;

  /**
   * 是否禁用选项卡
   */
  @Prop({ type: Boolean, default: false })
  disabled?: boolean;

  updated() {
    this.$parent.$emit('tab-nav-update');
  }
}
</script>
