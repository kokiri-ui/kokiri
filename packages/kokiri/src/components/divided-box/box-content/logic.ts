import { Component, Inject } from 'vue-property-decorator';

import { getComponentName, BoxContentStructuralComponent } from '@kokiri/core/dist/divided-box';

import { Box } from '../../box';

type StyleObject = {
  width?: number | string;
  height?: number | string;
  flexGrow?: number;
  overflow?: string;
};

/**
 * `HDividedBox` 和 `VDividedBox` 的子组件
 */
@Component({
  name: getComponentName('boxContent'),
  components: { Box },
})
export default class BoxContent extends BoxContentStructuralComponent {
  @Inject({ from: '__kokiri-parentDividedBox', default: () => ({}) })
  private readonly parentDividedBox!: any;

  private resolveClassNames(): string[] {
    return [this.$style.BoxContent].concat(this.resolveFlexBoxClassNames());
  }

  private convertSize(size): string {
    return typeof size === 'string' && size.indexOf('%') > -1 ? size : `${size}px`;
  }

  private getComputedStyle(): StyleObject {
    const { adjustment, direction } = this.parentDividedBox;

    if (direction === 'horizontal' && this.width) {
      return { width: this.convertSize(this.width), flexGrow: 0 };
    }

    if (direction === 'vertical' && this.height) {
      return { height: this.convertSize(this.height), flexGrow: 0 };
    }

    return adjustment === 'average' ? { flexGrow: 1 } : {};
  }

  private resolveStyle(): StyleObject {
    return { ...this.getComputedStyle(), overflow: 'auto' };
  }
}
