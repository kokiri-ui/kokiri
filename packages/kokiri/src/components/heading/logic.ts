import { Component } from 'vue-property-decorator';
import { getComponentName, HeadingStructuralComponent } from '@kokiri/core/dist/heading';

@Component({
  name: getComponentName(),
})
export default class Heading extends HeadingStructuralComponent {}
