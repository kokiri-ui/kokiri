<template>
  <ss-toolbar :class="$style['Dialog-footer']">
    <slot />
  </ss-toolbar>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SsToolbar from '../toolbar/Toolbar.vue';

@Component({
  name: 'SsDialogFooter',
  components: {
    SsToolbar,
  },
})
export default class DialogFooter extends Vue {}
</script>
