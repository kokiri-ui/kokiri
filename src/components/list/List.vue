<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';
import Box from '../box/Box.vue';
import ListHeader from './ListHeader.vue';

function isListHeader(tag) {
  return tag === 'ListHeader' || tag === 'list-header';
}

function isListFooter(tag) {
  return tag === 'ListFooter' || tag === 'list-footer';
}

function isListItem(tag) {
  return tag === 'ListItem' || tag === 'list-item';
}

@Component({
  components: {
    Box,
    ListHeader,
  },
})
export default class List extends Vue {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: Boolean, default: false })
  public readonly bordered!: boolean;

  @Prop({ type: Boolean, default: true })
  public readonly divided!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly loading!: boolean;

  @Prop({ type: String })
  public readonly bodyClassName?: string;

  public render(h: CreateElement): VNode {
    const {
      $slots: { default: vNodes = [] },
      title,
      bordered,
      divided,
    } = this;
    const newNodes: any[] = [];
    const bodyNodes: any[] = [];

    let header;
    let footer;

    vNodes.forEach(vn => {
      if (!vn.componentOptions) {
        return;
      }

      const { tag } = vn.componentOptions;

      if (isListHeader(tag)) {
        header = vn;

        return;
      }

      if (isListFooter(tag)) {
        footer = vn;

        return;
      }

      if (isListItem(tag)) {
        bodyNodes.push(vn);
      }
    });

    if (bodyNodes.length > 0) {
      const bodyClassNames = [this.$style['List-body']];

      if (this.bodyClassName) {
        bodyClassNames.push(this.bodyClassName);
      }

      newNodes.push(h('ul', { class: bodyClassNames }, bodyNodes));
    }

    if (!header && title) {
      header = h('list-header', { props: { title } });
    }

    if (header) {
      newNodes.unshift(header);
    }

    if (footer) {
      newNodes.push(footer);
    }

    return h(
      'box',
      {
        class: [
          this.$style.List,
          {
            [this.$style['is-bordered']]: bordered,
            [this.$style['is-divided']]: divided,
          },
        ],
      },
      newNodes,
    );
  }
}
</script>
