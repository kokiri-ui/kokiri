import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { IconStructuralComponent } from '@kokiri/core/dist/icon';
import { Icon as IvuIcon } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  name: getComponentName('icon'),
})
export default class Icon extends IconStructuralComponent {
  private render(h: CreateElement): VNode {
    return h(IvuIcon, { props: { type: this.refs } }, this.$slots.default);
  }
}
