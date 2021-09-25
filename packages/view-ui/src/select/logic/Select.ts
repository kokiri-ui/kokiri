import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { SelectStructuralComponent } from '@kokiri/core/dist/select';
import { Select as IvuSelect } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('select'),
})
export default class Select extends SelectStructuralComponent {
  private render(h: CreateElement): VNode {
    const props: Record<string, any> = {};

    return h(IvuSelect, { props }, this.$slots.default);
  }
}
