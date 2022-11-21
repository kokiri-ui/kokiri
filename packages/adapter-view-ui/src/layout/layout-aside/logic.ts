import { Component } from 'vue-property-decorator';

import { isNumber, isString } from '@kokiri/core/dist/basic';
import { LayoutAsideStructuralComponent } from '@kokiri/core/dist/layout';
import { Sider as IvuSider } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutAside'),
  components: { IvuSider },
})
export default class LayoutAside extends LayoutAsideStructuralComponent {
  private get resolvedWidth(): number | undefined {
    if (isString(this.width) && /^.+px$/.test(this.width as string)) {
      return parseFloat(this.width as any);
    }

    return isNumber(this.width) ? (this.width as number) : undefined;
  }
}
