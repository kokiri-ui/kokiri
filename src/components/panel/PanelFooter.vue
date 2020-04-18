<template>
  <flexbox :class="$style['Panel-footer']" align="center">
    <slot />
  </flexbox>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IPanelFooterComponent } from '../../typing/interfaces/panel';

import { BudsComponent } from '../basic/BudsComponent';
import { Flexbox } from '../flexbox';

@Component({
  name: 'BudsPanelFooter',
  components: {
    Flexbox,
  },
})
export default class PanelFooter extends BudsComponent implements IPanelFooterComponent {}
</script>

<style lang="scss" src="./style.scss" module></style>
