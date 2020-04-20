<template>
  <box :class="$style.LayoutMain">
    <slot />
  </box>
</template>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { LayoutRole } from '../../typing/aliases';
import { ILayoutMainComponent } from '../../typing/interfaces';

import { Box } from '../box';

import { LayoutControl } from './LayoutControl';

@Component({
  name: 'BudsLayoutMain',
  components: {
    Box,
  },
})
export default class LayoutMain extends LayoutControl implements ILayoutMainComponent {
  protected role: LayoutRole = 'main';
}
</script>

<style lang="scss" module>
.LayoutMain {
}
</style>
