import { Component, Watch } from 'vue-property-decorator';

import { TreeNodeKey, TreeNodeData } from 'petals-ui/dist/tree';
import { TreeStructuralComponent } from '@kokiri/core/dist/tree';
import ElTree from 'element-ui/lib/tree';
import { TreeData as ElTreeData } from 'element-ui/types/tree';

import { getComponentName } from '../basic';
import { NodeRenderer } from './typing';
import { sanitizeTreeNode } from './helper';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('tree'),
  components: { ElTree },
})
export default class Tree extends TreeStructuralComponent {
  private resolvedNodeRenderer: NodeRenderer<TreeNodeKey, ElTreeData> = null as any;

  private get resolvedCurrentNodeKey(): TreeNodeKey | undefined {
    return this.selectedKeys[0];
  }

  private get resolvedNodeKey(): string {
    return this.nodeField.key || 'key';
  }

  private get resolvedProps(): Record<string, string> {
    return {
      label: this.nodeField.label || 'label',
      children: this.nodeField.children || 'children',
    };
  }

  @Watch('nodeRenderer', { immediate: true })
  private handleNodeRendererChange(): void {
    this.resolvedNodeRenderer = this.nodeRenderer
      ? (_, { data, node }) => this.nodeRenderer(data, sanitizeTreeNode(node))
      : (null as any);
  }

  private handleNodeCheck(
    nodeData: TreeNodeData,
    status: {
      checkedKeys: TreeNodeKey[];
      checkedNodes: TreeNodeData[];
      halfCheckedKeys: TreeNodeKey[];
      halfCheckedNodes: TreeNodeData[];
    },
  ): void {
    this.onChange(status.checkedKeys);
  }

  private getNodeKeyValue(nodeData: TreeNodeData): TreeNodeKey {
    return nodeData[this.resolvedNodeKey];
  }

  private handleCurrentNodeChange(nodeData: TreeNodeData): void {
    this.onSelect([this.getNodeKeyValue(nodeData)]);
  }

  private handleNodeExpand(nodeData: TreeNodeData): void {
    this.onExpand([...this.expandedKeys, this.getNodeKeyValue(nodeData)]);
  }

  private handleNodeCollapse(nodeData: TreeNodeData): void {
    this.onExpand(this.expandedKeys.filter(k => k !== this.getNodeKeyValue(nodeData)));
  }
}
