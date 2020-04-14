/**
 * ECharts Vue Wrapper
 */
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import _object from 'lodash/object';
import cloneDeep from 'lodash/cloneDeep';

const ECharts: any = (window as any).echarts || undefined;
if (ECharts === undefined) {
  console.error('ECharts is not defined');
}

/**
 * 自定义事件功能 暂时没用
 */
(function() {
  const throttle = function(type, name, obj) {
    obj = obj || window;
    let running = false;
    let func = function() {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  /* init - you can init any event */
  throttle('resize', 'optimizedResize', '');
})();

@Component
export default class BaseECharts extends Vue {
  @Prop({ default: 'auto' })
  width!: string;

  @Prop({ default: '400px' })
  height!: string;

  /**
   * 是否合并默认配置
   */
  @Prop({ default: true })
  merged!: boolean;

  /**
   * 自定义配置
   */
  @Prop({ default: () => [] })
  pathOption!: Array<Object>;

  @Prop({ default: () => {} })
  option!: object;

  // general config
  @Prop({ default: () => {} })
  textStyle!: object;

  @Prop({ default: () => {} })
  title!: object;

  @Prop({ default: () => [] })
  legend!: Array<object>;

  @Prop({ default: () => {} })
  tooltip!: object;

  @Prop({ default: () => [] })
  grid!: Array<object>;

  @Prop({ default: () => [] })
  xAxis!: object;

  @Prop({ default: () => [] })
  yAxis!: Array<object>;

  @Prop({ default: () => [] })
  series!: Array<object>;

  @Prop({ default: () => {} })
  axisPointer!: object;

  /**
   * option dataset
   */
  @Prop({ default: () => [] })
  dataset!: Array<object>;

  /**
   * echarts.option.color
   */
  @Prop({ default: () => [] })
  colors!: Array<any>;

  @Prop({ default: () => [] })
  backgroundColor!: Array<string>;

  @Prop({ default: () => [] })
  toolbox!: Array<object>;

  /**
   * resize delay
   */
  @Prop({ default: 450 })
  widthChangeDelay!: number;

  render(h) {
    const data = {
      staticClass: 'v-chart',
      style: this.canvasStyle,
      ref: 'canvas',
      on: this.$listeners,
    };
    return h('div', data);
  }

  chartInstance: any = {};
  clientWidth = null;
  allowedOptions = [
    'textStyle',
    'title',
    'legend',
    'xAxis',
    'yAxis',
    'series',
    'tooltip',
    'axisPointer',
    'grid',
    'dataset',
    'colors',
    'backgroundColor',
  ];
  _defaultOption = {
    tooltip: {
      show: true,
    },
    title: {
      show: true,
      textStyle: {
        color: 'rgba(0, 0, 0 , .87)',
        fontFamily: 'sans-serif',
      },
    },
    grid: {
      containLabel: true,
    },
    xAxis: {
      show: true,
      type: 'category',
      axisLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0 , .54)',
        },
      },
      axisTick: {
        show: true,
        alignWithLabel: true,
        lineStyle: {
          show: true,
          color: 'rgba(0, 0, 0 , .54)',
        },
      },
      axisLabel: {
        show: true,
      },
    },
    yAxis: {
      show: true,
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0 , .54)',
        },
      },
      axisLabel: {
        show: true,
        // color: 'rgba(0, 0, 0 , .54)'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          show: true,
          color: 'rgba(0, 0, 0 , .54)',
          type: 'dashed',
        },
      },
    },
    series: [
      {
        type: 'line',
      },
    ],
  };

  get canvasStyle() {
    return {
      width: this.width,
      height: this.height,
    };
  }

  @Watch('pathOption', { immediate: true, deep: true })
  async reloadChartInstance() {
    await this.$nextTick();
    this.init();
  }

  /**
   * 初始化图表
   */
  mounted() {}

  init() {
    if (this.pathOption) {
      this.pathOption.forEach(p => {
        _object.set(this.$data._defaultOption, p[0], p[1]);
      });
    }
    const option = cloneDeep(this.option);
    const defaultOption = cloneDeep(this.$data._defaultOption);
    this.chartInstance = ECharts.init(this.$refs.canvas, 'material');
    this.chartInstance.setOption(_object.merge(option, defaultOption));
    window.addEventListener('optimizedResize', e => {
      setTimeout(_ => {
        this.chartInstance.resize();
      }, this.widthChangeDelay);
    });
  }

  resize() {
    this.chartInstance.resize();
  }

  clean() {
    window.removeEventListener('resize', this.chartInstance.resize);
    this.chartInstance.clear();
  }

  beforeDestroy() {
    this.clean();
  }
}
