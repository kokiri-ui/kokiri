<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { isSpecificComponent } from '../../helper/utils';
import { ComponentStyle } from '../../typing';
import Box from '../box/Box.vue';
import PanelHeader from './PanelHeader.vue';

@Component({
  components: {
    Box,
    PanelHeader,
  },
})
export default class Panel extends Vue {
  /**
   * 标题，有 `PanelHeader` 子组件时会忽略
   */
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: Object })
  public readonly bodyStyle?: ComponentStyle;

  @Prop({ type: String })
  public readonly bodyClassName?: string;

  public render(h: CreateElement): VNode {
    const {
      $slots: { default: vnodes = [] },
      title,
    } = this;
    const newNodes: any[] = [];
    const bodyNodes: any[] = [];

    let header;
    let footer;

    vnodes.forEach((vn: any) => {
      if (isSpecificComponent(vn, 'PanelHeader')) {
        header = vn;

        return;
      }

      if (isSpecificComponent(vn, 'PanelFooter')) {
        footer = vn;

        return;
      }

      bodyNodes.push(vn);
    });

    newNodes.push(
      h('box', { class: [this.$style['Panel-body'], this.bodyClassName], style: this.bodyStyle || {} }, bodyNodes),
    );

    if (!header && title) {
      header = h('panel-header', { props: { title } });
    }

    if (header) {
      newNodes.unshift(header);
    }

    if (footer) {
      newNodes.push(footer);
    }

    return h('box', { class: this.$style.Panel }, newNodes);
  }
}
</script>
