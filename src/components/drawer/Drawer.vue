<style lang="scss" module>
@include component-rules($__drawer-component-name) {
  position: absolute;
  z-index: 1000;
  width: 100%;
  overflow: hidden;
  pointer-events: none;

  &-wrapper {
    position: fixed;
    z-index: 100;
    background-color: #fff;
    transition: transform $__drawer-transition-speed cubic-bezier(0.7, 0.3, 0.1, 1),
      box-shadow $__drawer-transition-speed cubic-bezier(0.7, 0.3, 0.1, 1);
    pointer-events: visible;

    &.is-visible {
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    }

    // size
    &--right,
    &--left {
      height: 100%;
      min-width: $__drawer-min-size;
    }

    &--top,
    &--bottom {
      min-height: $__drawer-min-size;
      width: 100%;
    }

    // position
    &--right {
      top: 0;
      right: 0;
    }

    &--left,
    &--top {
      top: 0;
      left: 0;
    }

    &--bottom {
      bottom: 0;
      left: 0;
    }

    // transform
    &--right {
      transform: translateX(100%);
      &.is-visible {
        transform: translateX(0);
      }
    }

    &--left {
      transform: translateX(-100%);
      &.is-visible {
        transform: translateX(0);
      }
    }

    &--top {
      transform: translateY(-100%);
      &.is-visible {
        transform: translateY(0);
      }
    }

    &--bottom {
      transform: translateY(100%);
      &.is-visible {
        transform: translateY(0);
      }
    }
  }

  &-title {
    padding: 0 24px;
    font: {
      size: 16px;
      weight: bold;
    }
    color: #2c405a;
    letter-spacing: 0.57px;
    background-color: #fff;

    &-text {
      padding: 15px 0;
      border-bottom: 1px solid #d9d9d9;
    }
  }

  &-body {
    height: calc(100% - 55px);
    overflow-y: auto;
  }

  &-attachment {
    position: absolute;
    top: 0;
    left: 0;
  }

  &-closeButton {
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px 20px;
    font-size: 18px;
    cursor: pointer;
  }

  &-mask {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);

    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity $__drawer-transition-speed;
    }
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
  }
}
</style>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

import { PlacementType, ComponentStyle } from '../../typing';
import Box from '../box/Box.vue';
import Icon from '../icon/Icon.vue';
import SsText from '../text/Text.vue';
import DrawerAttachment from './DrawerAttachment.vue';

@Component({
  components: {
    Box,
    SsText,
    Icon,
  },
})
export default class SsDrawer extends Vue {
  /**
   * 标题
   */
  @Prop({ type: String })
  public readonly title?: string;

  /**
   * 出现位置
   */
  @Prop({ type: String, default: 'right' })
  public readonly placement!: PlacementType;

  /**
   * 是否可见
   */
  @Prop({ type: Boolean, default: false })
  public readonly visible!: boolean;

  /**
   * 是否显示遮罩
   */
  @Prop({ type: Boolean, default: true })
  public readonly mask!: boolean;

  /**
   * 是否显示右上角的关闭按钮
   */
  @Prop({ type: Boolean, default: true })
  public readonly closable!: boolean;

  /**
   * 点击蒙层是否允许关闭
   */
  @Prop({ type: Boolean, default: true })
  public readonly maskClosable!: boolean;

  @Prop({ type: Boolean, default: true })
  public readonly appendToBody!: boolean;

  @Prop({ type: [String, Object], default: '' })
  public readonly wrapperClass!: string | object;

  @Prop({ type: Boolean, default: false })
  public readonly loading!: boolean;

  @Prop({ type: Object })
  public readonly headerStyle?: ComponentStyle;

  @Prop({ type: Object })
  public readonly bodyStyle?: ComponentStyle;

  @Watch('visible')
  private onVisibleChange(val: boolean): void {
    if (!this.inited && val) {
      this.inited = true;
      // Show drawer when drawer body mounted.
      this.$nextTick(() => (this.showDrawer = true));
    } else {
      this.showDrawer = val;
    }
  }

  @Emit('change')
  private handleVisibleChange(visible: boolean): void {}

  private inited: boolean = false;
  private showDrawer: boolean = false;

  private handleClickMask(e): void {
    e.stopPropagation();
    if (!this.maskClosable) {
      return;
    }

    this.handleVisibleChange(false);
  }

  // TODO: 未来要是引入tsx支持，可改为tsx
  // 用 render function 是为了支持 DrawerAttachment 作为一个单独组件，而不使用具名 slot
  public render(h: CreateElement): VNode {
    const {
      mask,
      showDrawer,
      placement,
      wrapperClass,
      title,
      closable,
      inited,
      handleClickMask,
      handleVisibleChange,
      $slots: { default: defaultVNodes = [] },
    } = this;

    const attachmentVNodes: VNode[] = [];
    const otherVNodes: VNode[] = [];

    defaultVNodes.forEach(vnode => {
      const compOptions = vnode.componentOptions;
      if (compOptions && compOptions.Ctor === DrawerAttachment) {
        attachmentVNodes.push(vnode);
      } else {
        otherVNodes.push(vnode);
      }
    });

    const maskNode =
      mask &&
      showDrawer &&
      h('box', {
        class: this.$style['Drawer-mask'],
        on: {
          click: this.handleClickMask,
        },
      });
    const headerNode =
      (title || closable) &&
      h(
        'box',
        {
          class: this.$style['Drawer-title'],
          style: this.headerStyle,
        },
        [
          title &&
            h(
              'box',
              {
                class: this.$style['Drawer-title-text'],
              },
              [h('ss-text', [title])],
            ),
          closable &&
            h(
              'box',
              {
                class: this.$style['Drawer-closeButton'],
                on: {
                  click: handleVisibleChange.bind(this, false),
                },
              },
              [
                h('icon', {
                  props: {
                    provider: 'el',
                    type: 'close',
                  },
                }),
              ],
            ),
        ],
      );

    return h(
      'box',
      {
        class: this.$style.Drawer,
      },
      [
        h('transition', { props: { name: 'fade' } }, [maskNode]),
        h(
          'box',
          {
            class: [
              this.$style['Drawer-wrapper'],
              this.$style[`Drawer-wrapper--${placement}`],
              showDrawer ? this.$style['is-visible'] : '',
              wrapperClass,
            ],
          },
          [
            h(
              'box',
              {
                class: this.$style['Drawer-attachment'],
              },
              attachmentVNodes,
            ),
            headerNode,
            inited &&
              h(
                'box',
                {
                  class: this.$style['Drawer-body'],
                  style: this.bodyStyle,
                },
                otherVNodes,
              ),
          ],
        ),
      ],
    );
  }

  public mounted(): void {
    if (this.appendToBody) {
      document.body.appendChild(this.$el);
    }
  }

  public destroyed(): void {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>
