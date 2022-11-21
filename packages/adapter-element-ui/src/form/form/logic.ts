import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { FormStructuralComponent } from '@kokiri/core/dist/form';
import ElForm from 'element-ui/lib/form';

import { getComponentName, convertSize } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('form'),
})
export default class Form extends FormStructuralComponent {
  private render(h: CreateElement): VNode {
    const props: Record<string, any> = {
      model: this.value,
      showMessage: !this.hideMessage,
      size: this.controlSize ? convertSize(this.controlSize) : 'medium',
    };

    if (this.layout === 'inline') {
      props.inline = true;
    } else if (this.layout === 'vertical') {
      props.labelPosition = 'top';
    }

    const { width, align } = this.labelOption || {};

    if (width) {
      props.labelWidth = `${width}`;
    }

    if (align) {
      props.labelPosition = align;
    }

    return h(ElForm, { class: this.className, props }, this.$slots.default);
  }
}
