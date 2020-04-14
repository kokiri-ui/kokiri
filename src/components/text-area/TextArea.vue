<template>
  <adapter-input
    class="TextArea"
    type="textarea"
    :placeholder="placeholder"
    :value="value"
    :disabled="disabled"
    :clearable="clearable"
    :readonly="readonly"
    :label="label"
    :min-length="minLength"
    :max-length="maxLength"
    :rows="rows"
    :show-word-limit="showWordLimit"
    :resize="resize"
    :auto-size="autoSize"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown.native="handleKeyDown"
    @keyup.native="handleKeyUp"
    @click.native="handleClick"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator';
import { ResizeType } from '../../typing';
import AdapterInput from '../input/AdapterInput.vue';

@Component({
  components: {
    AdapterInput,
  },
})
export default class SsTextArea extends Vue {
  @Prop({ type: String, default: '' })
  readonly value!: string;

  @Prop({ type: String, default: '' })
  readonly placeholder!: string;

  @Prop({ type: String, default: '' })
  readonly label!: string;

  @Prop({ type: Number, default: 3 })
  readonly rows!: number;

  @Prop({ type: Number })
  readonly minLength?: number;

  @Prop({ type: Number })
  readonly maxLength?: number;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly clearable!: boolean;

  @Prop({ default: false })
  readonly readonly?: boolean;

  @Prop({ type: Boolean, default: false })
  readonly showWordLimit!: boolean;

  @Prop({ type: String, default: 'both' })
  readonly resize!: ResizeType;

  @Prop({ type: [Boolean, Object], default: false })
  readonly autoSize!: boolean | object;

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
