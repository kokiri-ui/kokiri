<template>
  <box v-on="$listeners">
    <slot />
  </box>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Box from '../box/Box.vue';

@Component({
  components: {
    Box,
  },
})
export default class DrawerAttachment extends Vue {}
</script>
