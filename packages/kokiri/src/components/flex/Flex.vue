<template>
  <div :class="getComponentClassNames()">
    <slot />
  </div>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="./style.scss" lang="scss" module></style>
