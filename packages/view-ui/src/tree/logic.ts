import { Component, Watch } from 'vue-property-decorator';

import { TreeNodeKey, TreeNodeData } from 'petals-ui/dist/tree';
import { getComponentName, TreeStructuralComponent } from '@kokiri/core/dist/tree';
import { TreeChild, Tree as IvuTree } from 'view-design';

import { MixedNodeData, NodeRenderer } from './typing';
import {
  getKeyName,
  getChildrenName,
  resolveData,
  resolveDataAndLevelMap,
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
  private nodeDataMap: Record<string, TreeNodeData> = {};
  private nodeLevelMap: Record<string, number> = {};

  private internalExpandedKeys: TreeNodeKey[] = [];

  private resolvedNodeRenderer: NodeRenderer = null as any;

  private get resolvedData(): Partial<TreeChild>[] {
    return resolveData(
      this.dataSource,
      this.nodeField,
      {
        expanded: this.expandedKeys,
        checked: this.value,
        selected: this.selectedKeys,
      },
      this.expanded,
    );
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
  }

  @Watch('expandedKeys', { immediate: true })
  private handleExpandedKeysChange(): void {
    this.internalExpandedKeys = [...this.expandedKeys];
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

  private handleCheckChange(checkedNodes: TreeChild[]): void {
    this.onChange(this.getNodeKeys(checkedNodes));
  }

  private handleSelectChange(selectedNodes: TreeChild[]): void {
    this.onSelect(this.getNodeKeys(selectedNodes));
  }

  private handleToggleExpand(nodeData: TreeChild): void {
    if (nodeData.expand === true) {
      this.internalExpandedKeys.push(this.getNodeKeyValue(nodeData));
    } else {
      this.internalExpandedKeys = this.internalExpandedKeys.filter(
        k => k !== this.getNodeKeyValue(nodeData),
      );
    }

    this.onExpand([...this.internalExpandedKeys]);
  }
}
