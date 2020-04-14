<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator';
import { Dialog as ElDialog } from 'element-ui';

import { LooseSize } from '../../typing';
import { isSpecificComponent } from '../../helper/utils';
import SsBox from '../box/Box.vue';

@Component({
  components: {
    ElDialog,
  },
})
export default class SsDialog extends Vue {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: Boolean, default: false })
  public readonly visible!: boolean;

  @Prop({ type: [String, Number], default: 880 })
  public readonly width!: LooseSize;

  @Prop({ type: Boolean, default: true })
  public readonly closable!: boolean;

  @Watch('width', { immediate: true })
  private handleWidthChange(val: LooseSize) {
    const width = Number(val);

    this.dialogWidth = isNaN(width) ? (val as string) : `${width}px`;
  }

  @Emit('open')
  private handleOpen(): void {}

  @Emit('close')
  private handleClose(): void {}

  private dialogWidth!: string;

  public render(h: CreateElement): VNode {
    const children: VNode[] = [];

    let header: VNode = null as any;
    let footer: VNode = null as any;

    (this.$slots.default || []).forEach(c => {
      if (isSpecificComponent(c, 'SsDialogHeader')) {
        header = c;
      } else if (isSpecificComponent(c, 'SsDialogFooter')) {
        footer = c;
      } else {
        children.push(c);
      }
    });

    if (header) {
      children.unshift(h(SsBox, { class: 'el-dialog__title', slot: 'title' }, [header]));
    }

    if (footer) {
      children.push(h(SsBox, { slot: 'footer' }, [footer]));
    }

    return h(
      ElDialog,
      {
        class: this.$style.Dialog,
        props: {
          customClass: this.$style['Dialog-content'],
          title: this.title,
          visible: this.visible,
          width: this.dialogWidth,
          showClose: this.closable,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          appendToBody: true,
        },
        on: {
          open: this.handleOpen,
          close: this.handleClose,
        },
      },
      children,
    );
  }
}
</script>
