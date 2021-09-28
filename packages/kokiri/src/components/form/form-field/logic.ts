import { Component } from 'vue-property-decorator';

import { getComponentName } from '@kokiri/core/dist/basic';
import { FormFieldStructuralComponent } from '@kokiri/core/dist/form';

@Component({
  name: getComponentName('formField'),
})
export default class FormField extends FormFieldStructuralComponent {}
