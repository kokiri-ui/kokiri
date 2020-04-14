<template>
  <box :class="$style['Steps-step']">
    <ss-text>{{ title }}</ss-text>
    <slot />
  </box>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Box } from '../box';
import { SsText } from '../text';

@Component({
  components: {
    Box,
    SsText,
  },
})
export default class Step extends Vue {
  @Prop({ type: String })
  readonly title?: string;

  @Prop({ type: String })
  readonly description?: string;
}
</script>
