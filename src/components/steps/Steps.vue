<template>
  <box :class="$style.Steps">
    <slot />
  </box>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Box } from '../box';

@Component({
  components: {
    Box,
  },
})
export default class Step extends Vue {
  @Prop({ type: String })
  readonly direction?: string;

  @Prop({ type: Number })
  readonly current?: number;
}
</script>
