<template>
  <span :class="$style.Text" v-on="$listeners">
    <slot />
  </span>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { ITextComponent } from '../../typing/interfaces/text';
import { BaseComponent } from '../basic/BaseComponent';

@Component({
  name: 'BudsText',
})
export default class Text extends BaseComponent implements ITextComponent {}
</script>

<style lang="scss" module>
.Text {
  display: inline;
}
</style>
