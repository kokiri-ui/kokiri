<template>
  <flex :class="$style['Panel-header']" align="center">
    <slot />
  </flex>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { IPanelHeaderComponent } from '../../typing/interfaces/panel';

import { BaseComponent } from '../basic/BaseComponent';
import { Flex } from '../flex';

@Component({
  name: 'BudsPanelHeader',
  components: {
    Flex,
  },
})
export default class PanelHeader extends BaseComponent implements IPanelHeaderComponent {}
</script>

<style lang="scss" src="./style.scss" module></style>
