import { CreateElement, VNode, VNodeData } from 'vue';
import { Vue, Component, Prop, Ref, Watch, Emit } from 'vue-property-decorator';
import { Tree as ElTree } from 'element-ui';
import { TreeData, TreeProps } from 'element-ui/types/tree';

import { isFunction } from '../../helper/utils';

@Component({
  components: {
    ElTree,
  },
})
export default class SsTree extends Vue {
  @Prop({ type: Array })
  public readonly treeData?: TreeData[];

  @Prop({ type: Boolean, default: false })
  public readonly draggable!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly checkable!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly checkStrictly!: boolean;

  @Prop({ type: Boolean, default: true })
  public readonly autoExpandParent!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly defaultExpandAll!: boolean;

  @Prop({ type: Array })
  public readonly defaultExpandedKeys?: string[];

  @Prop({ type: Array })
  public readonly defaultCheckedKeys?: string[];

  @Prop({ type: Function })
  public readonly loadData?: Function;

  @Prop({ type: Function })
  public readonly filterNode?: Function;

  @Prop({ type: String })
  public readonly nodeKey?: string;

  @Prop({ type: String })
  public readonly emptyText?: string;

  @Prop({ type: Object })
  public readonly nodeProps?: TreeProps;

  @Prop({ type: Boolean, default: true })
  public readonly expandOnClickNode!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly highlightCurrent!: boolean;

  @Ref()
  private readonly tree!: ElTree;

  @Watch('loadData', { immediate: true })
  private handleLoadDataChange(val: Function): void {
    this.isLazy = isFunction(val);
  }

  @Emit('node-click')
  private handleNodeClick(): void {}

  private isLazy!: boolean;

  public filter(val: any): void {
    return this.tree.filter(val);
  }

  public render(h: CreateElement): VNode {
    const treeOptions: VNodeData = {
      props: {
        data: this.treeData,
        nodeKey: this.nodeKey,
        emptyText: this.emptyText,
        props: this.nodeProps,
        draggable: this.draggable,
        showCheckbox: this.checkable,
        checkStrictly: this.checkStrictly,
        autoExpandParent: this.autoExpandParent,
        defaultExpandAll: this.defaultExpandAll,
        defaultExpandKeys: this.defaultExpandedKeys,
        defaultCheckedKeys: this.defaultCheckedKeys,
        highlightCurrent: this.highlightCurrent,
        lazy: this.isLazy,
        load: this.loadData,
        expandOnClickNode: this.expandOnClickNode,
        filterNodeMethod: this.filterNode,
      },
      on: {
        'node-click': this.handleNodeClick,
      },
      ref: 'tree',
    };

    if (this.$scopedSlots.default) {
      treeOptions.scopedSlots = {
        default: this.$scopedSlots.default,
      };
    }

    return h('el-tree', treeOptions);
  }
}
