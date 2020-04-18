<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { ComponentStyle } from '../../typing';
import { IPanelComponent } from '../../typing/interfaces/panel';
import { isSpecificComponent } from '../../helper/utils';

import { BudsComponent } from '../basic/BudsComponent';
import { Box } from '../box';
import PanelHeader from './PanelHeader.vue';

@Component({
  name: 'BudsPanel',
})
export default class Panel extends BudsComponent implements IPanelComponent {
  @Prop({ type: String })
  public readonly title?: string;

  @Prop({ type: Object })
  public readonly bodyStyle?: ComponentStyle;

  @Prop({ type: String })
  public readonly bodyClass?: string;

  public render(h: CreateElement): VNode {
    const children: VNode[] = [];
    const bodyNodes: VNode[] = [];

    let header: VNode | undefined;
    let footer: VNode | undefined;

    (this.$slots.default || ([] as VNode[])).forEach((vn: any) => {
      if (isSpecificComponent(vn, 'BudsPanelHeader')) {
        header = vn;
      } else if (isSpecificComponent(vn, 'BudsPanelFooter')) {
        footer = vn;
      } else {
        bodyNodes.push(vn);
      }
    });

    children.push(
      h(
        Box,
        {
          class: [this.$style['Panel-body'], this.bodyClass],
          style: this.bodyStyle,
        },
        bodyNodes,
      ),
    );

    if (!header && this.title) {
      header = h(PanelHeader, this.title);
    }

    if (header) {
      children.unshift(header);
    }

    if (footer) {
      children.push(footer);
    }

    return h(Box, { class: this.$style.Panel }, children);
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
