<template>
  <p :class="getComponentClassNames()" v-on="$listeners">
    <slot />
  </p>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="./style.scss" lang="scss" module></style>
