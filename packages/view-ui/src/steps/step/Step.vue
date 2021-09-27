<template>
  <ivu-step :title="title" :current="content">
    <slot />
    <slot name="title" slot="title" />
    <slot name="content" slot="content" />
  </ivu-step>
</template>

<script lang="ts" src="./logic.ts"></script>
