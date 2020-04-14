<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { CreateElement, VNode, VNodeData } from 'vue';
import { Vue, Component, Prop, Inject, Provide, Watch } from 'vue-property-decorator';

import { findSpecificAncestor } from '../../helper/utils';

import Box from '../box/Box.vue';
import GridRow from '../grid/Row.vue';
import GridCol from '../grid/Col.vue';

import { LayoutType, GridBreakpointProp, GridBreakpointListProp, FlexBreakpointListProp } from './types';

@Component({
  name: 'FormItem',
  components: {
    Box,
    GridRow,
    GridCol,
  },
})
export default class SsFormItem extends Vue {
  /**
   * 标签文本
   */
  @Prop({ type: [String, Object], default: '' })
  public readonly label!: string | VNode;

  /**
   * 是否必填
   */
  @Prop({ type: Boolean, default: false })
  public readonly required!: boolean;

  /**
   * 是否为编辑状态
   */
  @Prop({ type: Boolean, default: true })
  public readonly editable!: boolean;

  /**
   * 标签文本宽度
   *
   * 仅在 `Form` 组件的 `layout` 属性值为 `'flex'` 时生效，按 `px` 或百分比计算
   */
  @Prop({ type: [Number, String, Object], default: -1 })
  public readonly labelWidth!: number | string | FlexBreakpointListProp;

  /**
   * 标签文本占位格数
   *
   * 仅在 `Form` 组件的 `layout` 属性值为 `'grid'` 时生效，按照 `Col` 组件的属性计算
   */
  @Prop({ type: Object, default: () => null })
  public readonly labelCol!: GridBreakpointProp | GridBreakpointListProp;

  /**
   * 表单控件占位格数
   *
   * 仅在 `Form` 组件的 `layout` 属性值为 `'grid'` 时生效，按照 `Col` 组件的属性计算
   */
  @Prop({ type: Object, default: () => null })
  public readonly controlCol!: GridBreakpointProp | GridBreakpointListProp;

  @Prop({ type: String })
  public readonly labelClassName?: string;

  @Prop({ type: String })
  public readonly controlClassName?: string;

  @Prop({ type: String })
  public readonly wrapperClassName?: string;

  /**
   * 输入帮助提示文本
   */
  @Prop({ type: String })
  public readonly help?: string;

  @Prop({ type: String })
  public readonly status?: string;

  @Prop({ type: String })
  public readonly message?: string;

  /**
   * 嵌套的表单条目之间的分隔符
   *
   * 被 `FormItem` 嵌套的多个 `FormItem` 间插入
   */
  @Prop({ type: String })
  public readonly separator?: string;

  @Inject({ from: 'formLayoutContext', default: { props: {} } })
  private readonly formLayoutContext!: any;

  @Inject({ from: 'hasAncestorFormItem', default: false })
  private readonly hasAncestorFormItem!: boolean;

  @Provide('hasAncestorFormItem')
  private readonly asAncestorFormItem: boolean = true;

  @Watch('help', { immediate: true })
  private handleHelpChange(val: string): void {
    this.helpTip = val;
  }

  @Watch('message')
  private handleErrorChange(val: string): void {
    this.helpTip = val;
  }

  private isNested: boolean = false;

  /**
   * 帮助提示
   */
  private helpTip!: string;

  private get formItemLayout(): any {
    const {
      formLayoutContext: {
        props: { layout, labelWidth: formLabelSize, labelCol: formLabelCol, controlCol: formControlCol },
      },
      labelWidth,
      labelCol,
      controlCol,
    } = this;

    return {
      layout,
      labelWidth: labelWidth !== -1 ? labelWidth : formLabelSize,
      labelCol: labelCol || formLabelCol,
      controlCol: controlCol || formControlCol,
    };
  }

  private renderLabel(tag: string, nodeData: any = {}): VNode | null {
    if (!this.label) {
      return null;
    }

    const h = this.$createElement;
    const labelOpts = {} as any;

    if (this.required) {
      labelOpts.class = this.$style['is-required'];
    }

    return h(
      tag,
      {
        class: [this.$style['FormItem-label'], this.labelClassName],
        ...nodeData,
      },
      [h('label', labelOpts, [this.label])],
    );
  }

  private renderFormControl(tag: string, nodeData: any = {}): VNode {
    const h = this.$createElement;

    const nodes: VNode[] = this.$slots.default || [];
    const newNodes: VNode[] = [];

    if (this.isNested) {
      const len = nodes.length;

      nodes.forEach((vn, i) => {
        newNodes.push(vn);

        if (i < len - 1) {
          newNodes.push(h('box', { class: this.$style['FormItem-separator'] }, this.separator));
        }
      });
    }

    return h(
      tag,
      {
        class: [this.$style['FormItem-controlWrapper'], this.wrapperClassName],
        ...nodeData,
      },
      [
        h(
          'box',
          {
            class: [
              this.$style['FormItem-control'],
              this.controlClassName,
              { [this.$style['is-nested']]: this.isNested },
            ],
          },
          this.isNested ? newNodes : nodes,
        ),
        this.helpTip ? h('box', { class: this.$style['FormItem-explain'] }, this.helpTip) : null,
      ],
    );
  }

  private renderItem(tag: string, children: (VNode | null)[], nodeData: any = {}): VNode {
    const classNames: string[] = [this.$style.FormItem];

    if (this.editable) {
      classNames.push(this.$style['is-editable']);
    }

    if (this.status === 'error') {
      classNames.push(this.$style['is-error']);
    }

    return this.$createElement(tag, { class: classNames, ...nodeData }, children);
  }

  private renderGrid(): VNode {
    const { layout, labelWidth, labelCol, controlCol } = this.formItemLayout;
    const h = this.$createElement;

    let formItemProps = {};

    let labelColProps;
    let controlColProps;

    let labelColStyle;
    let controlColStyle;

    if (layout === LayoutType.Grid) {
      labelColProps = labelCol ? { ...labelCol } : {};
      controlColProps = controlCol ? { ...controlCol } : {};
    } else if (layout === LayoutType.Flex) {
      formItemProps = { ...formItemProps, type: 'flex' };

      if (labelCol) {
        labelColProps = { ...labelCol };
      }

      if (labelWidth !== -1) {
        labelColStyle = {
          width: isNaN(Number(labelWidth)) ? `${labelWidth}` : `${labelWidth}px`,
        };
      }
    }

    return this.renderItem(
      'grid-row',
      [
        this.renderLabel('grid-col', {
          props: labelColProps,
          style: labelColStyle,
        }),
        this.renderFormControl('grid-col', {
          props: controlColProps,
          style: controlColStyle,
        }),
      ],
      {
        props: formItemProps,
      },
    );
  }

  /**
   * 仅供被嵌套的 `FormItem` 组件实例调用
   */
  public setNested(): void {
    this.isNested = true;
  }

  public render(h: CreateElement): VNode {
    return this.formItemLayout.layout === LayoutType.Inline
      ? this.renderItem('box', [this.renderLabel('box'), this.renderFormControl('box')])
      : this.renderGrid();
  }

  public mounted(): void {
    if (!this.hasAncestorFormItem) {
      return;
    }

    const ancestorFormItem = findSpecificAncestor(this, 'FormItem');

    const parentFormOfCurrent = findSpecificAncestor(this, 'SsForm');
    const parentFormOfAncestorFormItem = findSpecificAncestor(ancestorFormItem!, 'SsForm');

    if (
      (!parentFormOfCurrent && !parentFormOfAncestorFormItem) ||
      parentFormOfCurrent === parentFormOfAncestorFormItem
    ) {
      (ancestorFormItem as any).setNested();
    }
  }
}
</script>
