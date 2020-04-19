<template>
  <flex :class="$style['List-header']" align="center">
    <slot />
  </flex>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IListHeaderComponent } from '../../typing/interfaces/list';
import { BaseComponent } from '../basic/BaseComponent';
import { Flex } from '../flex';

@Component({
  name: 'BudsListHeader',
  components: {
    Flex,
  },
})
export default class ListHeader extends BaseComponent implements IListHeaderComponent {}
</script>

<style lang="scss" src="./style.scss" module></style>
