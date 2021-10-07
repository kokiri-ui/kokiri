import { TreeNodeData } from 'petals-ui/dist/tree';
import { CreateElement, VNode } from 'vue';
import { TreeChild } from 'view-design';

type MixedNodeData = TreeNodeData & Partial<TreeChild>;

type NodeRenderer<D extends MixedNodeData = MixedNodeData> = (
  h: CreateElement,
  context: { node: D; data: D; root: D[] },
) => VNode;

export { MixedNodeData, NodeRenderer };
