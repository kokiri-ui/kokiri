import { Component } from 'vue-property-decorator';

import { getComponentName, TileCellStructuralComponent } from '@kokiri/core/dist/tile';

import { Box } from '../../box';

@Component({
  name: getComponentName('tileCell'),
  components: { Box },
})
export default class TileCell extends TileCellStructuralComponent {
  private get computedStyle(): any {
    const { width, height } = this;

    if (width > 0 && height > 0) {
      return {
        width: `${width}px`,
        height: `${height}px`,
      };
    }

    return {};
  }

  public updated(): void {
    this.$parent.$emit('tile-cell-update');
  }
}
