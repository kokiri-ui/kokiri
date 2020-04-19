<template>
  <flexbox :class="$style['Panel-footer']" align="center">
    <slot />
  </flexbox>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IPanelFooterComponent } from '../../typing/interfaces/panel';

import { BaseComponent } from '../basic/BaseComponent';
import { Flexbox } from '../flexbox';

@Component({
  name: 'BudsPanelFooter',
  components: {
    Flexbox,
  },
})
export default class PanelFooter extends BaseComponent implements IPanelFooterComponent {}
</script>

<style lang="scss" src="./style.scss" module></style>
