<template>
  <span :class="$style.Text" v-on="$listeners">
    <slot />
  </span>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { ITextComponent } from '../../typing/interfaces/text';
import { BudsComponent } from '../basic/BudsComponent';

@Component({
  name: 'BudsText',
})
export default class Text extends BudsComponent implements ITextComponent {}
</script>

<style lang="scss" module>
.Text {
  display: inline;
}
</style>
