<template>
  <el-dropdown-item :command="command" :disabled="disabled" :divided="divided" :icon="icon">
    <slot />
  </el-dropdown-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { DropdownItem as ElDropdownItem } from 'element-ui';

@Component({
  components: {
    ElDropdownItem,
  },
})
export default class SsDropdownItem extends Vue {
  @Prop()
  public readonly command!: any;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly divided!: boolean;

  @Prop({ type: String })
  public readonly icon!: string;
}
</script>
