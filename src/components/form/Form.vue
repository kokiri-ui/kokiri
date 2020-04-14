<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop, Provide } from 'vue-property-decorator';

import { LayoutType, GridBreakpointProp, GridBreakpointListProp, FlexBreakpointListProp } from './types';
import Box from '../box/Box.vue';

@Component({
  name: 'SsForm',
  components: {
    Box,
  },
})
export default class SsForm extends Vue {
  /**
   * 表单布局方式
   *
   * 支持以下三种选项：
   * - `'grid'` 为栅格布局，默认值
   * - `'flex'` 为弹性布局
   * - `'vertical'`
   * - `'inline'`
   */
  @Prop({ type: String, default: LayoutType.Grid })
  public readonly layout!: LayoutType;

  /**
   * 标签文本宽度
   *
   * 仅在 `layout` 值为 `'flex'` 时生效，按 `px` 或百分比计算
   */
  @Prop({ type: [Number, String, Object], default: -1 })
  public readonly labelWidth!: number | string | FlexBreakpointListProp;

  /**
   * 标签文本占位格数
   *
   * 仅在 `layout` 值为 `'grid'` 时生效，按照 `Col` 组件的属性计算
   */
  @Prop({ type: [Object], default: () => null })
  public readonly labelCol!: GridBreakpointProp | GridBreakpointListProp;

  /**
   * 表单控件占位格数
   *
   * 仅在 `layout` 值为 `'grid'` 时生效，按照 `Col` 组件的属性计算
   */
  @Prop({ type: [Object], default: () => null })
  public readonly controlCol!: GridBreakpointProp | GridBreakpointListProp;

  @Provide('formLayoutContext')
  private get formLayoutContext(): any {
    const { layout, labelWidth, labelCol, controlCol } = this;

    return {
      props: {
        layout,
        labelWidth,
        labelCol,
        controlCol,
      },
    };
  }

  public render(h: CreateElement): VNode {
    return h(
      'box',
      {
        class: [this.$style.Form, this.$style[`Form--${this.layout}`]],
      },
      this.$slots.default,
    );
  }
}
</script>
