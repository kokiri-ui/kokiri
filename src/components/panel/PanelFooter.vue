<template>
  <flex :class="$style['Panel-footer']" align="center">
    <slot />
  </flex>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IPanelFooterComponent } from '../../typing/interfaces/panel';

import { BaseComponent } from '../basic/BaseComponent';
import { Flex } from '../flex';

@Component({
  name: 'BudsPanelFooter',
  components: {
    Flex,
  },
})
export default class PanelFooter extends BaseComponent implements IPanelFooterComponent {}
</script>

<style lang="scss" src="./style.scss" module></style>
