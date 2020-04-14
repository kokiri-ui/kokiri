<template>
  <e-chart
    :path-option="[
      ['dataset.source', dataset],
      ['color', colors],
      ['legend.show', true],
      ['xAxis', CxAxis],
      ['grid.left', '2%'],
      ['grid.bottom', '5%'],
      ['grid.right', '3%'],
      ['series', dataset],
    ]"
    height="400px"
    width="100%"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import EChart from '../EChart';

@Component({
  components: {
    EChart,
  },
})
export default class LineChart extends Vue {
  colors: string[] = ['#03a9f4', '#039be5', '#b3e5fc', '#03a9f4', '#0091ea'];

  @Prop({ default: () => [] })
  dataSource!: Array<any>;

  @Prop({ default: () => [] })
  xAxis!: Array<any>;

  get CxAxis() {
    return this.xAxis;
  }

  get dataset() {
    return this.dataSource;
  }
}
</script>

