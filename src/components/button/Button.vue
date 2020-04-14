<style lang="scss" module>
.Button {
  &--block {
    width: 100% !important;
    max-width: none !important;
  }
}
</style>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop, Watch, Emit } from 'vue-property-decorator';
import { Button as ElButton } from 'element-ui';

import { StatusType, ButtonShape } from '../../typing';
import { isString } from '../../helper/utils';
import { SizeControl } from '../../helper/mixins';

@Component
export default class SsButton extends SizeControl {
  @Prop({ type: String, default: '' })
  public readonly type!: StatusType;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly block!: boolean;

  @Prop({ type: String, default: '' })
  public readonly icon!: string;

  @Prop({ type: String, default: '' })
  public readonly shape!: ButtonShape;

  @Prop({ type: Boolean, default: false })
  public readonly loading!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly plain!: boolean;

  @Prop({ type: Boolean, default: true })
  public readonly insertSpaceInButton?: boolean;

  @Watch('shape', { immediate: true })
  private handleShapeChange(val: ButtonShape): void {
    this.isCircle = val === 'circle';
    this.isRound = val === 'round';
  }

  @Emit('click')
  private handleClick(): void {}

  private isCircle!: boolean;

  private isRound!: boolean;

  private get computedIcon(): string {
    return this.icon ? `el-icon-${this.icon}` : '';
  }

  public render(h: CreateElement): VNode {
    return h(
      ElButton,
      {
        class: [this.$style.Button, { [this.$style['Button--block']]: this.block }],
        props: {
          type: this.type,
          size: this.resolvedSize,
          icon: this.computedIcon,
          disabled: this.disabled,
          circle: this.isCircle,
          round: this.isRound,
          loading: this.loading,
          plain: this.plain,
        },
        on: {
          click: this.handleClick,
        },
      },
      (this.$slots.default || []).map(vn => {
        if (this.insertSpaceInButton && isString(vn.text) && /^[\u4e00-\u9fa5]{2}$/.test(vn.text!)) {
          vn.text = vn.text!.split('').join(' ');
        }

        return vn;
      }),
    );
  }
}
</script>
