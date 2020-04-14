<template>
  <el-input
    :placeholder="placeholder"
    :value="currentValue"
    @input="handleInput"
    :disabled="disabled"
    :clearable="clearable"
    :size="size"
    :rules="rules"
    :suffix-icon="suffixIcon"
    :prefix-icon="prefixIcon"
    :show-password="password"
  >
    <template :slot="orientation">
      <slot name="action"></slot>
    </template>
  </el-input>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator';
import { Input as ElInput } from 'element-ui';

@Component({
  components: {
    ElInput,
  },
})
export default class LegacyInput extends Vue {
  @Prop({ default: '' })
  value!: string;

  @Prop({ default: '请输入' })
  placeholder?: string;

  @Prop()
  readonly suffixIcon!: string;

  @Prop()
  readonly prefixIcon!: string;

  @Prop()
  readonly orientation!: string;

  @Prop()
  readonly disabled!: boolean;

  @Prop()
  readonly clearable!: boolean;

  @Prop({ type: String, default: 'medium' })
  readonly size!: string;

  @Prop()
  readonly password!: boolean;

  @Prop()
  readonly rules!: Array<any>;

  get currentValue() {
    return this.value;
  }

  @Emit('input')
  handleInput(val) {
    return val;
  }
}
</script>
