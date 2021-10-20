<template>
  <tooltip class-name="Ellipsis" :content="content" :disabled="!contentOverflow">
    <component ref="text" :is="resolvedTag">
      <slot />
    </component>
  </tooltip>
</template>

<script lang="ts" src="./logic.ts"></script>

<style src="./style.scss" lang="scss" scoped></style>
