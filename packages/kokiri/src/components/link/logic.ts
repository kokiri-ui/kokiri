import { Component } from 'vue-property-decorator';
import { getComponentName, LinkStructuralComponent } from '@kokiri/core/dist/link';

@Component({
  name: getComponentName(),
})
export default class Link extends LinkStructuralComponent {}
