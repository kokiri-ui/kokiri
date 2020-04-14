<template>
  <el-upload
    ref="upload"
    :action="action"
    :accept="accept"
    :disabled="disabled"
    :multiple="multiple"
    :headers="headers"
    :with-credentials="withCredentials"
    :list-type="listType"
    :file-list="fileList"
    :limit="limit"
    :before-upload="beforeUpload"
    :before-remove="beforeRemove"
    :http-request="customRequest"
    :on-exceed="handleExceed"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-change="handleChange"
    :on-progress="handleProgress"
    :on-success="handleSuccess"
    :on-error="handleError"
  >
    <slot />
    <slot name="trigger" slot="trigger" />
    <slot name="tip" slot="tip" />
    <slot name="file" slot="file" slot-scope="{ file }" :file="file" />
  </el-upload>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Ref } from 'vue-property-decorator';
import { ElUploadInternalFileDetail } from 'element-ui/types/upload';
import { Upload as ElUpload } from 'element-ui';

type UploadListType = 'text' | 'picture' | 'picture-card';

@Component({
  components: {
    ElUpload,
  },
})
export default class SsUpload extends Vue {
  @Prop({ type: String, default: '' })
  public readonly action!: string;

  @Prop({ type: String })
  public readonly accept?: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly multiple!: boolean;

  @Prop({ type: Object })
  public readonly headers?: object;

  @Prop({ type: Boolean, default: false })
  public readonly withCredentials!: boolean;

  @Prop({ type: String, default: 'text' })
  public readonly listType!: UploadListType;

  @Prop({ type: Array })
  public readonly fileList?: object[];

  @Prop({ type: Number })
  public readonly limit?: number;

  @Prop({ type: Function })
  public readonly beforeUpload?: Function;

  @Prop({ type: Function })
  public readonly beforeRemove?: Function;

  @Prop({ type: Function })
  public readonly customRequest?: Function;

  @Ref()
  private readonly upload!: ElUpload;

  @Emit('exceed')
  private handleExceed(): void {}

  @Emit('preview')
  private handlePreview(): void {}

  @Emit('remove')
  private handleRemove(): void {}

  @Emit('change')
  private handleChange(): void {}

  @Emit('progress')
  private handleProgress(): void {}

  @Emit('success')
  private handleSuccess(): void {}

  @Emit('error')
  private handleError(): void {}

  /**
   * FIXME:
   * 直接弹出选择文件对话框，
   * 为了兼容原来的用法，
   * 不建议使用！
   */
  public __open(): void {
    (this.upload.$refs['upload-inner'] as any).handleClick();
  }

  public abort(file: ElUploadInternalFileDetail): void {
    this.upload.abort(file);
  }

  public clear(): void {
    this.upload.clearFiles();
  }

  public submit(): void {
    this.upload.submit();
  }
}
</script>
