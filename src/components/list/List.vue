<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { IListComponent } from '../../typing/interfaces/list';
import { isSpecificComponent } from '../../helper/utils';
import { BaseComponent } from '../basic/BaseComponent';
import { Box } from '../box';

@Component({
  name: 'BudsList',
})
export default class List extends BaseComponent implements IListComponent {
  @Prop({ type: Boolean, default: false })
  public readonly bordered!: boolean;

  @Prop({ type: Boolean, default: true })
  public readonly divided!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly loading!: boolean;

  @Prop({ type: String })
  public readonly bodyClass?: string;

  public render(h: CreateElement): VNode {
    const children: VNode[] = [];
    const bodyNodes: VNode[] = [];

    let header: VNode | undefined;
    let footer: VNode | undefined;

    (this.$slots.default || ([] as VNode[])).forEach(vn => {
      if (isSpecificComponent(vn, 'BudsListHeader')) {
        header = vn;
      } else if (isSpecificComponent(vn, 'BudsListFooter')) {
        footer = vn;
      } else if (isSpecificComponent(vn, 'BudsListItem')) {
        bodyNodes.push(vn);
      }
    });

    const bodyClassNames: string[] = [this.$style['List-body']];

    if (this.bodyClass) {
      bodyClassNames.push(this.bodyClass);
    }

    if (bodyNodes.length > 0) {
      children.push(h(Box, { class: bodyClassNames }, [h('ul', bodyNodes)]));
    } else {
      children.push(h(Box, { class: bodyClassNames }));
    }

    if (header) {
      children.unshift(header);
    }

    if (footer) {
      children.push(footer);
    }

    return h(
      Box,
      {
        class: [
          this.$style.List,
          {
            [this.$style['is-bordered']]: this.bordered,
            [this.$style['is-divided']]: this.divided,
          },
        ],
      },
      children,
    );
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
