<template>
  <box :class="computedClass">
    <template v-if="isScrollable">
      <box
        :class="[$style['TabBar-button'], $style['TabBar-button--prev'], { 'is-disabled': isPrevDisabled }]"
        @click.stop="handleScrollPrev"
      >
        <icon type="arrow-left" provider="el" />
      </box>
      <box
        :class="[$style['TabBar-button'], $style['TabBar-button--next'], { 'is-disabled': isNextDisabled }]"
        @click.stop="handleScrollNext"
      >
        <icon type="arrow-right" provider="el" />
      </box>
    </template>
    <box :class="$style['TabBar-content']" ref="tabBarContent">
      <box :class="$style['TabBar-body']" :style="tabNavsStyle">
        <draggable
          ref="navWrapper"
          group="ss-ui-components-tab-navs"
          :class="$style['TabBar-draggable']"
          :list="tabNavs"
          :disabled="!editable"
          @end="handleDragEnd"
        >
          <tab-nav
            v-for="(item, index) in navs"
            :key="item.label"
            :nav="item"
            :index="index"
            :active="index === activeIndex"
            :editable="editable"
            @change="handleTabChange"
            @remove="handleTabRemove(index)"
          />
        </draggable>
        <tab-nav :class="$style['TabNav--add']" :nav="addTabNav" @change="handleTabAdd" v-if="editable" />
      </box>
    </box>
  </box>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop, Ref, Watch, Emit } from 'vue-property-decorator';
import { throttle } from 'throttle-debounce';
import Draggable from 'vuedraggable';
import { Box } from '../box';
import { Icon } from '../icon';
import TabNav from './TabNav.vue';

enum TabEditAction {
  Add = 'add',
  Remove = 'remove',
}

@Component({
  components: {
    Box,
    Icon,
    TabNav,
    Draggable: Draggable as any,
  },
})
export default class TabBar extends Vue {
  @Prop(Array)
  readonly navs!: any[];

  @Prop([String, Number])
  readonly active?: string | number;

  @Prop({ type: Boolean, default: false })
  readonly editable?: boolean;

  /**
   * 选项卡是否拉伸
   */
  @Prop({ type: Boolean, default: false })
  readonly stretch?: boolean;

  @Ref()
  readonly navWrapper!: any;

  @Ref()
  readonly tabBarContent!: Box;

  @Watch('active', { immediate: true })
  private handleActiveChange(val) {
    const activeIndex: number = Number(val);

    this.activeIndex = isNaN(activeIndex) ? 0 : activeIndex;
  }

  @Watch('navs', { immediate: true })
  private handleNavsChange(val) {
    this.tabNavs = val;
  }

  @Emit('change')
  private handleTabChange(): void {}

  @Emit('drag-end')
  private handleDragEnd() {
    return this.tabNavs;
  }

  private activeIndex!: number;

  private tabNavs!: any[];

  private addTabNav: any = { label: 'plus', icon: true };

  private isScrollable: boolean = false;

  private isPrevDisabled: boolean = true;

  private isNextDisabled: boolean = false;

  private offsetLeft: number = 0;

  private tabNavsStyle: object = {};

  private throttleResize!: Function;

  private get computedClass(): object {
    return {
      [this.$style.TabBar]: true,
      [this.$style['TabBar--stretch']]: this.stretch,
      [this.$style['is-scrollable']]: this.isScrollable,
    };
  }

  private setTabNavsStyle() {
    this.tabNavsStyle = this.offsetLeft < 0 ? { transform: `translate3d(${this.offsetLeft}px, 0, 0)` } : {};
  }

  private changeScrollableButtonStatus() {
    this.isPrevDisabled = this.offsetLeft >= 0;
    this.isNextDisabled =
      Math.abs(this.offsetLeft) + this.tabBarContent.$el.clientWidth > this.navWrapper.$el.scrollWidth;
  }

  private calcScrollable() {
    this.isScrollable = this.tabBarContent.$el.clientWidth < this.navWrapper.$el.scrollWidth;
    this.changeScrollableButtonStatus();
  }

  private handleScrollPrev() {
    if (this.isPrevDisabled) {
      return;
    }

    this.offsetLeft += this.tabBarContent.$el.clientWidth;
    this.setTabNavsStyle();
    this.changeScrollableButtonStatus();
  }

  private handleScrollNext() {
    if (this.isNextDisabled) {
      return;
    }

    this.offsetLeft -= this.tabBarContent.$el.clientWidth;
    this.setTabNavsStyle();
    this.changeScrollableButtonStatus();
  }

  private handleTabAdd() {
    this.$emit('edit', this.navs.length, TabEditAction.Add);
    this.calcScrollable();
  }

  private handleTabRemove(index) {
    this.$emit('edit', index, TabEditAction.Remove);
    this.calcScrollable();
  }

  mounted() {
    this.calcScrollable();
    this.throttleResize = throttle(300, true, this.calcScrollable);

    window.addEventListener('resize', this.throttleResize as any);
  }

  destroyed() {
    window.removeEventListener('resize', this.throttleResize as any);
  }
}
</script>
