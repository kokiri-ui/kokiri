<template>
  <el-menu-item :index="flag" :disabled="disabled" @click="handleClick">
    <slot />
    <slot name="title" slot="title" />
  </el-menu-item>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { MenuItem as ElMenuItem } from 'element-ui';

@Component({
  components: {
    ElMenuItem,
  },
})
export default class SsMenuItem extends Vue {
  @Prop({ type: String })
  public readonly flag?: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Emit('click')
  private handleClick(): void {}
}
</script>
