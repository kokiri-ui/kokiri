<template>
  <ss-toolbar :class="$style['Panel-header']" :title="title">
    <slot />
  </ss-toolbar>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Toolbar as SsToolbar } from '../toolbar';

@Component({
  name: 'PanelHeader',
  components: {
    SsToolbar,
  },
})
export default class PanelHeader extends Vue {
  @Prop({ type: String, default: '' })
  public readonly title!: string;
}
</script>
