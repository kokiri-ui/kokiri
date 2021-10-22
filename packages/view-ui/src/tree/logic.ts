import { Component, Watch, Ref } from 'vue-property-decorator';

import { TreeNodeKey, TreeNodeData, TreeNode } from 'petals-ui/dist/tree';
import {
  getComponentName,
  getKeyName,
  getChildrenName,
  TreeStructuralComponent,
} from '@kokiri/core/dist/tree';
import { TreeChild, Tree as IvuTree } from 'view-design';

import { MixedNodeData, NodeRenderer } from './typing';
import {
  resolveData,
  resolveDataAndLevelMap,
  resolveTreeNodeMap,
  sanitizeNodeData,
  sanitizeTreeNode,
} from './helper';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName(),
  components: { IvuTree },
})
export default class Tree extends TreeStructuralComponent {
  @Ref()
  private readonly ivuTree!: IvuTree;

  private nodeDataMap: Record<string, TreeNodeData> = {};
  private nodeLevelMap: Record<string, number> = {};
  private treeNodeMap: Record<string, TreeChild> = {};

  private internalExpandedKeys: TreeNodeKey[] = [];
  private expandedKeysNotChanged: boolean = true;
  private allExpandedInited: boolean = false;

  private resolvedNodeRenderer: NodeRenderer = null as any;

  private get resolvedData(): Partial<TreeChild>[] {
    return resolveData(this.dataSource, this.nodeField, {
      expanded: this.internalExpandedKeys,
      checked: this.value,
      selected: this.selectedKeys,
    });
  }

  private get resolvedNodeKey(): string {
    return getKeyName(this.nodeField);
  }

  private get resolvedChildrenKey(): string {
    return getChildrenName(this.nodeField);
  }

  @Watch('dataSource', { immediate: true })
  private handleDataSourceChange(): void {
    const { data, level } = resolveDataAndLevelMap(this.dataSource, this.nodeField);

    this.nodeDataMap = data;
    this.nodeLevelMap = level;

    if (this.expanded && !this.allExpandedInited) {
      this.internalExpandedKeys = Object.keys(data).map(k => data[k][this.resolvedNodeKey]);
      this.allExpandedInited = true;
    }

    this.$nextTick(
      () => (this.treeNodeMap = resolveTreeNodeMap(this.ivuTree.data || [], this.nodeField)),
    );
  }

  @Watch('expandedKeys', { immediate: true })
  private handleExpandedKeysChange(): void {
    if (this.expandedKeys.length === 0 && this.expandedKeysNotChanged) {
      this.expandedKeysNotChanged = false;
    } else {
      this.internalExpandedKeys = [...this.expandedKeys];
    }
  }

  @Watch('nodeRenderer', { immediate: true })
  private handleNodeRendererChange(): void {
    this.resolvedNodeRenderer = this.nodeRenderer
      ? (_, { data, node }) =>
          this.nodeRenderer(
            sanitizeNodeData(data, this.nodeDataMap, this.nodeField),
            sanitizeTreeNode(
              node.node,
              this.nodeField,
              this.nodeLevelMap[this.getNodeKeyValue(data)],
            ),
          )
      : (null as any);
  }

  private getNodeKeyValue(nodeData: MixedNodeData): TreeNodeKey {
    return nodeData[this.resolvedNodeKey];
  }

  private getNodeKeys(nodes: TreeChild[]): TreeNodeKey[] {
    return nodes.map(node => this.getNodeKeyValue(node));
  }

  private resolveEventParams(
    keys: TreeNodeKey[],
  ): [keys: TreeNodeKey[], data: TreeNodeData[], nodes: TreeNode[]] {
    return [
      keys,
      keys.map(k => this.nodeDataMap[k]),
      keys.map((k, i) =>
        sanitizeTreeNode(this.treeNodeMap[k], this.nodeField, this.nodeLevelMap[keys[i]]),
      ),
    ];
  }

  private handleCheckChange(checkedNodes: TreeChild[]): void {
    this.onChange(...this.resolveEventParams(this.getNodeKeys(checkedNodes)));
  }

  private handleSelectChange(selectedNodes: TreeChild[]): void {
    this.onSelect(...this.resolveEventParams(this.getNodeKeys(selectedNodes)));
  }

  private handleToggleExpand(nodeData: TreeChild): void {
    if (nodeData.expand === true) {
      this.internalExpandedKeys.push(this.getNodeKeyValue(nodeData));
    } else {
      this.internalExpandedKeys = this.internalExpandedKeys.filter(
        k => k !== this.getNodeKeyValue(nodeData),
      );
    }

    this.onExpand(...this.resolveEventParams([...this.internalExpandedKeys]));
  }
}
