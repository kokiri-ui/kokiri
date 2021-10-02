import { Component } from 'vue-property-decorator';
import { getComponentName, ListFooterStructuralComponent } from '@kokiri/core/dist/list';

import { Box } from '../../box';

@Component({
  name: getComponentName('listFooter'),
  components: { Box },
})
export default class ListFooter extends ListFooterStructuralComponent {}
