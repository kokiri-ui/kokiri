<template>
  <div v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

/**
 * 基础框
 */
@Component
export default class Box extends Vue {}
</script>
