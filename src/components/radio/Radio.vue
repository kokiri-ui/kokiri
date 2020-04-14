<template>
  <el-radio :label="value" :value="value" :disabled="disabled" :name="name" @change="handleChange">
    <slot />
  </el-radio>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { Radio as ElRadio } from 'element-ui';
import { CheckableValue } from '../../typing';

@Component({
  components: {
    ElRadio,
  },
})
export default class SsRadio extends Vue {
  @Prop({ type: [String, Number, Boolean] })
  public readonly value?: CheckableValue;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: String })
  public readonly name?: string;

  @Emit('change')
  private handleChange(): void {}
}
</script>
