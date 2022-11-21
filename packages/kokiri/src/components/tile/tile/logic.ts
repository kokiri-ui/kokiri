import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { LooseSize } from 'petals-ui/dist/basic';
import { getComponentName, TileStructuralComponent } from '@kokiri/core/dist/tile';

import { Box } from '../../box';
import TileCell from '../tile-cell/TileCell.vue';

function resolveNumeric(num: LooseSize): number {
  if (typeof num === 'number') {
    return num;
  }

  const resolved: number = parseFloat(num);

  return isNaN(resolved) ? 0 : resolved;
}

@Component({
  name: getComponentName('tile'),
  components: { Box, TileCell },
})
export default class Tile extends TileStructuralComponent {
  private tileWidth: number = 0;
  private tileHeight: number = 0;

  private calcSize(): void {
    const {
      width,
      height,
      $slots: { default: vNodes },
    } = this;

    let tileWidth: number = 0;
    let tileHeight: number = 0;

    const resolvedWidth: number = resolveNumeric(width);
    const resolvedHeight: number = resolveNumeric(height);

    if (resolvedWidth > 0) {
      tileWidth = resolvedWidth;
    }

    if (resolvedHeight > 0) {
      tileHeight = resolvedHeight;
    }

    if (vNodes && (tileWidth === 0 || tileHeight === 0)) {
      const widthList: number[] = [];
      const heightList: number[] = [];

      vNodes.forEach((vn: any) => {
        const {
          elm: { clientWidth = 0, clientHeight = 0 },
        } = vn;

        widthList.push(clientWidth);
        heightList.push(clientHeight);
      });

      if (tileWidth === 0 && widthList.length > 0) {
        tileWidth = Math.max(...widthList);
      }

      if (tileHeight === 0 && heightList.length > 0) {
        tileHeight = Math.max(...heightList);
      }
    }

    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
  }

  private render(createVNodes: CreateElement): VNode {
    const { direction, tileWidth, tileHeight } = this;
    const vNodes = this.$slots.default || [];
    const isHorizontal = direction !== 'vertical';

    let containerStyle: any = {};

    if (tileWidth > 0 && tileHeight > 0) {
      const countOfRow: number = Math.ceil(Math.sqrt(vNodes.length));
      const countOfCol: number = Math.ceil(vNodes.length / countOfRow);

      if (isHorizontal) {
        containerStyle = {
          width: `${tileWidth * countOfRow}px`,
          height: `${tileHeight * countOfCol}px`,
        };
      } else {
        containerStyle = {
          width: `${tileWidth * countOfCol}px`,
          height: `${tileHeight * countOfRow}px`,
        };
      }
    }

    return createVNodes(
      'box',
      {
        class: [
          this.$style.Tile,
          isHorizontal ? this.$style['is-horizontal'] : this.$style['is-vertical'],
        ],
        style: containerStyle,
      },
      vNodes.map(vn =>
        createVNodes('TileCell', { props: { width: this.tileWidth, height: this.tileHeight } }, [
          vn,
        ]),
      ),
    );
  }

  public created(): void {
    this.$on('tile-cell-update', this.calcSize.bind(this));
  }

  public mounted(): void {
    this.calcSize();
  }

  public update(): void {
    this.calcSize();
  }
}
