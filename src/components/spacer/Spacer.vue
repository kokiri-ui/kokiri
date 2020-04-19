<template>
  <box :class="$style.Spacer" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { ISpacerComponent } from '../../typing/interfaces/spacer';
import { BaseComponent } from '../basic/BaseComponent';
import { Box } from '../box';

@Component({
  name: 'BudsSpacer',
  components: {
    Box,
  },
})
export default class Spacer extends BaseComponent implements ISpacerComponent {}
</script>

<style lang="scss" module>
.Spacer {
  flex-grow: 1 !important;
}
</style>
