<template>
  <el-alert
    :title="message"
    :description="description"
    :type="type"
    :closable="closable"
    :show-icon="showIcon"
    @close="handleClose"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { Alert as ElAlert } from 'element-ui';

@Component({
  components: {
    ElAlert,
  },
})
export default class SsAlert extends Vue {
  /**
   * 警告提示内容
   */
  @Prop({ type: String })
  public readonly message?: string;

  /**
   * 警告提示的辅助性文字介绍
   */
  @Prop({ type: String })
  public readonly description?: string;

  /**
   * 警告提示的样式
   */
  @Prop({ type: String })
  public readonly type?: string;

  /**
   * 是否可关闭
   */
  @Prop({ type: Boolean, default: false })
  public readonly closable?: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly showIcon?: boolean;

  @Emit('close')
  private handleClose(): void {}
}
</script>
