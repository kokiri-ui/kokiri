<template>
  <el-radio-group v-model="internalValue" :disabled="disabled" @change="handleChange">
    <slot />
  </el-radio-group>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator';
import { RadioGroup as ElRadioGroup } from 'element-ui';
import { CheckableValue } from '../../typing';

@Component({
  components: {
    ElRadioGroup,
  },
})
export default class SsRadioGroup extends Vue {
  @Prop({ type: [String, Number, Boolean] })
  public readonly value?: CheckableValue;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  private internalValue: CheckableValue = null as any;

  @Watch('value', { immediate: true })
  private handleValueChange(): void {
    this.internalValue = this.value!;
  }

  @Emit('change')
  private handleChange(): void {}
}
</script>
