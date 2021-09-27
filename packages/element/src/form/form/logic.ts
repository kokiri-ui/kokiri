import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { FormStructuralComponent } from '@kokiri/core/dist/form';
import ElForm from 'element-ui/lib/form';

import { getComponentName, convertSize } from '../../basic';

@Component({
  name: getComponentName('form'),
})
export default class Form extends FormStructuralComponent {
  private render(h: CreateElement): VNode {
    const props: Record<string, any> = { model: this.value, showMessage: !this.hideMessage };

    if (this.controlSize) {
      props.size = convertSize(this.controlSize);
    }

    if (this.layout === 'inline') {
      props.inline = true;
    } else if (this.layout === 'vertical') {
      props.labelPosition = 'top';
    }

    const { width, align } = this.labelOption || {};

    if (width) {
      props.labelWidth = width;
    }

    if (align) {
      props.labelPosition = align;
    }

    return h(ElForm, { props }, this.$slots.default);
  }
}
