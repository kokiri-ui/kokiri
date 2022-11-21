<template>
  <box :class="resolveClassNames()" :style="resolveStyle()">
    <box :class="$style['BoxContent-content']">
      <slot />
    </box>
  </box>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="../style.scss" lang="scss" module></style>
