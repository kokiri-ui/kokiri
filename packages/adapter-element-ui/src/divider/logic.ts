import { Component } from 'vue-property-decorator';

import { getComponentName, DividerStructuralComponent } from '@kokiri/core/dist/divider';
import ElDivider from 'element-ui/lib/divider';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName(),
  components: { ElDivider },
})
export default class Divider extends DividerStructuralComponent {}
