<template>
  <flex :class="getComponentClassNames()" :style="computeStyle()" align="center" tag="header">
    <slot />
  </flex>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="../style.scss" lang="scss" module></style>
