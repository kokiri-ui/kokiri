<template>
  <flexbox :class="$style['Panel-header']" align="center">
    <slot />
  </flexbox>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { IPanelHeaderComponent } from '../../typing/interfaces/panel';

import { BaseComponent } from '../basic/BaseComponent';
import { Flexbox } from '../flexbox';

@Component({
  name: 'BudsPanelHeader',
  components: {
    Flexbox,
  },
})
export default class PanelHeader extends BaseComponent implements IPanelHeaderComponent {}
</script>

<style lang="scss" src="./style.scss" module></style>
