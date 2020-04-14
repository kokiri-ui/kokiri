<template>
  <el-dropdown :trigger="trigger" :placement="placement" @command="handleCommand">
    <slot />
    <slot name="dropdown" slot="dropdown" />
  </el-dropdown>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { Dropdown as ElDropdown } from 'element-ui';
import { ComplexVerticalPlacement } from '../../typing';

type TriggerType = 'click' | 'hover';

@Component({
  components: {
    ElDropdown,
  },
})
export default class SsDropdown extends Vue {
  @Prop({ type: String, default: 'hover' })
  public readonly trigger!: TriggerType;

  @Prop({ type: String })
  public readonly placement!: ComplexVerticalPlacement;

  @Emit('command')
  private handleCommand(): void {}
}
</script>
