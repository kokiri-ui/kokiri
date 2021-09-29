<template>
  <el-input :class="className" v-bind="resolvedProps" @input="onInput" @change="onChange">
    <slot />
    <slot name="prefix" slot="prefix" />
    <slot name="suffix" slot="suffix" />
    <slot name="prepend" slot="prepend" />
    <slot name="append" slot="append" />
  </el-input>
</template>

<script lang="ts" src="./logic.ts"></script>
