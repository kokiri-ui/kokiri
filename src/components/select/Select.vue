<template>
  <el-select
    :class="$style.Select"
    :popper-class="$style['Select-dropdown']"
    :value="currentValue"
    :placeholder="placeholder"
    :multiple="multiple"
    :disabled="disabled"
    :clearable="clearable"
    :filterable="searchable"
    :loading="loading"
    :remote="remoteEnabled"
    :remote-method="loadData"
    :size="resolvedSize"
    :allow-create="allowCreate"
    @change="handleChange"
    @remove-tag="handleDeselect"
    @visible-change="handleVisibleChange"
  >
    <slot />
    <slot name="empty" slot="empty" />
  </el-select>
</template>

<style lang="scss" module>
@include component-rules($__select-component-name) {
  &-dropdown {
    margin-top: 8px !important;

    :global {
      .popper__arrow {
        display: none;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Watch, Emit } from 'vue-property-decorator';
import { Select as ElSelect } from 'element-ui';

import { isFunction } from '../../helper/utils';
import { SizeControl } from '../../helper/mixins';

@Component({
  components: {
    ElSelect,
  },
})
export default class SsSelect extends SizeControl {
  @Prop({ type: [String, Number, Array] })
  public readonly value?: string | string[] | number | number[];

  @Prop({ type: String })
  public readonly placeholder?: string;

  @Prop({ type: Boolean, default: false })
  public readonly multiple!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly clearable!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly searchable!: boolean;

  @Prop({ type: Boolean })
  public readonly loading?: boolean;

  @Prop({ type: Function })
  public readonly loadData?: Function;

  @Prop({ default: false })
  public readonly allowCreate?: boolean;

  @Watch('value', { immediate: true })
  handleValueChange(val) {
    this.currentValue = val;
  }

  @Watch('loadData', { immediate: true })
  private handleLoadDataChange(val: Function): void {
    this.remoteEnabled = isFunction(val);
  }

  @Emit('change')
  private handleChange(): void {}

  @Emit('deselect')
  private handleDeselect(): void {}

  @Emit('visible-change')
  private handleVisibleChange(): void {}

  private currentValue!: string | number;

  private remoteEnabled!: boolean;
}
</script>
