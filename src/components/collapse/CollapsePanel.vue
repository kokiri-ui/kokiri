<template>
  <el-collapse-item class="Collapse-panel" :title="title" :disabled="disabled" :name="flag">
    <slot />
  </el-collapse-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { CollapseItem as ElCollapseItem } from 'element-ui';

@Component({
  components: {
    ElCollapseItem,
  },
})
export default class SsCollapsePanel extends Vue {
  @Prop({ type: String })
  readonly title?: string;

  @Prop({ type: Boolean, default: false })
  readonly disabled?: boolean;

  @Prop({ type: [String, Number] })
  readonly flag?: string | number;
}
</script>
