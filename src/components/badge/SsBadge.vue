<template>
  <ss-text :class="[$style.Badge, $style['Badge--status']]">
    <ss-text :class="componentClassNames" :style="computedStyle" />
    <ss-text :class="$style['Badge-text']">{{ text }}</ss-text>
  </ss-text>
</template>

<style lang="scss" module>
@include component-rules($__badge-component-name) {
  &--status &-dot,
  &--status &-text {
    display: inline-block;
  }

  &--status &-dot {
    position: relative;
    top: -1px;
    margin-right: 8px;
    vertical-align: middle;
    @include circle(6px);
  }

  &-dot {
    &--default {
      background-color: #d9d9d9;
    }

    &--processing {
      background-color: #1890ff;
    }

    &--success {
      background-color: #52c41a;
    }

    &--error {
      background-color: #f5222d;
    }

    &--warning {
      background-color: #faad14;
    }
  }
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { SsText } from '../text';
import { ProcessStatus } from '../../typing';

@Component({
  components: {
    SsText,
  },
})
export default class SsBadge extends Vue {
  @Prop()
  readonly text!: string;

  @Prop()
  readonly status!: ProcessStatus;

  @Prop()
  readonly color!: string;

  get componentClassNames() {
    const { status, color } = this;

    return {
      [this.$style['Badge-dot']]: true,
      [this.$style[`Badge-dot--${this.status}`]]: status && !color,
    };
  }

  get computedStyle() {
    const { color } = this;

    if (color) {
      return {
        backgroundColor: color,
      };
    }

    return null;
  }
}
</script>
