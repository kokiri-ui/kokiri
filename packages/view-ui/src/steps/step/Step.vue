<template>
  <ivu-step :class="className" :title="title" :content="content">
    <slot />
    <slot name="title" slot="title" />
    <slot name="content" slot="content" />
  </ivu-step>
</template>

<script lang="ts" src="./logic.ts"></script>
