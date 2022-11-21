import { Component } from 'vue-property-decorator';
import ElLink from 'element-ui/lib/link';

import { LinkStructuralComponent } from '@kokiri/core/dist/link';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('link'),
  components: { ElLink },
})
export default class Link extends LinkStructuralComponent {}
