<template>
  <el-breadcrumb :separator="separator" :separator-class="separatorClass">
    <slot />
  </el-breadcrumb>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Breadcrumb as ElBreadcrumb } from 'element-ui';

@Component({
  components: {
    ElBreadcrumb,
  },
})
export default class SsBreadcrumb extends Vue {
  @Prop({ type: String })
  public readonly separator!: string;

  // FIXME: 为兼容而采取的临时方案
  @Prop({ type: String })
  public readonly separatorClass!: string;
}
</script>
