<template>
  <box class="LayoutContent">
    <slot />
  </box>
</template>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { LayoutRole } from '../../typing/aliases';
import { ILayoutContentComponent } from '../../typing/interfaces';

import Box from '../box/Box.vue';

import { LayoutControl } from './LayoutControl';

@Component({
  name: 'BudsLayoutContent',
  components: {
    Box,
  },
})
export default class LayoutContent extends LayoutControl implements ILayoutContentComponent {
  protected role: LayoutRole = 'content';
}
</script>
