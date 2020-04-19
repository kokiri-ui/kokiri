<template>
  <div :class="$style['Box-footer']">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { IBoxFooterComponent } from '../../typing/interfaces/box';
import { BaseComponent } from '../basic/BaseComponent';

@Component({
  name: 'BudsBoxFooter',
})
export default class BoxFooter extends BaseComponent implements IBoxFooterComponent {}
</script>

<style lang="scss" src="./style.scss" module></style>
