<template>
  <el-divider :direction="direction" :content-position="orientation">
    <slot />
  </el-divider>
</template>

<script lang="ts">
import { Vue, Component, Watch, Emit, Prop } from 'vue-property-decorator';
import { Divider as ElDivider } from 'element-ui';
import { DirectionType } from '../../typing';

enum OrientationType {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

@Component({
  components: {
    ElDivider,
  },
})
export default class SsDivider extends Vue {
  /**
   * 分割线方向
   */
  @Prop({ type: String, default: 'horizontal' })
  readonly direction!: DirectionType;

  /**
   * 分割线文案位置
   */
  @Prop({ type: String, default: OrientationType.Center })
  readonly orientation!: OrientationType;
}
</script>
