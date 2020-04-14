<template>
  <span v-on="$listeners">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class SsText extends Vue {}
</script>
