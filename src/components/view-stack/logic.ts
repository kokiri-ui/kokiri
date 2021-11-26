import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { getComponentName, ViewStackStructuralComponent } from '@kokiri/core/dist/view-stack';

type ViewNodeProps = {
  tag?: string;
  classNames?: string[];
};

@Component({
  name: getComponentName(),
})
export default class ViewStack extends ViewStackStructuralComponent {
  private generateVirtualNode(
    h: CreateElement,
    children: VNode[],
    opts: ViewNodeProps = {},
  ): VNode {
    return h(opts.tag || 'div', opts.classNames ? { class: opts.classNames } : {}, children);
  }

  private getViewClassNames(active: boolean): string[] {
    const classNames: string[] = [this.getDescendantClassName('view')];

    if (active) {
      classNames.push(this.getStateClassName('active'));
    }

    if (this.viewClassName) {
      classNames.push(this.viewClassName);
    }

    return classNames;
  }

  public render(h: CreateElement): VNode {
    const vnodes = (this.$slots.default || []).filter(({ tag }) => !!tag);

    let activeIndex = Number(this.activeFlag);

    if (isNaN(activeIndex) || vnodes[activeIndex] === undefined) {
      activeIndex = 0;
    }

    return this.generateVirtualNode(
      h,
      vnodes.map((vn: VNode, idx: number) =>
        this.generateVirtualNode(h, [vn], {
          classNames: this.getViewClassNames(idx === activeIndex),
        }),
      ),
    );
  }
}
