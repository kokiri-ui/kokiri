<template>
  <svg aria-hidden="true" :class="$style.Icon" v-if="colourful">
    <use :xlink:href="`#icon` + type" />
  </svg>
  <i aria-hidden="true" :class="computedClassNames" @click="handleClick" v-else />
</template>

<style lang="scss" module>
@include component-rules($__icon-component-name) {
  display: inline-block;
  font: {
    size: inherit;
    weight: inherit;
  }
  color: inherit;
  line-height: 1;
}

@include component-rules($__icon-component-name, 'svg') {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { IconProvider } from '../../typing';

@Component
export default class Icon extends Vue {
  /**
   * 图标类型
   */
  @Prop({ type: String, required: true })
  readonly type!: string;

  /**
   * 图标提供方
   */
  @Prop({ type: String, default: 'iconfont' })
  readonly provider?: IconProvider;

  @Prop({ type: Boolean, default: false })
  readonly colourful?: boolean;

  @Emit('click')
  private handleClick(): void {}

  private get isIconFont(): boolean {
    return this.provider === 'iconfont';
  }

  private get computedClassNames(): object {
    const { type, provider } = this;

    return {
      [this.$style.Icon]: true,
      ['iconfont']: this.isIconFont,
      [`icon${type}`]: this.isIconFont,
      [`el-icon-${type}`]: provider === 'el',
    };
  }
}
</script>
