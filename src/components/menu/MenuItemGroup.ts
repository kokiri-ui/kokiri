import { Vue, Component, Prop } from 'vue-property-decorator';
import { MenuItemGroup as ElMenuItemGroup } from 'element-ui';
import { VNode, CreateElement } from 'vue';

@Component({
  components: {
    ElMenuItemGroup,
  },
})
export default class SsMenuItemGroup extends Vue {
  @Prop({ type: String })
  public readonly title?: string;

  public render(h: CreateElement): VNode {
    return h(
      'el-menu-item-group',
      {
        props: {
          title: this.title,
        },
      },
      this.$slots.default,
    );
  }
}
