<template>
  <el-cascader
    ref="cascader"
    :options="options"
    :props="resolveElCascaderProps()"
    :value="value"
    :placeholder="placeholder"
    :size="resolvedSize"
    :disabled="disabled"
    :clearable="clearable"
    :filterable="searchable"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
    @visible-change="handleVisibleChange"
  />
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator';
import { Cascader as ElCascader } from 'element-ui';

import { isFunction } from '../../helper/utils';
import { SizeControl } from '../../helper/mixins';

type ElCascaderProps = { [key: string]: any };

@Component({
  components: {
    ElCascader,
  },
})
export default class SsCascader extends SizeControl {
  @Prop({ type: Array, default: () => [] })
  public readonly options!: any[];

  @Prop()
  public readonly value!: any;

  @Prop({ type: String, default: '' })
  public readonly placeholder!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly clearable!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly searchable!: boolean;

  @Prop({ type: Function })
  public readonly loadData?: Function;

  @Ref()
  private readonly cascader!: any;

  @Watch('loadData', { immediate: true })
  private handleLoadDataChange(val: Function): void {
    this.isLazy = isFunction(val);
  }

  @Emit('focus')
  private handleFocus(): void {}

  @Emit('blur')
  private handleBlur(): void {}

  @Emit('change')
  private handleChange(): void {}

  @Emit('visible-change')
  private handleVisibleChange(): void {}

  private isLazy!: boolean;

  private resolveElCascaderProps(): ElCascaderProps {
    const props: ElCascaderProps = {};

    if (this.isLazy) {
      props.lazy = this.isLazy;
      props.lazyLoad = this.loadData;
    }

    return props;
  }

  // FIXME: 为了之前兼容外面使用 `<el-cascader>` 时的方式
  public getCheckedNodes() {
    return this.cascader.getCheckedNodes();
  }
}
</script>
