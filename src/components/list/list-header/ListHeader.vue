<template>
  <flex :class="getComponentClassNames()" align="center">
    <slot />
  </flex>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="../style.scss" lang="scss" module></style>
