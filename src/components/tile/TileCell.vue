<template>
  <box :class="$style.TileCell" :style="computedStyle">
    <slot />
  </box>
</template>

<style lang="scss" module>
.TileCell {
  overflow: hidden;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Box from '../box/Box.vue';

@Component({
  components: {
    Box,
  },
})
export default class TileCell extends Vue {
  @Prop({ type: Number, required: true })
  width!: number;

  @Prop({ type: Number, required: true })
  height!: number;

  get computedStyle(): any {
    const { width, height } = this;

    if (width > 0 && height > 0) {
      return {
        width: `${width}px`,
        height: `${height}px`,
      };
    }

    return {};
  }

  updated() {
    this.$parent.$emit('tile-cell-update');
  }
}
</script>
