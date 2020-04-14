<template>
  <el-submenu :index="flag" :disabled="disabled" :popper-class="popupClass">
    <slot />
    <slot name="title" slot="title" />
  </el-submenu>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Submenu as ElSubmenu } from 'element-ui';

@Component({
  // FIXME:
  // 为了解决 ElSubmenu 无限触发事件暂时这么写
  // 抛弃 Element 的菜单组件后可以去掉
  // @ts-ignore
  abstract: true,
  components: {
    ElSubmenu,
  },
})
export default class SsSubMenu extends Vue {
  @Prop({ type: String })
  public readonly flag?: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: String })
  public readonly popupClass?: string;
}
</script>
