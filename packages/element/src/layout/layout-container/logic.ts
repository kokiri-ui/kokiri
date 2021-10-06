import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { isSpecificComponent } from '@kokiri/core/dist/basic';
import { LayoutContainerStructuralComponent } from '@kokiri/core/dist/layout';
import ElContainer from 'element-ui/lib/container';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutContainer'),
})
export default class LayoutContainer extends LayoutContainerStructuralComponent {
  private render(h: CreateElement): VNode {
    return h(
      ElContainer,
      { class: this.className },
      (this.$slots.default || []).map(vn => {
        let resolvedTag: string | undefined;

        if (isSpecificComponent(vn, getComponentName('layoutContainer'))) {
          resolvedTag = 'el-container';
        } else if (isSpecificComponent(vn, getComponentName('layoutMain'))) {
          resolvedTag = 'el-main';
        } else if (isSpecificComponent(vn, getComponentName('layoutAside'))) {
          resolvedTag = 'el-aside';
        } else if (isSpecificComponent(vn, getComponentName('layoutHeader'))) {
          resolvedTag = 'el-header';
        } else if (isSpecificComponent(vn, getComponentName('layoutFooter'))) {
          resolvedTag = 'el-footer';
        }

        if (vn.componentOptions && resolvedTag) {
          vn.componentOptions.tag = resolvedTag;
        }

        return vn;
      }),
    );
  }
}
