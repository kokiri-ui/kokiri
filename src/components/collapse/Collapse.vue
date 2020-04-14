<template>
  <el-collapse :class="$style.Collapse" :value="activeFlag" :accordion="accordion" @change="handleChange">
    <slot />
  </el-collapse>
</template>

<style lang="scss" module>
@include component-rules($__collapse-component-name) {
  border-style: none !important;

  :global {
    .el-collapse {
      &-item {
        &__header,
        &__wrap {
          border-bottom-style: none;
        }

        &__header {
          display: block;
          font: {
            weight: 400;
            size: 14px;
          }
          color: #666;
        }

        &__arrow {
          margin-left: 8px;
          color: #c0c4cc;
        }

        &__content {
          padding-bottom: 0;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { Collapse as ElCollapse } from 'element-ui';

@Component({
  components: {
    ElCollapse,
  },
})
export default class SsCollapse extends Vue {
  /**
   * 手风琴模式
   */
  @Prop({ type: Boolean, default: false })
  readonly accordion?: boolean;

  @Prop({ type: [String, Number, Array], default: () => [] })
  readonly activeFlag?: string | string[] | number | number[];

  @Emit('change')
  private handleChange() {}
}
</script>
