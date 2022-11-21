import {
  TreeNodeKey,
  TreeNode,
  TreeNodeData,
  TreeData,
  ConfigurableTreeNodeDataField,
} from 'petals-ui/dist/tree';
import { isArray } from '@kokiri/core/dist/basic';
import { getKeyName, getChildrenName } from '@kokiri/core/dist/tree';
import { TreeData as ElTreeData, TreeNode as ElTreeNode } from 'element-ui/types/tree';

function resolveDataMap(
  data: TreeData,
  nodeField: ConfigurableTreeNodeDataField,
): Record<string, TreeNodeData> {
  const keyName = getKeyName(nodeField);
  const childrenName = getChildrenName(nodeField);

  let dataMap: Record<string, TreeNodeData> = {};

  data.forEach(nodeData => {
    const keyValue = nodeData[keyName];

    dataMap[keyValue] = { ...nodeData };

    if (isArray(nodeData[childrenName])) {
      dataMap = { ...dataMap, ...resolveDataMap(nodeData[childrenName], nodeField) };
    }
  });

  return dataMap;
}

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

export { resolveDataMap, sanitizeTreeNode };
