<template>
  <ivu-steps :class="className" :direction="direction" :current="activeFlag - 1">
    <slot />
  </ivu-steps>
</template>

<script lang="ts" src="./logic.ts"></script>
