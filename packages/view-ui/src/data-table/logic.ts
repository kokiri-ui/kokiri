import { isNumeric } from '@ntks/toolbox';
import { Component } from 'vue-property-decorator';

import { DataTableStructuralComponent } from '@kokiri/core/dist/data-table';
import { TableColumn, Table as IvuTable, Page as IvuPagination } from 'view-design';

import { getComponentName } from '../basic';
import { Wait } from '../wait';

function resolveWidth(width: number | string | undefined): number {
  return isNumeric(width) ? Number(width) : 0;
}

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('dataTable'),
  components: { IvuTable, IvuPagination, Wait },
})
export default class DataTable extends DataTableStructuralComponent {
  private get resolvedColumns(): TableColumn[] {
    return this.columns.map(col => {
      const resolved = {
        title: col.title,
        key: col.key,
        type: col.type,
        align: col.align,
        fixed: col.fixed,
        ellipsis: col.ellipsis,
        tooltip: col.ellipsis,
        resizable: col.resizable,
        render: col.render,
      };

      ['width', 'minWidth', 'maxWidth'].forEach(k => {
        if (col[k]) {
          resolved[k] = resolveWidth(col[k]);
        }
      });

      return resolved;
    });
  }
}
