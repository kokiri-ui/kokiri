<template>
  <aside :class="getComponentClassNames()" :style="computeStyle()">
    <slot />
  </aside>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="../style.scss" lang="scss" module></style>
