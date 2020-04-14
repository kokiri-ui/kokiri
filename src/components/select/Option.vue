<template>
  <el-option class="Option" :label="label" :value="value" :disabled="disabled">
    <slot />
  </el-option>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Option as ElOption } from 'element-ui';

@Component({
  components: {
    ElOption,
  },
})
export default class SsOption extends Vue {
  @Prop({ type: String })
  public readonly label?: string;

  @Prop({ type: [String, Number, Boolean] })
  public readonly value?: string | number | boolean;

  @Prop({ type: Boolean, default: false })
  public readonly disabled?: boolean;
}
</script>
