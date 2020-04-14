<template>
  <box
    :class="[$style.TabNav, { [$style['is-active']]: active, [$style['is-disabled']]: nav.disabled }]"
    @click.native.stop="handleClick"
  >
    <icon :type="nav.label" provider="el" v-if="nav.icon" />
    <ss-text v-else>{{ nav.label }}</ss-text>
    <icon
      :class="$style['TabNav-close']"
      type="close"
      provider="el"
      @click.native.stop="handleRemove"
      v-if="editable"
    />
  </box>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { Box } from '../box';
import { SsText } from '../text';
import { Icon } from '../icon';

@Component({
  components: {
    Box,
    SsText,
    Icon,
  },
})
export default class TabNav extends Vue {
  @Prop({ default: () => ({}) })
  readonly nav: any;

  @Prop(Number)
  readonly index!: number;

  @Prop(Boolean)
  readonly active!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly editable?: boolean;

  @Emit('remove')
  private handleRemove() {}

  private handleClick(...args) {
    if (!this.active && !this.nav.disabled) {
      this.$emit('change', this.index, this.nav);
    }
  }
}
</script>
