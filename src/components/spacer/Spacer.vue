<template>
  <box :class="$style.Spacer" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { ISpacerComponent } from '../../typing/interfaces/spacer';
import { BudsComponent } from '../basic/BudsComponent';
import { Box } from '../box';

@Component({
  name: 'BudsSpacer',
  components: {
    Box,
  },
})
export default class Spacer extends BudsComponent implements ISpacerComponent {}
</script>

<style lang="scss" module>
.Spacer {
  flex-grow: 1 !important;
}
</style>
