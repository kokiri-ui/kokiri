<template>
  <el-input-number
    placeholder="请输入内容"
    :value="currentValue"
    @change="handleInput"
    :disabled="disabled"
    controls-position="right"
    :min="min"
    :max="max"
    :label="label"
    :size="resolvedSize"
  >
    <template slot="prepend">
      <slot name="action" />
    </template>
  </el-input-number>
</template>

<script lang="ts">
import { Component, Watch, Emit, Prop } from 'vue-property-decorator';
import { InputNumber as ElInputNumber } from 'element-ui';
import { SizeControl } from '../../helper/mixins';

@Component({
  components: {
    ElInputNumber,
  },
})
export default class NumberButton extends SizeControl {
  @Prop({ default: () => '' })
  value!: string;

  @Prop()
  readonly label!: string;

  @Prop()
  readonly min!: string;

  @Prop()
  readonly max!: string;

  @Prop()
  readonly disabled!: boolean;
  private currentValue: string = '';

  handleInput(val) {
    this.currentValue = val;
    this.$emit('input', val);
  }
  created() {
    this.currentValue = this.value;
  }
}
</script>
