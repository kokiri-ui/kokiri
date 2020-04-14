<template>
  <el-rate v-model="resolvedValue" :allow-half="allowHalf" :disabled="disabled" @change="handleChange" />
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import { Rate as ElRate } from 'element-ui';

@Component({
  components: {
    ElRate,
  },
})
export default class SsRate extends Vue {
  @Prop({ type: Number })
  private readonly value?: number;

  @Prop({ type: Boolean })
  private readonly allowHalf?: boolean;

  @Prop({ type: Boolean })
  private readonly disabled?: boolean;

  private resolvedValue: number = null as any;

  @Watch('value', { immediate: true })
  private handleValuePropChange(): void {
    this.resolvedValue = this.value || 0;
  }

  @Emit('change')
  private handleChange(): void {}
}
</script>
