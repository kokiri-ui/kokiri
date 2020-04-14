<template>
  <box :class="computeTabsClassNames()">
    <box :class="$style['Tabs-navs']" v-if="panes.length > 0">
      <tab-bar
        :navs="panes.map(({ label, title, disabled = false }) => ({ label: label || title, disabled }))"
        :active="activeIndex"
        :editable="editable"
        :stretch="stretch"
        @change="handleTabChange"
        @edit="handleTabEdit"
        @drag-end="handleTabNavDragEnd"
      />
    </box>
    <view-group
      :class="computeTabsContentClassNames()"
      :section-class-name="$style['Tabs-section']"
      :active="activeIndex"
    >
      <slot />
    </view-group>
  </box>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator';
import { PlacementType } from '../../typing';
import { isSpecificComponent } from '../../helper/utils';
import { Box } from '../box';
import { ViewGroup } from '../view-group';
import TabBar from './TabBar.vue';

/**
 * FIXME:
 * 判断是否为嵌套 `<group>` 生成的，
 * 临时方案
 */
function isParentGroupDslComponent(vNode: any): boolean {
  return vNode['__ss-parentRenderType'] === 'tabs';
}

@Component({
  components: {
    Box,
    ViewGroup,
    TabBar,
  },
})
export default class Tabs extends Vue {
  /**
   * 默认激活的选项卡索引
   */
  @Prop({ type: [String, Number], default: 0 })
  public readonly active!: string | number;

  /**
   * 选项卡显示位置
   */
  @Prop({ type: String, default: 'top' })
  public readonly position!: PlacementType;

  /**
   * 选项卡标签是否拉伸
   */
  @Prop({ type: Boolean, default: false })
  public readonly stretch!: boolean;

  /**
   * 选项卡内容是否高度固定
   */
  @Prop({ type: Boolean, default: false })
  public readonly fixed!: boolean;

  @Prop({ type: String })
  public readonly contentClassName?: string;

  /**
   * 选项卡是否可编辑
   *
   * 设置为 `true` 时每个选项卡上会有关闭按钮，并且有新增选项卡按钮
   */
  @Prop({ type: Boolean, default: false })
  public readonly editable!: boolean;

  @Watch('active', { immediate: true })
  private handleActiveChange(val: string | number): void {
    const activeIndex: number = Number(val);

    this.activeIndex = isNaN(activeIndex) ? 0 : activeIndex;
  }

  @Emit('edit')
  private handleTabEdit(flag, actionType: string): void {}

  @Emit('drag-end')
  private handleTabNavDragEnd(): void {}

  private activeIndex!: number;

  private panes: any[] = [];

  private computeTabsClassNames(): string[] {
    const classNames = [this.$style.Tabs, this.$style[`Tabs--${this.position}`]];

    if (this.fixed === true) {
      classNames.push(this.$style['Tabs--fixed']);
    }

    return classNames;
  }

  private computeTabsContentClassNames(): string[] {
    const classNames = [this.$style['Tabs-content']];

    if (this.contentClassName) {
      classNames.push(this.contentClassName);
    }

    return classNames;
  }

  private getPaneSlots(): any[] {
    return this.$slots.default
      ? this.$slots.default.filter(vn => {
          return isSpecificComponent(vn, 'TabPane') || isParentGroupDslComponent(vn);
        })
      : [];
  }

  private calcPanes(isForceUpdate = false): void {
    if (this.$slots.default) {
      const panes = this.getPaneSlots().map(({ componentInstance }) => componentInstance);
      const panesChanged = !(
        panes.length === this.panes.length && panes.every((pane, index) => pane === this.panes[index])
      );

      if (isForceUpdate || panesChanged) {
        this.panes = panes;
      }
    } else if (this.panes.length !== 0) {
      this.panes = [];
    }
  }

  private handleTabChange(...args): void {
    this.activeIndex = args[0];

    this.$forceUpdate();
    this.$nextTick(() => this.$emit('change', ...args));
  }

  public created(): void {
    this.$on('tab-nav-update', this.calcPanes.bind(null, true));
  }

  public mounted(): void {
    this.calcPanes();
  }

  public updated(): void {
    this.calcPanes();
  }
}
</script>
