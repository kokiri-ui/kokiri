import { Component } from 'vue-property-decorator';

import { getComponentName, TextStructuralComponent } from '@kokiri/core/dist/text';

@Component({
  name: getComponentName(),
})
export default class Text extends TextStructuralComponent {}
