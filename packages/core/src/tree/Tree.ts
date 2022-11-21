import {
  TreeNodeKey,
  TreeNodeData,
  TreeNode,
  TreeNodeRenderer,
  TreeData,
  ConfigurableTreeNodeDataField,
  ITreeComponent,
  TreeHeadlessComponent,
} from 'petals-ui/dist/tree';
import { VNode } from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class TreeStructuralComponent
  extends BaseStructuralComponent<TreeHeadlessComponent>
  implements ITreeComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: Array, default: () => [] })
  public readonly value!: TreeNodeKey[];

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly readonly!: boolean;

  @Prop({ type: Array, default: () => [] })
  public readonly dataSource!: TreeData;

  @Prop({ type: Boolean, default: false })
  public readonly checkable!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly expanded!: boolean;

  @Prop({ type: Array, default: () => [] })
  public readonly expandedKeys!: TreeNodeKey[];

  @Prop({ type: Array, default: () => [] })
  public readonly selectedKeys!: TreeNodeKey[];

  @Prop({ type: Object, default: () => ({}) })
  public readonly nodeField!: ConfigurableTreeNodeDataField;

  @Prop({ type: Function })
  public readonly nodeRenderer!: TreeNodeRenderer<VNode>;

  @Prop({ type: String })
  public readonly emptyText!: string;

  @Emit('change')
  public onChange(checkedKeys: TreeNodeKey[], data: TreeNodeData[], nodes: TreeNode[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('select')
  public onSelect(selectedKeys: TreeNodeKey[], data: TreeNodeData[], nodes: TreeNode[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('expand')
  public onExpand(expandedKeys: TreeNodeKey[], data: TreeNodeData[], nodes: TreeNode[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new TreeHeadlessComponent(this));
  }
}

export { TreeStructuralComponent };
