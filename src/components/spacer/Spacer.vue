<template>
  <box :class="$style.Spacer" />
</template>

<style lang="scss" module>
.Spacer {
  flex-grow: 1 !important;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Box from '../box/Box.vue';

@Component({
  components: {
    Box,
  },
})
export default class Spacer extends Vue {}
</script>
