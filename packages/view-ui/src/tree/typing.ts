import { TreeNodeData } from 'petals-ui/dist/tree';
import { CreateElement, VNode } from 'vue';
import { TreeChild } from 'view-design';

type MixedNodeData = TreeNodeData & Partial<TreeChild>;

type MixedTreeNode = TreeChild & Record<string, any>;

type NodeRenderer<D extends MixedNodeData = MixedNodeData> = (
  h: CreateElement,
  context: { node: { node: MixedTreeNode }; data: D; root: D[] },
) => VNode;

export { MixedNodeData, MixedTreeNode, NodeRenderer };
