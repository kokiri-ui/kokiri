<template>
  <div :class="$style.Box" v-on="$listeners">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IBoxComponent } from '../../typing/interfaces/box';
import { BudsComponent } from '../basic/BudsComponent';

@Component({
  name: 'BudsBox',
})
export default class Box extends BudsComponent implements IBoxComponent {}
</script>

<style lang="scss" module>
.Box {
  display: block;
}
</style>