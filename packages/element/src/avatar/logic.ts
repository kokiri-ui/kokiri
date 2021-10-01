import { Component } from 'vue-property-decorator';
import ElAvatar from 'element-ui/lib/avatar';

import { getComponentName, AvatarStructuralComponent } from '@kokiri/core/dist/avatar';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName(),
  components: { ElAvatar },
})
export default class Avatar extends AvatarStructuralComponent {}
