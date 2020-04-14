<template>
  <li :class="$style['List-item']">
    <slot />
  </li>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ListItem extends Vue {}
</script>
