<template>
  <ss-toolbar :class="$style['Dialog-header']">
    <slot />
  </ss-toolbar>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SsToolbar from '../toolbar/Toolbar.vue';

@Component({
  name: 'SsDialogHeader',
  components: {
    SsToolbar,
  },
})
export default class DialogHeader extends Vue {}
</script>
