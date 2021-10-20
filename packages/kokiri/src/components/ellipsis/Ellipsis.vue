<template>
  <component ref="text" :class="getComponentClassNames()" :is="resolvedTag" :title="resolvedTitle">
    <slot />
  </component>
</template>

<script lang="ts" src="./logic.ts"></script>

<style src="./style.scss" lang="scss" module></style>
