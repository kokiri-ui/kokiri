import { Component } from 'vue-property-decorator';

import { getComponentName, BadgeStructuralComponent } from '@kokiri/core/dist/badge';
import ElBadge from 'element-ui/lib/badge';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName(),
  components: { ElBadge },
})
export default class Badge extends BadgeStructuralComponent {}
