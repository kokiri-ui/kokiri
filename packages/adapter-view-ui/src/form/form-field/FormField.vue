<template>
  <ivu-form-item
    :class="className"
    :required="required"
    :label="label"
    :label-width="resolvedWidth"
    :error="message"
    :show-message="!hideMessage"
  >
    <slot />
    <slot name="label" slot="label" />
  </ivu-form-item>
</template>

<script lang="ts" src="./logic.ts"></script>
