<template>
  <adapter-input
    class="Input"
    :value="value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :clearable="clearable"
    :readonly="readonly"
    :min-length="minLength"
    :max-length="maxLength"
    :min="min"
    :max="max"
    :show-password="showPassword"
    :prefix-icon="prefixIcon"
    :suffix-icon="suffixIcon"
    :size="resolvedSize"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    @click="handleClick"
    @key-down="handleKeyDown"
    @key-up="handleKeyUp"
  >
    <slot name="prepend" slot="prepend" />
    <slot name="append" slot="append" />
    <slot name="prefix" slot="prefix" />
    <slot name="suffix" slot="suffix" />
  </adapter-input>
</template>

<script lang="ts">
import { Component, Prop, Emit } from 'vue-property-decorator';
import { SizeControl } from '../../helper/mixins';
import { AvailableInputType } from './utils';
import AdapterInput from './AdapterInput.vue';

@Component({
  components: {
    AdapterInput,
  },
})
export default class SsInput extends SizeControl {
  @Prop()
  readonly value?: string | number | boolean;

  @Prop({ default: AvailableInputType.Text })
  readonly type?: AvailableInputType;

  @Prop()
  readonly placeholder?: string;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly clearable!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly readonly!: boolean;

  @Prop({ type: Number })
  readonly minLength?: number;

  @Prop({ type: Number })
  readonly maxLength?: number;

  @Prop({ type: Number })
  readonly min?: number;

  @Prop({ type: Number })
  readonly max?: number;

  @Prop({ type: Boolean, default: false })
  readonly showPassword!: boolean;

  @Prop({ type: String })
  readonly prefixIcon?: string;

  @Prop({ type: String })
  readonly suffixIcon?: string;

  @Emit('input')
  private handleInput(val) {}

  @Emit('change')
  private handleChange(val) {}

  @Emit('blur')
  private handleBlur(evt) {}

  @Emit('focus')
  private handleFocus(evt) {}

  @Emit('key-up')
  private handleKeyUp(evt) {}

  @Emit('key-down')
  private handleKeyDown(evt) {}

  @Emit('click')
  private handleClick(evt) {}
}
</script>
