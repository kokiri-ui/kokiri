import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { getComponentName, CardFooterStructuralComponent } from '@kokiri/core/dist/card';

import { Flex } from '../../flex';

@Component({
  name: getComponentName('cardFooter'),
})
export default class CardFooter extends CardFooterStructuralComponent {
  public render(h: CreateElement): VNode {
    return h(
      Flex,
      { class: this.getComponentClassNames(), props: { tag: this.tag } },
      this.$slots.default,
    );
  }
}
