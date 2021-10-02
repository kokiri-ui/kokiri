<template>
  <box :class="$style.Feed" @click="handleClick">
    <box :class="[$style['Feed-aside'], asideClassName]">
      <avatar :class="[$style['Feed-avatar'], avatarClassName]" :src="avatar" />
    </box>
    <box :class="[$style['Feed-content'], contentClassName]">
      <flex :class="[$style['Feed-header'], headerClassName]" align="center">{{ title }}</flex>
      <box :class="[$style['Feed-body'], bodyClassName]" v-if="$slots.default">
        <slot />
      </box>
    </box>
  </box>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="./style.scss" lang="scss" module></style>
