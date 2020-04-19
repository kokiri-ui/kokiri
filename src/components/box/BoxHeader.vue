<template>
  <div :class="$style['Box-header']">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { IBoxHeaderComponent } from '../../typing/interfaces/box';
import { BaseComponent } from '../basic/BaseComponent';

@Component({
  name: 'BudsBoxHeader',
})
export default class BoxHeader extends BaseComponent implements IBoxHeaderComponent {}
</script>

<style lang="scss" src="./style.scss" module></style>
