<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { IBoxComponent } from '../../typing/interfaces/box';
import { isSpecificComponent } from '../../helper/utils';
import { BaseComponent } from '../basic/BaseComponent';

@Component({
  name: 'BudsBox',
})
export default class Box extends BaseComponent implements IBoxComponent {
  public render(h: CreateElement): VNode {
    const children: VNode[] = [];
    const bodyNodes: VNode[] = [];

    let header: VNode | undefined;
    let footer: VNode | undefined;

    (this.$slots.default || ([] as VNode[])).forEach(vn => {
      if (isSpecificComponent(vn, 'BudsBoxHeader')) {
        header = vn;
      } else if (isSpecificComponent(vn, 'BudsBoxFooter')) {
        footer = vn;
      } else {
        bodyNodes.push(vn);
      }
    });

    if (header || footer) {
      children.push(h('div', { class: this.$style['Box-body'] }, bodyNodes));

      if (header) {
        children.unshift(header);
      }

      if (footer) {
        children.push(footer);
      }
    } else {
      children.push(...bodyNodes);
    }

    return h('div', { class: this.$style.Box }, children);
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
