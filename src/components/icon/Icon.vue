<template>
  <span :class="computedClassNames" @click="onClick">
    <svg
      :class="computedDescendantClassName"
      focusable="false"
      aria-hidden="true"
      v-if="iconType === 'svg'"
    >
      <use :xlink:href="`#${iconRef}`" />
    </svg>
    <i :class="computedDescendantClassName" aria-hidden="true" v-else />
  </span>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="./style.scss" lang="scss" module></style>
