import { Component } from 'vue-property-decorator';

import { getComponentName, TreeStructuralComponent } from '@kokiri/core/dist/tree';
import ElTree from 'element-ui/lib/tree';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName(),
  components: { ElTree },
})
export default class Tree extends TreeStructuralComponent {
  private get resolvedCurrentNodeKey(): string | undefined {
    return this.selectedKeys[0];
  }

  private get resolvedNodeKey(): string {
    return this.nodeField.key || 'key';
  }

  private get resolvedProps(): Record<string, string> {
    return {
      label: this.nodeField.label || 'label',
      children: this.nodeField.children || 'children',
    };
  }
}
