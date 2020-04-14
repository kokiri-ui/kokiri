<style lang="scss" module>
.ViewSection:not(.is-active) {
  display: none;
}
</style>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';
import Box from '../box/Box.vue';

interface ViewNodeProps {
  tag?: string;
  className?: string;
}

@Component({
  components: {
    Box,
  },
})
export default class ViewGroup extends Vue {
  @Prop({ type: [String, Number] })
  public readonly active?: string | number;

  @Prop({ type: String })
  public readonly sectionClassName?: string;

  private generateVirtualNode(h: CreateElement, children: VNode[], opts: ViewNodeProps = {}): VNode {
    return h(opts.tag || 'box', opts.className ? { class: opts.className } : {}, children);
  }

  public render(h: CreateElement): VNode {
    const vnodes = (this.$slots.default || []).filter(({ tag }) => !!tag);

    let activeIndex = Number(this.active);

    if (isNaN(activeIndex) || vnodes[activeIndex] === undefined) {
      activeIndex = 0;
    }

    return this.generateVirtualNode(
      h,
      vnodes.map((vn: VNode, idx: number) => {
        const classNames: string[] = [this.$style.ViewSection];

        if (idx === activeIndex) {
          classNames.push(this.$style['is-active']);
        }

        if (this.sectionClassName) {
          classNames.push(this.sectionClassName);
        }

        return this.generateVirtualNode(h, [vn], { className: classNames.join(' ') });
      }),
    );
  }
}
</script>
