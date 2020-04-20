<template>
  <box :class="computedClassNames" :style="computedStyle">
    <slot />
  </box>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { GridBreakpointProp } from '../../typing/aliases';
import { IGridColComponent } from '../../typing/interfaces/grid';
import { isSpecificComponent } from '../../helper/utils';

import { BaseComponent } from '../basic/BaseComponent';
import { Box } from '../box';

@Component({
  name: 'BudsGridCol',
  components: {
    Box,
  },
})
export default class GridCol extends BaseComponent implements IGridColComponent {
  /**
   * 栅格占位格数
   *
   * 为 `0` 时相当于 `display: none;`
   */
  @Prop({ type: Number, default: -1 })
  public readonly span!: number;

  /**
   * 栅格左侧的间隔格数
   */
  @Prop({ type: Number, default: 0 })
  public readonly offset!: number;

  /**
   * 栅格向左移动格数
   */
  @Prop({ type: Number, default: 0 })
  public readonly pull!: number;

  /**
   * 栅格向右移动格数
   */
  @Prop({ type: Number, default: 0 })
  public readonly push!: number;

  /**
   * `<576px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object], default: -1 })
  public readonly xs!: number | GridBreakpointProp;

  /**
   * `≥576px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object], default: -1 })
  public readonly sm!: number | GridBreakpointProp;

  /**
   * `≥768px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object], default: -1 })
  public readonly md!: number | GridBreakpointProp;

  /**
   * `≥992px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object], default: -1 })
  public readonly lg!: number | GridBreakpointProp;

  /**
   * `≥1200px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object], default: -1 })
  public readonly xl!: number | GridBreakpointProp;

  /**
   * ≥1600px 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object], default: -1 })
  public readonly xxl!: number | GridBreakpointProp;

  private getResponsiveClass(span: number, point: string = ''): string {
    const pointClass = point ? `${point}-` : '';

    return span === -1 ? '' : span === 0 ? `GridCol--${pointClass}hidden` : `GridCol--${pointClass}${span}`;
  }

  private get rowGutter(): any {
    let parent = this.$parent as any;

    while (parent && parent.$vnode && !isSpecificComponent(parent.$vnode, 'BudsGridRow')) {
      parent = parent.$parent;
    }

    return parent ? parent.gutter : 0;
  }

  private get computedStyle(): any {
    const rowGutter = this.rowGutter;
    const style: any = {};

    if (rowGutter > 0) {
      style.paddingLeft = `${rowGutter / 2}px`;
      style.paddingRight = style.paddingLeft;
    }

    return style;
  }

  private get computedClassNames(): string {
    const classNames = [this.$style.GridCol];
    const spanClass = this.getResponsiveClass(this.span);

    if (spanClass) {
      classNames.push(this.$style[spanClass]);
    }

    if (this.offset > 0) {
      classNames.push(this.$style[`GridCol--offset-${this.offset}`]);
    }

    ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(bp => {
      const cls = this.getResponsiveClass(this[bp], bp);

      if (cls) {
        classNames.push(this.$style[cls]);
      }
    });

    return classNames.join(' ');
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
