<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { IToolbarComponent } from '../../typing/interfaces/toolbar';
import { isString } from '../../helper/utils';

import { BudsComponent } from '../basic/BudsComponent';
import { Box } from '../box';
import { Text } from '../text';

@Component({
  name: 'BudsToolbar',
})
export default class Toolbar extends BudsComponent implements IToolbarComponent {
  @Prop({ type: [String, Object] })
  public readonly title?: string | VNode;

  @Prop({ type: [Object, String] })
  public readonly icon?: VNode | string;

  public render(h: CreateElement): VNode {
    const children: VNode[] = [];

    if (this.title) {
      children.push(
        h(
          Text,
          {
            class: this.$style['Toolbar-title'],
          },
          isString(this.title) ? (this.title as string) : [this.title],
        ),
      );
    }

    return h(
      this.tag,
      {
        class: this.$style.Toolbar,
      },
      children.concat(this.$slots.default as VNode[]),
    );
  }
}
</script>

<style lang="scss" module>
.Toolbar {
  display: flex;
  align-items: center;
}
</style>
