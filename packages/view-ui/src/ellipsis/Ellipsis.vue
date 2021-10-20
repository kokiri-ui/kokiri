<template>
  <tooltip class-name="Ellipsis-tooltip" :content="content" :disabled="!contentOverflow">
    <component ref="text" class="Ellipsis" :is="resolvedTag">
      <slot />
    </component>
  </tooltip>
</template>

<script lang="ts" src="./logic.ts"></script>

<style src="./style.scss" lang="scss" scoped></style>
