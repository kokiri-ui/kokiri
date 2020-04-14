<template>
  <e-chart
    :path-option="[
      ['dataset.source', dataset],
      ['legend.bottom', '0'],
      ['color', colors],
      ['xAxis.show', false],
      ['yAxis.show', false],
      ['series[0].type', 'pie'],
      ['series[0].avoidLabelOverlap', true],
      ['series[0].radius', '55%'],
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
export default class PieChart extends Vue {
  colors: string[] = ['#03a9f4', '#039be5', '#b3e5fc', '#03a9f4', '#0091ea'];

  @Prop({ default: [] })
  dataSource!: Array<any>;

  get dataset() {
    return this.dataSource;
  }
}
</script>

