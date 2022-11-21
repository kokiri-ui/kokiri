import { ColumnProps } from 'petals-ui/dist/data-table';
import Vue from 'vue';

type TableColumn = Required<ColumnProps>;

function resolveColumn(col: Record<string, any>): TableColumn {
  return {
    title: col.label,
    key: col.prop,
    type: col.type,
    width: col.width,
    minWidth: col.minWidth,
    maxWidth: col.maxWidth,
    align: col.align,
    fixed: col.fixed,
    ellipsis: col.showOverflowTooltip,
    resizable: col.resizable,
    render: col.render,
  };
}

export default Vue.extend({
  name: 'Expand',
  functional: true,
  props: {
    rowIndex: { type: Number },
    row: { type: Object },
    column: { type: Object },
    renderContent: { type: Function },
  },
  render: (_, { props, parent }) =>
    props.renderContent(parent.$parent.$createElement, {
      row: props.row,
      column: resolveColumn(props.column),
      index: props.rowIndex,
    }),
});
