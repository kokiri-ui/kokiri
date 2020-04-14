<template>
  <el-date-picker
    :value="currentValue"
    @input="handleInput"
    :disabled="disabled"
    :type="type"
    :picker-options="pickerOptions"
    :format="format"
    :size="resolvedSize"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { Component, Watch, Emit, Prop } from 'vue-property-decorator';
import { DatePicker as ElDatePicker } from 'element-ui';
import { SizeControl } from '../../helper/mixins';

@Component({
  components: {
    ElDatePicker,
  },
})
export default class SsDatePicker extends SizeControl {
  @Prop({ default: () => '' })
  value!: string;

  @Prop({ default: () => 'yyyy年MM月dd日' })
  format!: string;

  @Prop()
  readonly type!: string;

  @Prop()
  readonly pickerOptions!: {};

  @Prop({ default: '选择日期' })
  readonly placeholder?: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  private currentValue: string = '';

  handleInput(val) {
    this.currentValue = val;
    this.$emit('input', val);
  }

  @Watch('value')
  onValueChange() {
    this.currentValue = this.value;
  }

  created() {
    this.currentValue = this.value;
  }
}
</script>
