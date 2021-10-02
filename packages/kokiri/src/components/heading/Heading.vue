<template>
  <component :is="computedHeading" :class="getComponentClassNames()">
    <slot />
  </component>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="./style.scss" lang="scss" module></style>
