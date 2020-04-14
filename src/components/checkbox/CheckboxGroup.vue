<template>
  <el-checkbox-group :value="value" :disabled="disabled" :min="min" :max="max" @change="handleChange">
    <slot />
  </el-checkbox-group>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { CheckboxGroup as ElCheckboxGroup } from 'element-ui';
import { CheckableValue } from '../../typing';

@Component({
  components: {
    ElCheckboxGroup,
  },
})
export default class SsCheckboxGroup extends Vue {
  @Prop({ type: Array })
  public readonly value?: CheckableValue[];

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Number })
  public readonly min?: number;

  @Prop({ type: Number })
  public readonly max?: number;

  @Emit('change')
  private handleChange(): void {}
}
</script>
