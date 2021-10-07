import { includes, isArray } from '@ntks/toolbox';
import { Component, Watch } from 'vue-property-decorator';

import {
  TreeNodeKey,
  TreeNodeData,
  TreeData,
  ConfigurableTreeNodeDataField,
} from 'petals-ui/dist/tree';
import { getComponentName, TreeStructuralComponent } from '@kokiri/core/dist/tree';
import { TreeChild, Tree as IvuTree } from 'view-design';

function resolveData(
  data: TreeData,
  nodeField: ConfigurableTreeNodeDataField,
  keys: { expanded: TreeNodeKey[]; checked: TreeNodeKey[]; selected: TreeNodeKey[] },
): Partial<TreeChild>[] {
  return data.map(node => {
    const keyName = nodeField.key || 'key';
    const key = node[keyName];
    const resolved: Partial<TreeChild> = {
      [keyName]: key,
      title: node[nodeField.label || 'label'],
      disabled: !!node.disabled,
      disableCheckbox: !!node.checkboxDisabled,
    };

    if (node.render !== undefined) {
      resolved.render = node.render;
    }

    [
      ['expanded', 'expand'],
      ['checked', 'checked'],
      ['selected', 'selected'],
    ].forEach(([dataKey, propKey]) => {
      if (includes(key, keys[dataKey])) {
        resolved[propKey] = true;
      }
    });

    const childrenName = nodeField.children || 'children';
    const children = node[childrenName];

    if (isArray(children)) {
      resolved[childrenName] = resolveData(children, nodeField, keys) as TreeChild[];
    }

    return resolved;
  });
}

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName(),
  components: { IvuTree },
})
export default class Tree extends TreeStructuralComponent {
  private internalExpandedKeys: TreeNodeKey[] = [];

  private get resolvedData(): Partial<TreeChild>[] {
    return resolveData(this.dataSource, this.nodeField, {
      expanded: this.expandedKeys,
      checked: this.value,
      selected: this.selectedKeys,
    });
  }

  private get resolvedNodeKey(): string {
    return this.nodeField.key || 'key';
  }

  private get resolvedChildrenKey(): string {
    return this.nodeField.children || 'children';
  }

  @Watch('expandedKeys', { immediate: true })
  private handleExpandedKeysChange(): void {
    this.internalExpandedKeys = [...this.expandedKeys];
  }

  private getNodeKeyValue(nodeData: TreeNodeData): TreeNodeKey {
    return nodeData[this.resolvedNodeKey];
  }

  private getNodeKeys(nodes: TreeChild[]): TreeNodeKey[] {
    return nodes.map(node => this.getNodeKeyValue(node));
  }

  private handleCheckChange(checkedNodes: TreeChild[]): void {
    this.onChange(this.getNodeKeys(checkedNodes));
  }

  private handleSelectChange(selectedNodes: TreeChild[]): void {
    this.onSelect(this.getNodeKeys(selectedNodes));
  }

  private handleToggleExpand(nodeData: TreeChild): void {
    if (nodeData.expand === true) {
      this.internalExpandedKeys.push(this.getNodeKeyValue(nodeData));
    } else {
      this.internalExpandedKeys = this.internalExpandedKeys.filter(
        k => k !== this.getNodeKeyValue(nodeData),
      );
    }

    this.onExpand([...this.internalExpandedKeys]);
  }
}
