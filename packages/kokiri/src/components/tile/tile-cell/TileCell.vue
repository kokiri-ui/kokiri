<template>
  <box :class="$style.TileCell" :style="computedStyle">
    <slot />
  </box>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="../style.scss" lang="scss" module></style>
