<template>
  <box class="LayoutContent">
    <slot />
  </box>
</template>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';
import Box from '../box/Box.vue';
import { LayoutControl } from '../../helper/mixins';
import { LayoutRole } from '../../typing';

@Component({
  name: 'SsLayoutContent',
  components: {
    Box,
  },
})
export default class SsLayoutContent extends LayoutControl {
  protected role: LayoutRole = 'content';
}
</script>
