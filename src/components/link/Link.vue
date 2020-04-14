<template>
  <el-link :href="url" :type="type" :underline="underline" :disabled="disabled">
    <slot />
  </el-link>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Link as ElLink } from 'element-ui';
import { StatusType } from '../../typing';

@Component({
  components: {
    ElLink,
  },
})
export default class SsLink extends Vue {
  @Prop({ type: String, default: 'javascript:void(0);' })
  readonly url!: string;

  @Prop({ type: String, default: 'default' })
  readonly type!: StatusType;

  @Prop({ type: Boolean, default: false })
  readonly underline!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;
}
</script>
