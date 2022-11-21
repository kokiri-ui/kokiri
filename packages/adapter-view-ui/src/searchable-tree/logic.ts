import { Component } from 'vue-property-decorator';

import { SearchableTreeStructuralComponent } from '@kokiri/core/dist/searchable-tree';

import { getComponentName } from '../basic';
import { TextInput } from '../text-input';
import { Icon as XIcon } from '../icon';
import { Tree } from '../tree';

@Component({
  name: getComponentName('searchableTree'),
  components: { TextInput, Tree, XIcon },
})
export default class SearchableTree extends SearchableTreeStructuralComponent {
  private get resolvedSearchIcon(): string {
    return this.searchIcon || 'ivu:ios-search';
  }

  private get resolvedTreeProps(): Record<string, any> {
    const props = this.getHeadlessComponent()!.resolveTreeProps();
    const treeClassName = 'SearchableTree-tree';

    props.className = props.className ? `${treeClassName} ${props.className}` : treeClassName;

    return props;
  }
}
