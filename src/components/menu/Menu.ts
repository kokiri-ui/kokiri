import { VNode, CreateElement } from 'vue';
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator';
import { Menu as ElMenu } from 'element-ui';
import { MenuDisplayMode } from 'element-ui/types/menu';
import { DirectionType } from '../../typing';

type MenuMode = DirectionType | 'inline';

@Component({
  components: {
    ElMenu,
  },
})
export default class SsMenu extends Vue {
  @Prop({ type: String, default: 'inline' })
  public readonly mode!: MenuMode;

  @Prop({ type: Boolean, default: false })
  public readonly collapsed!: boolean;

  @Prop()
  public readonly defaultActive?: any;

  @Prop({ type: String })
  public readonly activeTextColor?: string;

  @Watch('mode', { immediate: true })
  private handleModeChange(val: MenuMode): void {
    // TODO:
    // Element 的 `vertical` 是 Ant Design 的 `inline`
    // 本组件的 `mode` 属性值与 Ant Design 一致
    // 但符合 Ant Design 中行为的 `vertical` 暂未实现
    // 先将 `inline` 兼容成 Element 的 `vertical`
    this.menuMode = val === 'horizontal' ? 'horizontal' : 'vertical';

    this.updateCollapsed();
  }

  @Watch('collapsed')
  private handleCollapsedChange(val: boolean): void {
    this.updateCollapsed();
  }

  @Emit('select')
  private handleMenuItemSelect(): void {}

  @Emit('open')
  private handleMenuItemOpen(): void {}

  @Emit('close')
  private handleMenuItemClose(): void {}

  private menuMode!: MenuDisplayMode;

  private isCollapsed!: boolean;

  private updateCollapsed(): void {
    this.isCollapsed = this.menuMode === 'vertical' ? this.collapsed : false;
  }

  public render(h: CreateElement): VNode {
    return h(
      'el-menu',
      {
        props: {
          mode: this.menuMode,
          collapse: this.isCollapsed,
          activeTextColor: this.activeTextColor,
          defaultActive: this.defaultActive,
          collapseTransition: false,
        },
        on: {
          select: this.handleMenuItemSelect,
          open: this.handleMenuItemOpen,
          close: this.handleMenuItemClose,
        },
      },
      this.$slots.default,
    );
  }
}
