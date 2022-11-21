import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { FormStructuralComponent } from '@kokiri/core/dist/form';
import { Form as IvuForm } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('form'),
})
export default class Form extends FormStructuralComponent {
  private render(h: CreateElement): VNode {
    const props: Record<string, any> = { model: this.value, showMessage: !this.hideMessage };

    if (this.layout === 'inline') {
      props.inline = true;
    } else if (this.layout === 'vertical') {
      props.labelPosition = 'top';
    }

    const { width, align } = this.labelOption || {};
    const resolvedWidth = parseFloat(width as any);

    if (!isNaN(resolvedWidth)) {
      props.labelWidth = resolvedWidth;
    }

    if (align) {
      props.labelPosition = align;
    }

    return h(IvuForm, { class: this.className, props }, this.$slots.default);
  }
}
