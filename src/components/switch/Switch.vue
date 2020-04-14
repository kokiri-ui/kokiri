<template>
  <el-switch :value="isChecked" :disabled="disabled" @change="handleChange" />
</template>

<script lang="ts">
import { Vue, Component, Watch, Emit, Prop } from 'vue-property-decorator';
import { Switch as ElSwitch } from 'element-ui';

@Component({
  components: {
    ElSwitch,
  },
})
export default class SsSwitch extends Vue {
  /**
   * 默认是否选中
   */
  @Prop({ type: Boolean })
  readonly checked?: boolean;

  @Prop({ type: Boolean })
  readonly disabled?: boolean;

  @Watch('checked', { immediate: true })
  handleCheckedChange(val) {
    this.isChecked = val;
  }

  @Emit('change')
  handleChange(val) {
    this.isChecked = val;
  }

  private isChecked: boolean = false;
}
</script>
