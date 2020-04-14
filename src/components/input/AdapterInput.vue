<template>
  <el-input
    :value="value"
    :type="type"
    :placeholder="placeholder"
    :label="label"
    :minlength="minLength"
    :maxlength="maxLength"
    :min="min"
    :max="max"
    :rows="rows"
    :disabled="disabled"
    :clearable="clearable"
    :readonly="readonly"
    :show-password="showPassword"
    :show-word-limit="showWordLimit"
    :resize="resize"
    :size="size"
    :autosize="autoSize"
    :prefix-icon="prefixIcon"
    :suffix-icon="suffixIcon"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown.native="handleKeyDown"
    @keyup.native="handleKeyUp"
    @click.native="handleClick"
  >
    <slot name="prepend" slot="prepend" />
    <slot name="append" slot="append" />
    <slot name="prefix" slot="prefix" />
    <slot name="suffix" slot="suffix" />
  </el-input>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import { Input as ElInput } from 'element-ui';
import { ResizeType } from '../../typing';

@Component({
  components: {
    ElInput,
  },
})
export default class AdapterInput extends Vue {
  @Prop()
  readonly value?: string | number;

  @Prop({ type: String, default: 'text' })
  readonly type!: string;

  @Prop({ type: String })
  readonly placeholder?: string;

  @Prop({ type: String })
  readonly label?: string;

  @Prop({ type: Number })
  readonly minLength?: number;

  @Prop({ type: Number })
  readonly maxLength?: number;

  @Prop({ type: Number })
  readonly min?: number;

  @Prop({ type: Number })
  readonly max?: number;

  @Prop()
  readonly rows?: number;

  @Prop({ type: [Boolean, Object] })
  readonly autoSize?: boolean | object;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly clearable!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly readonly!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly showPassword!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly showWordLimit!: boolean;

  @Prop()
  readonly resize?: ResizeType;

  @Prop({ type: String })
  readonly prefixIcon?: string;

  @Prop({ type: String })
  readonly suffixIcon?: string;

  @Prop({ type: String })
  readonly size?: string;

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
