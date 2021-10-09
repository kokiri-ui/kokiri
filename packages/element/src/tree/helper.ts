import { TreeNodeKey, TreeNode } from 'petals-ui/dist/tree';
import { TreeData as ElTreeData, TreeNode as ElTreeNode } from 'element-ui/types/tree';

function sanitizeTreeNode(node: ElTreeNode<TreeNodeKey, ElTreeData>): TreeNode {
  return {
    id: node.id,
    level: node.level,
    expanded: node.expanded,
    checked: node.checked,
    disabled: !!node.disabled,
    indeterminate: node.indeterminate,
    children: node.childNodes.map(child => sanitizeTreeNode(child)),
  };
}

export { sanitizeTreeNode };
