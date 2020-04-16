<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop, Watch, Emit } from 'vue-property-decorator';

import { SizeType } from '../../typing/aliases';
import { ButtonType, ButtonShape, IButtonComponent } from '../../typing/interfaces/button';
import { isString } from '../../helper/utils';
import { SizeControl } from '../../helper/mixins';
import { BudsComponent } from '../basic/BudsComponent';

@Component({
  name: 'BudsButton',
})
export default class Button extends BudsComponent implements IButtonComponent {
  @Prop({ type: String })
  public readonly type?: ButtonType;

  @Prop({ type: String })
  public readonly size?: SizeType;

  @Prop({ type: String })
  public readonly shape?: ButtonShape;

  @Prop({ type: String })
  public readonly icon?: VNode | string;

  @Prop({ type: Boolean })
  public readonly primary?: boolean;

  @Prop({ type: Boolean })
  public readonly danger?: boolean;

  @Prop({ type: Boolean })
  public readonly block?: boolean;

  @Prop({ type: Boolean })
  public readonly loading?: boolean;

  @Prop({ type: Boolean })
  public readonly disabled?: boolean;

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

  private getClassNames(): string[] {
    const classNames: string[] = [this.$style.Button];

    switch (this.type) {
      case 'filled':
        classNames.push(this.$style['Button--filled']);
        break;
      case 'dashed':
        classNames.push(this.$style['Button--dashed']);
        break;
      case 'link':
        classNames.push(this.$style['Button--link']);
        break;
    }

    switch (this.size) {
      case 'large':
        classNames.push(this.$style['Button--large']);
        break;
      case 'small':
        classNames.push(this.$style['Button--small']);
        break;
    }

    switch (this.shape) {
      case 'round':
        classNames.push(this.$style['Button--round']);
        break;
      case 'circle':
        classNames.push(this.$style['Button--circle']);
        break;
    }

    if (this.danger) {
      classNames.push(this.$style['is-danger']);
    } else if (this.primary) {
      classNames.push(this.$style['is-primary']);
    }

    if (this.block) {
      classNames.push(this.$style['is-block']);
    }

    if (this.loading) {
      classNames.push(this.$style['is-loading']);
    }

    return classNames;
  }

  public render(h: CreateElement): VNode {
    const attrs: { [key: string]: any } = {};

    if (this.disabled) {
      attrs.disabled = 'disabled';
    }

    return h(
      'button',
      {
        class: this.getClassNames(),
        attrs,
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

<style lang="scss" src="./style.scss" module></style>
