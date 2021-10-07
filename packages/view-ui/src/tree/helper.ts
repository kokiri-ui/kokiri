import { includes, isArray, omit } from '@ntks/toolbox';

import {
  TreeNodeKey,
  TreeNodeData,
  TreeData,
  ConfigurableTreeNodeDataField,
} from 'petals-ui/dist/tree';
import { TreeChild } from 'view-design';

import { MixedNodeData } from './typing';

function getKeyName(nodeField: ConfigurableTreeNodeDataField): string {
  return nodeField.key || 'key';
}

function getChildrenName(nodeField: ConfigurableTreeNodeDataField): string {
  return nodeField.children || 'children';
}

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
    ].forEach(([dataKey, propKey]) => {
      if (includes(key, keys[dataKey])) {
        resolved[propKey] = true;
      }
    });

    const childrenName = getChildrenName(nodeField);
    const children = node[childrenName];

    if (isArray(children)) {
      resolved[childrenName] = resolveData(children, nodeField, keys) as TreeChild[];
    }

    return resolved;
  });
}

function resolveDataMap(
  data: TreeData,
  nodeField: ConfigurableTreeNodeDataField,
): Record<string, TreeNodeData> {
  const keyName = getKeyName(nodeField);
  const childrenName = getChildrenName(nodeField);

  let dataMap: Record<string, TreeNodeData> = {};

  data.forEach(nodeData => {
    dataMap[nodeData[keyName]] = { ...nodeData };

    if (isArray(nodeData[childrenName])) {
      dataMap = {
        ...dataMap,
        ...resolveDataMap(nodeData[childrenName], nodeField),
      };
    }
  });

  return dataMap;
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
          ? data[k].map(child => sanitizeNodeData(child, dataMap, nodeField))
          : data[k]),
  );

  return sanitized;
}

export { getKeyName, getChildrenName, resolveData, resolveDataMap, sanitizeNodeData };
