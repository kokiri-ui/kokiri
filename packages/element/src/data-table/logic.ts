import { Component } from 'vue-property-decorator';

import { DataTableStructuralComponent } from '@kokiri/core/dist/data-table';
import ElTable from 'element-ui/lib/table';
import ElTableColumn from 'element-ui/lib/table-column';
import ElPagination from 'element-ui/lib/pagination';

import { getComponentName } from '../basic';
import Expand from './Expand';

@Component({
  name: getComponentName('dataTable'),
  components: {
    ElTable,
    ElTableColumn,
    ElPagination,
    Expand,
  },
})
export default class DataTable extends DataTableStructuralComponent {
  private get resolvedColumns(): any[] {
    return this.columns.map(col => {
      const resolved = {
        label: col.title,
        prop: col.key,
        type: col.type,
        align: col.align,
        fixed: col.fixed,
        showOverflowTooltip: col.ellipsis,
        resizable: col.resizable,
        render: col.render,
      };

      ['width', 'minWidth', 'maxWidth'].forEach(k => {
        if (col[k]) {
          resolved[k] = `${col[k]}`;
        }
      });

      return resolved;
    });
  }
  // private get filteredColumns(): TableColumn[] {
  //   return this.columns.filter(col => !col.isValid || col.isValid());
  // }
}
