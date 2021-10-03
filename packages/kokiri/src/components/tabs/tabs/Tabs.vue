<template>
  <div :class="getComponentClassNames()">
    <tab-bar
      :class="getDescendantClassName('tabBar')"
      :navs-class-name="getDescendantClassName('tabNavs')"
      :nav-class-name="getDescendantClassName('tabNav')"
      :nav-active-class-name="getDescendantClassName('activeTabNav')"
      :nav-disabled-class-name="getDescendantClassName('disabledTabNav')"
      :navs="tabNavs"
      :active-flag="activeIndex"
      :stretch="tabBarStretch"
      @change="handleTabNavChange"
      v-if="panes.length > 0"
    />
    <view-stack
      :class="getDescendantClassName('panes')"
      :view-class-name="getDescendantClassName('pane')"
      :active-flag="activeIndex"
    >
      <slot />
    </view-stack>
  </div>
</template>

<script src="./logic.ts" lang="ts"></script>

<style src="../style.scss" lang="scss" module></style>
