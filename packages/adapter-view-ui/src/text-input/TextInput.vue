<template>
  <ivu-input :class="className" v-bind="resolvedProps" @input="onInput" @on-change="onChange">
    <slot />
    <slot name="prefix" slot="prefix" />
    <slot name="suffix" slot="suffix" />
    <slot name="prepend" slot="prepend" />
    <slot name="append" slot="append" />
  </ivu-input>
</template>

<script lang="ts" src="./logic.ts"></script>
