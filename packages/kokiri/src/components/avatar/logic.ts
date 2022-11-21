import { Component } from 'vue-property-decorator';
import { getComponentName, AvatarStructuralComponent } from '@kokiri/core/dist/avatar';

@Component({
  name: getComponentName(),
})
export default class Avatar extends AvatarStructuralComponent {}
