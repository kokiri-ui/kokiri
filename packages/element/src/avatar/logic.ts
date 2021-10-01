import { Component } from 'vue-property-decorator';

import { getComponentName, AvatarStructuralComponent } from '@kokiri/core/dist/avatar';
import ElAvatar from 'element-ui/lib/avatar';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName(),
  components: { ElAvatar },
})
export default class Avatar extends AvatarStructuralComponent {}
