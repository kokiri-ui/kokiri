<template>
  <box>
    <slot />
  </box>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IListFooterComponent } from '../../typing/interfaces/list';
import { BaseComponent } from '../basic/BaseComponent';
import { Box } from '../box';

@Component({
  name: 'BudsListFooter',
  components: {
    Box,
  },
})
export default class ListFooter extends BaseComponent implements IListFooterComponent {}
</script>
