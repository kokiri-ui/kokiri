<style lang="scss" module>
.Tile {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: flex-start;

  &.is-horizontal {
    flex-direction: row;
  }

  &.is-vertical {
    flex-direction: column;
  }
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Box from '../box/Box.vue';
import TileCell from './TileCell.vue';

@Component({
  components: {
    Box,
    TileCell,
  },
})
export default class Tile extends Vue {
  /**
   * 排列方向
   *
   * 可选值为 `'horizontal'` 和 `'vertical'`，默认为 `'horizontal'`
   */
  @Prop(String)
  direction?: string;

  /**
   * 每个单元格的宽度
   *
   * 为 `0` 时自动获取子项中最宽的作为基准
   */
  @Prop({ type: Number, default: 0 })
  width!: number;

  /**
   * 每个单元格的高度
   *
   * 为 `0` 时自动获取子项中最高的作为基准
   */
  @Prop({ type: Number, default: 0 })
  height!: number;

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

    if (width > 0) {
      tileWidth = width;
    }

    if (height > 0) {
      tileHeight = height;
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

  render(createVNodes) {
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
        class: [this.$style.Tile, isHorizontal ? this.$style['is-horizontal'] : this.$style['is-vertical']],
        style: containerStyle,
      },
      vNodes.map(vn => createVNodes('TileCell', { props: { width: this.tileWidth, height: this.tileHeight } }, [vn])),
    );
  }

  created() {
    this.$on('tile-cell-update', this.calcSize.bind(this));
  }

  mounted() {
    this.calcSize();
  }

  update() {
    this.calcSize();
  }
}
</script>
