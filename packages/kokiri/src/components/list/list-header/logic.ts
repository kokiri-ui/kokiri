import { Component } from 'vue-property-decorator';
import { getComponentName, ListHeaderStructuralComponent } from '@kokiri/core/dist/list';

import { Flex } from '../../flex';

@Component({
  name: getComponentName('listHeader'),
  components: { Flex },
})
export default class ListHeader extends ListHeaderStructuralComponent {}
