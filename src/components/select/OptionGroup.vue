<template>
  <el-option-group class="OptionGroup" :label="label" :disabled="disabled">
    <slot />
  </el-option-group>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { OptionGroup as ElOptionGroup } from 'element-ui';

@Component({
  components: {
    ElOptionGroup,
  },
})
export default class SsOptionGroup extends Vue {
  /**
   * 组名
   */
  @Prop()
  readonly label?: string;

  /**
   * 是否将该分组下所有选项置为禁用
   */
  @Prop({ default: false })
  readonly disabled?: boolean;
}
</script>
