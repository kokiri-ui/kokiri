<template>
  <ss-toolbar :class="$style['Panel-footer']">
    <slot />
  </ss-toolbar>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Toolbar as SsToolbar } from '../toolbar';

@Component({
  name: 'PanelFooter',
  components: {
    SsToolbar,
  },
})
export default class PanelFooter extends Vue {}
</script>
