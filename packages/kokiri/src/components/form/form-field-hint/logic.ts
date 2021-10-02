import { Component } from 'vue-property-decorator';
import { getComponentName, FormFieldHintStructuralComponent } from '@kokiri/core/dist/form';

@Component({
  name: getComponentName('formFieldHint'),
})
export default class FormFieldHint extends FormFieldHintStructuralComponent {}
