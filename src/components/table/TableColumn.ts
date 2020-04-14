import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TableColumn as ElTableColumn } from 'element-ui';
import { TableColumnType } from 'element-ui/types/table-column';
import { HorizontalAlignment } from '../../typing';
import { TableColumn, FixedPosition } from './utils';

type SequenceNumberRenderer = (index: number) => number | string;

@Component({
  components: {
    ElTableColumn,
  },
})
class SsTableColumn extends Vue implements TableColumn {
  @Prop({ type: String })
  public readonly label?: string;

  @Prop({ type: String, default: 'left' })
  public readonly align!: HorizontalAlignment;

  @Prop({ type: String })
  public readonly headerAlign?: HorizontalAlignment;

  @Prop({ type: [String, Number] })
  public readonly width?: string | number;

  @Prop({ type: [String, Number] })
  public readonly minWidth?: string | number;

  @Prop({ type: String })
  public readonly className?: string;

  @Prop({ type: [Boolean, String], default: false })
  public readonly fixed!: boolean | FixedPosition;

  @Prop({ type: String })
  public readonly dataKey?: string;

  @Prop({ type: String })
  public readonly type?: TableColumnType;

  @Prop({ type: Boolean })
  public readonly showOverflowTooltip?: boolean;

  @Prop({ type: [Number, Function] })
  public readonly renderSequenceNumber?: number | SequenceNumberRenderer;

  public render(h: CreateElement): VNode {
    const scopedSlots: any = {};

    ['default', 'header'].forEach((slotName: string) => {
      if (this.$scopedSlots[slotName]) {
        scopedSlots[slotName] = this.$scopedSlots[slotName];
      }
    });

    return h(
      'el-table-column',
      {
        props: {
          label: this.label,
          align: this.align,
          headerAlign: this.headerAlign,
          width: this.width,
          minWidth: this.minWidth,
          fixed: this.fixed,
          prop: this.dataKey,
          type: this.type,
          showOverflowTooltip: this.showOverflowTooltip,
          index: this.renderSequenceNumber,
          className: this.className,
        },
        scopedSlots,
      },
      this.$slots.default,
    );
  }
}

export { SsTableColumn };
