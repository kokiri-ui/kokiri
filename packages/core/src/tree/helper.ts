import { ConfigurableTreeNodeDataField } from 'petals-ui/dist/tree';

import { getComponentName as _getComponentName } from '../basic';

function getComponentName(): string {
  return _getComponentName('tree');
}

function getKeyName(nodeField: ConfigurableTreeNodeDataField): string {
  return nodeField.key || 'key';
}

function getLabelName(nodeField: ConfigurableTreeNodeDataField): string {
  return nodeField.label || 'label';
}

function getChildrenName(nodeField: ConfigurableTreeNodeDataField): string {
  return nodeField.children || 'children';
}

export { getComponentName, getKeyName, getLabelName, getChildrenName };
