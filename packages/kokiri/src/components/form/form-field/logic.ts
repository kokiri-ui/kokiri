import { Component } from 'vue-property-decorator';
import { getComponentName, FormFieldStructuralComponent } from '@kokiri/core/dist/form';

@Component({
  name: getComponentName('formField'),
})
export default class FormField extends FormFieldStructuralComponent {}
