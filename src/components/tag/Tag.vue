<template>
  <el-tag
    :type="type"
    :size="resolvedSize"
    :effect="theme"
    :closable="closable"
    :disable-transitions="disableTransitions"
    @close="handleClick"
  >
    <slot />
  </el-tag>
</template>

<script lang="ts">
import { Component, Prop, Emit } from 'vue-property-decorator';
import { Tag as ElTag } from 'element-ui';
import { SizeType, MessageStatus } from '../../typing';
import { SizeControl } from '../../helper/mixins';

type ThemeType = 'light' | 'dark' | 'plain';

@Component({
  components: {
    ElTag,
  },
})
export default class SsTag extends SizeControl {
  @Prop({ type: String })
  public readonly type?: MessageStatus;

  @Prop({ type: String })
  public readonly theme?: ThemeType;

  @Prop({ type: Boolean, default: false })
  public readonly closable!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly disableTransitions!: boolean;

  @Emit('close')
  private handleClick(): void {}
}
</script>
