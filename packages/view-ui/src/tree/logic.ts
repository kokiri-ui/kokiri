import { includes, isArray } from '@ntks/toolbox';
import { Component } from 'vue-property-decorator';

import { TreeData, ConfigurableTreeNodeDataField } from 'petals-ui/dist/tree';
import { getComponentName, TreeStructuralComponent } from '@kokiri/core/dist/tree';
import { TreeChild, Tree as IvuTree } from 'view-design';

function resolveData(
  data: TreeData,
  nodeField: ConfigurableTreeNodeDataField,
  keys: { expanded: string[]; checked: string[]; selected: string[] },
  parentKey: string = '',
): Partial<TreeChild>[] {
  return data.map((node, idx) => {
    const resolved: Partial<TreeChild> = {
      title: node[nodeField.label || 'label'],
      disabled: !!node.disabled,
      disableCheckbox: !!node.checkboxDisabled,
    };

    if (node.render !== undefined) {
      resolved.render = node.render;
    }

    let currentKey = node[nodeField.key || 'key'];

    if (currentKey === undefined) {
      currentKey = `${idx}`;
    }

    const key = parentKey ? `${parentKey}-${currentKey}` : currentKey;

    [
      ['expanded', 'expand'],
      ['checked', 'checked'],
      ['selected', 'selected'],
    ].forEach(([dataKey, propKey]) => {
      if (includes(key, keys[dataKey])) {
        resolved[propKey] = true;
      }
    });

    const children = node[nodeField.children || 'children'];

    if (isArray(children)) {
      resolved.children = resolveData(children, nodeField, keys, key) as TreeChild[];
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
  private get resolvedData(): Partial<TreeChild>[] {
    return resolveData(this.dataSource, this.nodeField, {
      expanded: this.expandedKeys,
      checked: this.value,
      selected: this.selectedKeys,
    });
  }

  private get resolvedChildrenKey(): string {
    return this.nodeField.children || 'children';
  }
}
