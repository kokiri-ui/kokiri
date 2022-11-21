import {
  TreeNodeKey,
  TreeNodeData,
  TreeNode,
  TreeData,
  ConfigurableTreeNodeDataField,
} from 'petals-ui/dist/tree';
import { includes, isArray, omit } from '@kokiri/core/dist/basic';
import { getKeyName, getChildrenName } from '@kokiri/core/dist/tree';
import { TreeChild } from 'view-design';

import { MixedNodeData, MixedTreeNode } from './typing';

function resolveData(
  data: TreeData,
  nodeField: ConfigurableTreeNodeDataField,
  keys: { expanded: TreeNodeKey[]; checked: TreeNodeKey[]; selected: TreeNodeKey[] },
): Partial<TreeChild>[] {
  return data.map(node => {
    const resolved = {
      ...omit(node, ['render']),
      title: node[nodeField.label || 'label'],
      disabled: !!node.disabled,
      disableCheckbox: !!node.checkboxDisabled,
    } as MixedNodeData;

    const key = node[getKeyName(nodeField)];

    [
      ['expanded', 'expand'],
      ['checked', 'checked'],
      ['selected', 'selected'],
    ].forEach(([dataKey, propKey]) => (resolved[propKey] = includes(key, keys[dataKey])));

    const childrenName = getChildrenName(nodeField);
    const children = node[childrenName];

    if (isArray(children)) {
      resolved[childrenName] = resolveData(children, nodeField, keys) as TreeChild[];
    }

    return resolved;
  });
}

function resolveDataAndLevelMap(
  data: TreeData,
  nodeField: ConfigurableTreeNodeDataField,
  parentLevel: number = 0,
): { data: Record<string, TreeNodeData>; level: Record<string, number> } {
  const level = parentLevel + 1;
  const keyName = getKeyName(nodeField);
  const childrenName = getChildrenName(nodeField);

  const dataAndLevelMap: { data: Record<string, TreeNodeData>; level: Record<string, number> } = {
    data: {},
    level: {},
  };

  data.forEach(nodeData => {
    const keyValue = nodeData[keyName];

    dataAndLevelMap.data[keyValue] = { ...nodeData };
    dataAndLevelMap.level[keyValue] = level;

    if (isArray(nodeData[childrenName])) {
      const { data: dataMap, level: levelMap } = resolveDataAndLevelMap(
        nodeData[childrenName],
        nodeField,
        level,
      );

      dataAndLevelMap.data = { ...dataAndLevelMap.data, ...dataMap };
      dataAndLevelMap.level = { ...dataAndLevelMap.level, ...levelMap };
    }
  });

  return dataAndLevelMap;
}

function resolveTreeNodeMap(
  treeNodes: TreeChild[],
  nodeField: ConfigurableTreeNodeDataField,
): Record<string, TreeChild> {
  const keyName = getKeyName(nodeField);
  const childrenName = getChildrenName(nodeField);

  let treeNodeMap: Record<string, TreeChild> = {};

  treeNodes.forEach(treeNode => {
    treeNodeMap[treeNode[keyName]] = treeNode;

    if (isArray(treeNode[childrenName])) {
      treeNodeMap = { ...treeNodeMap, ...resolveTreeNodeMap(treeNode[childrenName], nodeField) };
    }
  });

  return treeNodeMap;
}

function sanitizeNodeData(
  data: MixedNodeData,
  dataMap: Record<string, TreeNodeData>,
  nodeField: ConfigurableTreeNodeDataField,
): TreeNodeData {
  const pureData = dataMap[data[getKeyName(nodeField)]] || {};
  const sanitized: TreeNodeData = {};
  const childrenName = getChildrenName(nodeField);

  Object.keys(pureData).forEach(
    k =>
      (sanitized[k] =
        k === childrenName
          ? (data[k] || []).map(child => sanitizeNodeData(child, dataMap, nodeField))
          : data[k]),
  );

  return sanitized;
}

function sanitizeTreeNode(
  node: MixedTreeNode,
  nodeField: ConfigurableTreeNodeDataField,
  level: number,
): TreeNode {
  const sanitized = {
    id: node.nodeKey,
    level,
    expanded: node.expand || false,
    checked: node.checked || false,
    disabled: node.disabled || false,
    indeterminate: node.indeterminate || false,
  } as TreeNode;

  sanitized.children = ((node[getChildrenName(nodeField)] || []) as MixedTreeNode[]).map(child =>
    sanitizeTreeNode(child, nodeField, level + 1),
  );

  return sanitized;
}

export {
  resolveData,
  resolveDataAndLevelMap,
  resolveTreeNodeMap,
  sanitizeNodeData,
  sanitizeTreeNode,
};
