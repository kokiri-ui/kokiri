<template>
  <el-submenu :class="className" :index="flag" :disabled="disabled" :popper-class="popupClassName">
    <slot />
    <slot name="title" slot="title" />
  </el-submenu>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="../style.scss" lang="scss" module></style>
