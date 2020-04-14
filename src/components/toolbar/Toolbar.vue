<style lang="scss" module>
@include component-rules($__toolbar-component-name) {
  display: flex;
  align-items: center;
}
</style>

<script lang="ts">
import { VueConstructor, CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';
import Box from '../box/Box.vue';
import SsText from '../text/Text.vue';

@Component({
  components: {
    SsText,
  },
})
export default class Toolbar extends Vue {
  /**
   * 标题
   */
  @Prop({ type: String, default: '' })
  readonly title?: string;

  /**
   * 图标
   *
   * TODO: 等图标组件确定后再处理
   */
  @Prop({ type: String, default: '' })
  readonly icon!: string;

  /**
   * 要渲染的组件/标签
   */
  @Prop({ type: [Function, String], default: Box })
  readonly tag!: VueConstructor | string;

  render(h: CreateElement): VNode {
    const {
      title,
      tag,
      $slots: { default: vNodes },
    } = this;
    const newNodes: VNode[] = [];

    if (title !== '') {
      newNodes.push(h('ss-text', { class: this.$style['Toolbar-title'] }, title));
    }

    return h(tag, { class: this.$style.Toolbar }, newNodes.concat(vNodes as VNode[]));
  }
}
</script>
