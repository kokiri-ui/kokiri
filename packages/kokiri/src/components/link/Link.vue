<template>
  <a :class="getComponentClassNames()" :href="href" :target="`_${target}`">
    <slot />
  </a>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="./style.scss" lang="scss" module></style>
