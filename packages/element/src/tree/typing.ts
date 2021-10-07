import { CreateElement, VNode } from 'vue';
import { TreeNode as ElTreeNode, TreeStore as ElTreeStore } from 'element-ui/types/tree';

type NodeRenderer<K, D> = (
  h: CreateElement,
  context: { node: ElTreeNode<K, D>; data: D; store: ElTreeStore<K, D> },
) => VNode;

export { NodeRenderer };
