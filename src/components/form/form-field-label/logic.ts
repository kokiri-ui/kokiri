import { Component } from 'vue-property-decorator';
import { getComponentName, FormFieldLabelStructuralComponent } from '@kokiri/core/dist/form';

@Component({
  name: getComponentName('formFieldLabel'),
})
export default class FormFieldLabel extends FormFieldLabelStructuralComponent {}
