<template>
  <el-checkbox
    v-model="checkboxValue"
    :checked="checked"
    :indeterminate="indeterminate"
    :disabled="disabled"
    :label="label"
    :name="name"
    @change="handleChange"
  >
    <slot />
  </el-checkbox>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator';
import { Checkbox as ElCheckbox } from 'element-ui';
import { CheckableValue } from '../../typing';

@Component({
  components: {
    ElCheckbox,
  },
})
export default class SsCheckbox extends Vue {
  @Prop({ type: [String, Number, Boolean] })
  public readonly value?: CheckableValue;

  @Prop({ type: Boolean, default: false })
  public readonly checked!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly indeterminate!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: [String, Number, Boolean] })
  public readonly label?: CheckableValue;

  @Prop({ type: String })
  public readonly name?: string;

  @Watch('value', { immediate: true })
  private handleValuePropChange(val: CheckableValue): void {
    this.checkboxValue = val;
  }

  @Emit('change')
  private handleChange(val: CheckableValue): void {
    this.checkboxValue = val;
  }

  private checkboxValue: CheckableValue = false;
}
</script>
