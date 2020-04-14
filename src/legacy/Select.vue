<template>
  <el-select
    value-key="key"
    filterable
    :class="$style.Select"
    :popper-class="$style['Select-dropdown']"
    :value="currentValue"
    :placeholder="placeholder"
    :size="size"
    :multiple="multiple"
    :clearable="clearable"
    @change="handleInput"
  >
    <el-option v-for="item in options" :key="item[keyField]" :label="item[labelField]" :value="item[keyField]" />
    <slot />
    <div :class="$style.noDataButton" slot="empty">
      <slot name="emptySelf" />
    </div>
  </el-select>
</template>

<style lang="scss" module>
@include component-rules($__select-component-name) {
  &-dropdown {
    margin-top: 8px;

    :global {
      .popper__arrow {
        display: none;
      }
    }
  }
}

.noDataButton {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
</style>

<script lang="ts">
import { Vue, Component, Watch, Emit, Prop } from 'vue-property-decorator';
import { Select as ElSelect, Option as ElOption } from 'element-ui';

@Component({
  components: {
    ElSelect,
    ElOption,
  },
})
export default class LegacySelect extends Vue {
  @Prop({ default: 'id' })
  readonly keyField!: string;

  @Prop({ default: 'name' })
  readonly labelField!: string;

  @Prop({ default: '请选择下拉框' })
  readonly placeholder!: string;

  @Prop({ type: String, default: 'medium' })
  readonly size!: string;

  @Prop({ type: Boolean, default: false })
  readonly clearable!: boolean;

  @Prop({ default: false })
  readonly multiple!: boolean;

  @Prop()
  readonly value!: string;

  @Prop({ default: () => [] })
  readonly options!: any[];

  private currentValue: string = '';

  @Watch('value', { immediate: true })
  onValueChange() {
    this.currentValue = this.value;
  }
  @Emit('change')
  handleInput(val) {
    this.currentValue = val;
    return val;
  }
}
</script>
