<template>
  <div :class="getComponentClassNames()" @click.stop="handleClick">
    <slot />
  </div>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="../style.scss" lang="scss" module></style>
