<template>
  <main :class="getComponentClassNames()">
    <slot />
  </main>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="../style.scss" lang="scss" module></style>
