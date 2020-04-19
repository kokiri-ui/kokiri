<template>
  <div :class="$style.Box" v-on="$listeners">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IBoxComponent } from '../../typing/interfaces/box';
import { BaseComponent } from '../basic/BaseComponent';

@Component({
  name: 'BudsBox',
})
export default class Box extends BaseComponent implements IBoxComponent {}
</script>

<style lang="scss" module>
.Box {
  display: block;
}
</style>
