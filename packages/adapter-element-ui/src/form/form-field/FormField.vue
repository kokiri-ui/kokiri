<template>
  <el-form-item
    :class="className"
    :required="required"
    :label="label"
    :label-width="resolvedWidth"
    :error="message"
    :show-message="!hideMessage"
    :size="resolvedSize"
  >
    <slot />
    <slot name="label" slot="label" />
  </el-form-item>
</template>

<script lang="ts" src="./logic.ts"></script>
