<template>
  <box :class="$style.Feed" @click="handleClick">
    <box :class="$style['Feed-aside']" :style="asideStyle">
      <avatar :class="$style['Feed-avatar']" :src="avatar" :style="avatarStyle" />
    </box>
    <box :class="$style['Feed-content']" :style="contentStyle">
      <flex :class="$style['Feed-header']" :style="headerStyle" align="center">{{ title }}</flex>
      <box :class="$style['Feed-body']" :style="bodyStyle" v-if="$slots.default">
        <slot />
      </box>
    </box>
  </box>
</template>

<style lang="scss" module>
@include component-rules($__feed-component-name) {
  display: flex;

  &-aside {
    padding-right: 12px;
  }

  &-avatar {
    display: block;
  }

  &-content {
    flex-grow: 1;
  }

  &-header {
    font-size: 14px;
    font-weight: bold;
  }

  &-body {
    padding-top: 8px;
    font-size: 12px;
  }
}
</style>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

import { ComponentStyle } from '../../typing';
import { Box } from '../box';
import { Flex } from '../flex';
import Avatar from '../avatar/Avatar.vue';

@Component({
  components: {
    Box,
    Flex,
    Avatar,
  },
})
export default class Feed extends Vue {
  @Prop({ type: String, default: '' })
  public readonly avatar!: string;

  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: Object })
  public readonly asideStyle?: ComponentStyle;

  @Prop({ type: Object })
  public readonly avatarStyle?: ComponentStyle;

  @Prop({ type: Object })
  public readonly contentStyle?: ComponentStyle;

  @Prop({ type: Object })
  public readonly headerStyle?: ComponentStyle;

  @Prop({ type: Object })
  public readonly bodyStyle?: ComponentStyle;

  @Emit('click')
  private handleClick() {}
}
</script>
