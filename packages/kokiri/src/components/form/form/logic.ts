import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { getComponentName } from '@kokiri/core/dist/basic';
import { FormStructuralComponent } from '@kokiri/core/dist/form';

@Component({
  name: getComponentName('form'),
})
export default class Form extends FormStructuralComponent {
  private render(h: CreateElement): VNode {
    return h(this.tag || 'form', { class: this.getComponentClassNames() }, this.$slots.default);
  }
}
