import { Component, Watch, Ref } from 'vue-property-decorator';

import { TreeNodeKey, TreeNodeData, TreeNode } from 'petals-ui/dist/tree';
import {
  getKeyName,
  getLabelName,
  getChildrenName,
  TreeStructuralComponent,
} from '@kokiri/core/dist/tree';
import ElTree from 'element-ui/lib/tree';
import { TreeData as ElTreeData } from 'element-ui/types/tree';

import { getComponentName } from '../basic';
import { NodeRenderer } from './typing';
import { resolveDataMap, sanitizeTreeNode } from './helper';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('tree'),
  components: { ElTree },
})
export default class Tree extends TreeStructuralComponent {
  @Ref()
  private readonly elTree!: ElTree;

  private nodeDataMap: Record<string, TreeNodeData> = {};

  private resolvedNodeRenderer: NodeRenderer<TreeNodeKey, ElTreeData> = null as any;

  private get resolvedCurrentNodeKey(): TreeNodeKey | undefined {
    return this.selectedKeys[0];
  }

  private get resolvedNodeKey(): string {
    return getKeyName(this.nodeField);
  }

  private get resolvedProps(): Record<string, string> {
    return { label: getLabelName(this.nodeField), children: getChildrenName(this.nodeField) };
  }

  @Watch('dataSource', { immediate: true })
  private handleDataSourceChange(): void {
    this.nodeDataMap = resolveDataMap(this.dataSource, this.nodeField);
  }

  @Watch('nodeRenderer', { immediate: true })
  private handleNodeRendererChange(): void {
    this.resolvedNodeRenderer = this.nodeRenderer
      ? (_, { data, node }) => this.nodeRenderer(data, sanitizeTreeNode(node))
      : (null as any);
  }

  private getNodes(keys: TreeNodeKey[]): TreeNode[] {
    return keys.map(k => sanitizeTreeNode(this.elTree.getNode(k)));
  }

  private getData(keys: TreeNodeKey[]): TreeNodeData[] {
    return keys.map(k => ({ ...this.nodeDataMap[k] }));
  }

  private handleNodeCheck(
    nodeData: TreeNodeData,
    {
      checkedKeys,
      checkedNodes,
    }: {
      checkedKeys: TreeNodeKey[];
      checkedNodes: TreeNodeData[];
      halfCheckedKeys: TreeNodeKey[];
      halfCheckedNodes: TreeNodeData[];
    },
  ): void {
    this.onChange(checkedKeys, checkedNodes, this.getNodes(checkedKeys));
  }

  private getNodeKeyValue(nodeData: TreeNodeData): TreeNodeKey {
    return nodeData[this.resolvedNodeKey];
  }

  private handleCurrentNodeChange(nodeData: TreeNodeData): void {
    const keys = [this.getNodeKeyValue(nodeData)];

    this.onSelect(keys, [nodeData], this.getNodes(keys));
  }

  private handleNodeExpand(nodeData: TreeNodeData): void {
    const keys = [...this.expandedKeys, this.getNodeKeyValue(nodeData)];

    this.onExpand(keys, this.getData(keys), this.getNodes(keys));
  }

  private handleNodeCollapse(nodeData: TreeNodeData): void {
    const keys = this.expandedKeys.filter(k => k !== this.getNodeKeyValue(nodeData));

    this.onExpand(keys, this.getData(keys), this.getNodes(keys));
  }
}
