<template>
  <box>
    <h1>Hello, Buds!</h1>
  </box>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Box } from '../../src';

@Component({
  components: {
    Box,
  },
})
export default class HomePageBlock extends Vue {}
</script>
