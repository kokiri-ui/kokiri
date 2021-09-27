import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { IconStructuralComponent } from '@kokiri/core/dist/icon';
import ElIcon from 'element-ui/lib/icon';

import { getComponentName } from '../basic';

@Component({
  name: getComponentName('icon'),
})
export default class Icon extends IconStructuralComponent {
  private render(h: CreateElement): VNode {
    return h(ElIcon, { props: { name: this.refs } }, this.$slots.default);
  }
}
