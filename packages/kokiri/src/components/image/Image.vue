<template>
  <div :class="getComponentClassNames()" :style="computedStyle">
    <div
      :class="getDescendantClassName('substitute')"
      :style="{ backgroundImage: `url('${sourceUrl}')` }"
      v-if="showSubstitute"
    ></div>
    <img
      :class="getDescendantClassName('content')"
      :src="sourceUrl"
      :alt="alt"
      @load="onLoad"
      @error="onError"
      v-on="filteredListeners"
    />
  </div>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="./style.scss" lang="scss" module></style>
