<template>
  <box :class="computedClassNames" :style="computedStyle">
    <slot />
  </box>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { isSpecificComponent } from '../../helper/utils';
import { Box } from '../box';

interface BreakpointProp {
  span?: number;
  offset?: number;
  pull?: number;
  push?: number;
}

/**
 * 栅格布局单元格
 */
@Component({
  components: {
    Box,
  },
})
export default class Col extends Vue {
  /**
   * 栅格占位格数
   *
   * 为 `0` 时相当于 `display: none;`
   */
  @Prop({ type: Number, default: -1 })
  span!: number;

  /**
   * 栅格左侧的间隔格数
   */
  @Prop({ type: Number, default: 0 })
  offset!: number;

  /**
   * 栅格向左移动格数
   */
  @Prop({ type: Number, default: 0 })
  pull!: number;

  /**
   * 栅格向右移动格数
   */
  @Prop({ type: Number, default: 0 })
  push!: number;

  /**
   * `<576px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ default: -1 })
  xs!: number | BreakpointProp;

  /**
   * `≥576px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ default: -1 })
  sm!: number | BreakpointProp;

  /**
   * `≥768px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ default: -1 })
  md!: number | BreakpointProp;

  /**
   * `≥992px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ default: -1 })
  lg!: number | BreakpointProp;

  /**
   * `≥1200px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ default: -1 })
  xl!: number | BreakpointProp;

  /**
   * ≥1600px 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ default: -1 })
  xxl!: number | BreakpointProp;

  private getResponsiveClass(span: number, point: string = ''): string {
    const pointClass = point ? `${point}-` : '';

    return span === -1 ? '' : span === 0 ? `Col--${pointClass}hidden` : `Col--${pointClass}${span}`;
  }

  private get rowGutter(): any {
    let parent = this.$parent as any;

    while (parent && parent.$vnode && !isSpecificComponent(parent.$vnode, 'Row')) {
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
    const classNames = [this.$style.Col];
    const spanClass = this.getResponsiveClass(this.span);

    if (spanClass) {
      classNames.push(this.$style[spanClass]);
    }

    if (this.offset > 0) {
      classNames.push(this.$style[`Col--offset-${this.offset}`]);
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
