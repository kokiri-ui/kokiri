import { throttle } from 'throttle-debounce';
import { CreateElement, VNode } from 'vue';
import { Component, Ref, Watch, Emit } from 'vue-property-decorator';

import { TabNavFlag } from 'petals-ui/dist/tab-bar';
import { getComponentName, TabBarStructuralComponent } from '@kokiri/core/dist/tab-bar';

import { isSpecificComponent } from '../../../helper/utils';
import { Icon } from '../../icon';
import TabNav from '../tab-nav/TabNav.vue';

@Component({
  name: getComponentName('tabBar'),
  components: { Icon, TabNav },
})
export default class TabBar extends TabBarStructuralComponent {
  @Ref()
  private readonly tabBarContent!: HTMLDivElement;

  @Ref()
  private readonly navWrapper!: HTMLDivElement;

  private activeIndex: number = 0;

  private scrollable: boolean = false;

  private prevDisabled: boolean = false;
  private nextDisabled: boolean = false;

  private offsetLeft: number = 0;

  private tabBarNavsStyle: Record<string, any> = {};

  private throttledCalc!: Function; // eslint-disable-line @typescript-eslint/ban-types

  private get extraEnabled(): boolean {
    return !!this.$slots.default;
  }

  private get computedClassNames(): string[] {
    const classNames = this.getComponentClassNames();

    if (this.scrollable) {
      classNames.push(this.getStateClassName('scrollable'));
    }

    return classNames;
  }

  private get computedPrevButtonClassNames(): string[] {
    const classNames = [
      this.getDescendantClassName('button'),
      this.getDescendantClassName('prev'),
      this.prevButtonClassName,
    ];

    if (this.prevDisabled) {
      classNames.push('is-disabled');
    }

    return classNames;
  }

  private get computedNextButtonClassNames(): string[] {
    const classNames = [
      this.getDescendantClassName('button'),
      this.getDescendantClassName('next'),
      this.nextButtonClassName,
    ];

    if (this.nextDisabled) {
      classNames.push('is-disabled');
    }

    return classNames;
  }

  private get computedMainClassNames(): string[] {
    return [this.getDescendantClassName('main'), this.mainClassName];
  }

  private get computedExtraClassNames(): string[] {
    return [this.getDescendantClassName('extra'), this.extraClassName];
  }

  private get computedContentClassNames(): string[] {
    return [this.getDescendantClassName('content'), this.contentClassName];
  }

  private get computedNavsClassNames(): string[] {
    return [this.getDescendantClassName('navs'), this.navsClassName];
  }

  private get computedNavClassNames(): string[] {
    return [this.navClassName];
  }

  private updateActiveIndex(flag: TabNavFlag): void {
    const activeIndex: number = Number(flag);

    this.activeIndex = isNaN(activeIndex) ? 0 : activeIndex;
  }

  @Watch('activeFlag', { immediate: true })
  private handleActiveFlagChange(flag: TabNavFlag) {
    this.updateActiveIndex(flag);
  }

  @Emit('change')
  private handleTabNavChange(flag: TabNavFlag): void {
    this.updateActiveIndex(flag);
  }

  private changeScrollableButtonStatus() {
    this.prevDisabled = this.offsetLeft >= 0;
    this.nextDisabled =
      Math.abs(this.offsetLeft) + this.tabBarContent.clientWidth > this.navWrapper.scrollWidth;
  }

  private calcScrollable() {
    this.scrollable = this.tabBarContent.clientWidth < this.navWrapper.scrollWidth;

    this.changeScrollableButtonStatus();
  }

  private setTabNavsStyle() {
    this.tabBarNavsStyle =
      this.offsetLeft < 0 ? { transform: `translate3d(${this.offsetLeft}px, 0, 0)` } : {};
  }

  private handleScrollPrev() {
    if (this.prevDisabled) {
      return;
    }

    this.offsetLeft += this.tabBarContent.clientWidth;
    this.setTabNavsStyle();
    this.changeScrollableButtonStatus();
  }

  private handleScrollNext() {
    if (this.nextDisabled) {
      return;
    }

    this.offsetLeft -= this.tabBarContent.clientWidth;
    this.setTabNavsStyle();
    this.changeScrollableButtonStatus();
  }

  private renderNavs(h: CreateElement): VNode[] {
    let navs = this.$slots.default
      ? this.$slots.default.filter(vn => isSpecificComponent(vn, getComponentName('tabNav')))
      : [];

    if (navs.length === 0) {
      navs = this.navs.map((nav, idx) =>
        h(
          TabNav,
          {
            class: this.computedNavClassNames,
            props: {
              flag: idx,
              active: idx === this.activeIndex,
              disabled: nav.disabled,
              activeClassName: this.navActiveClassName,
              disabledClassName: this.navDisabledClassName,
            },
            on: { change: this.handleTabNavChange },
          },
          nav.label,
        ),
      );
    }

    return navs;
  }

  private renderScrollButtons(h: CreateElement): VNode[] {
    return this.scrollable
      ? [
          h(
            'div',
            {
              class: this.computedPrevButtonClassNames,
              on: {
                click: evt => {
                  this.handleScrollPrev();
                  evt.stopPropagation();
                },
              },
            },
            [h(Icon, { props: { refs: this.prevButtonIcon } })],
          ),
          h(
            'div',
            {
              class: this.computedNextButtonClassNames,
              on: {
                click: evt => {
                  this.handleScrollNext();
                  evt.stopPropagation();
                },
              },
            },
            [h(Icon, { props: { refs: this.nextButtonIcon } })],
          ),
        ]
      : [];
  }

  private render(h: CreateElement): VNode {
    const extraNode = h(
      'div',
      { class: this.computedExtraClassNames },
      (this.$slots.default || []).filter(
        vn => !isSpecificComponent(vn, getComponentName('tabNav')),
      ),
    );
    const navs = this.renderNavs(h);

    if (this.extraEnabled && !this.scrollable) {
      navs.push(extraNode);
    }

    const contentNodes: VNode[] = [
      h('div', { class: this.computedMainClassNames }, [
        ...this.renderScrollButtons(h),
        h('div', { class: this.computedContentClassNames, ref: 'tabBarContent' }, [
          h(
            'div',
            {
              class: this.computedNavsClassNames,
              style: this.tabBarNavsStyle,
              ref: 'navWrapper',
            },
            navs,
          ),
        ]),
      ]),
    ];

    if (this.extraEnabled && this.scrollable) {
      contentNodes.push(extraNode);
    }

    return h('div', { class: this.computedClassNames }, contentNodes);
  }

  public mounted(): void {
    this.throttledCalc = throttle(300, true, this.calcScrollable);

    this.$nextTick(() => this.calcScrollable());

    window.addEventListener('resize', this.throttledCalc as any);
  }

  public destroyed(): void {
    window.removeEventListener('resize', this.throttledCalc as any);
  }
}
