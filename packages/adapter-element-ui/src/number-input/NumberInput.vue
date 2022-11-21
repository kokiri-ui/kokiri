<template>
  <el-input-number
    :class="className"
    v-bind="resolvedProps"
    @input.native="onInput($event.target.value)"
    @change="onChange"
  />
</template>

<script lang="ts" src="./logic.ts"></script>
