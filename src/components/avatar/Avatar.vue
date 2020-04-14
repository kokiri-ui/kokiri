<template>
  <el-avatar :class="computedClassName" :shape="shape" :size="size" :src="src" :icon="icon" :alt="alt" />
</template>

<style lang="scss" module>
@include component-rules($__avatar-component-name) {
  &--image {
    background-color: transparent;

    img {
      width: 100%;
    }
  }
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Avatar as ElAvatar } from 'element-ui';
import { AvatarShape, SizeType } from '../../typing';

@Component({
  components: {
    ElAvatar,
  },
})
export default class SsAvatar extends Vue {
  @Prop({ type: String, default: 'circle' })
  public readonly shape!: AvatarShape;

  @Prop({ type: [String, Number], default: 'medium' })
  public readonly size!: SizeType | number;

  @Prop({ type: String, default: '' })
  public readonly src!: string;

  @Prop({ type: String, default: '' })
  public readonly icon!: string;

  @Prop({ type: String, default: '' })
  public readonly alt!: string;

  private get computedClassName(): string[] {
    const classNames = [this.$style.Avatar];

    if (this.src !== '') {
      classNames.push(this.$style['Avatar--image']);
    }

    return classNames;
  }
}
</script>
