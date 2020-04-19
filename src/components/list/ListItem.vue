<template>
  <li :class="$style['List-item']">
    <slot />
  </li>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IListItemComponent } from '../../typing/interfaces/list';
import { BaseComponent } from '../basic/BaseComponent';

@Component({
  name: 'BudsListItem',
})
export default class ListItem extends BaseComponent implements IListItemComponent {}
</script>

<style lang="scss" src="./style.scss" module></style>
