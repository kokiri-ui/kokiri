import { CreateElement, VNode, VNodeComponentOptions } from 'vue';
import { Component } from 'vue-property-decorator';

import ElTabs from 'element-ui/lib/tabs';
import ElTabPane from 'element-ui/lib/tab-pane';

import { isSpecificComponent } from '@kokiri/core/dist/basic';
import { TabsStructuralComponent } from '@kokiri/core/dist/tabs';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('tabs'),
})
export default class Tabs extends TabsStructuralComponent {
  private get resolvedProps(): Record<string, any> {
    const props: Record<string, any> = {
      value: this.activeFlag,
      tabPosition: this.tabBarPlacement,
      stretch: this.tabBarStretch,
    };

    if (this.theme === 'card') {
      props.type = 'card';
    }

    return props;
  }

  private render(h: CreateElement): VNode {
    return h(
      ElTabs,
      {
        class: this.className,
        props: this.resolvedProps,
        on: {
          'tab-click': paneNode => this.onChange(paneNode.$props.name),
        },
      },
      (this.$slots.default || []).map(vn => {
        if (isSpecificComponent(vn, getComponentName('tabPane'))) {
          const opts = (vn.componentOptions || {}) as VNodeComponentOptions;
          const props = (opts.propsData || {}) as Record<string, any>;

          return h(
            ElTabPane,
            {
              class: props.className,
              props: { name: props.flag, label: props.label },
            },
            opts.children,
          );
        }

        return vn;
      }),
    );
  }
}
