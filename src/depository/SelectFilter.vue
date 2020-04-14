<template>
  <ss-box class="pamirs-field-filter-wrapper">
    <ss-input
      suffix-icon="iconfont iconsousuo"
      :placeholder="placeholder"
      :value="searchText"
      @input="handleSearch"
    />
    <ss-box class="pamirs-field-filter">
      <draggable
        :list="innerFields"
        @change="handleMove"
        handle=".pamirs-drag-handle"
        ghost-class="pamirs-drag-ghost"
      >
        <ss-box
          class="pamirs-field-filter-item"
          v-for="(field, index) of filteredFields"
          :key="index"
        >
          <ss-switch
            class="pamirs-field-filter-switch"
            :checked="field[fieldSelectSymbol]"
            @change="handleSelect(field, $event)"
          />
          {{ field.data | display(mainKeys) }}
          <ss-box class="pamirs-drag-handle" v-if="sortable && !searchText">
            <ss-text class="pamirs-drag-dot" v-for="i of 3" :key="i"></ss-text>
          </ss-box>
        </ss-box>
      </draggable>
    </ss-box>
  </ss-box>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import draggable from 'vuedraggable';

import { Box as SsBox, SsText, SsSwitch, SsInput } from '../components';

const FIELD_SELECT_SYMBOL = Symbol('selected');

interface IField {
  [FIELD_SELECT_SYMBOL]: boolean;
  data: any;
}

const wrapFields = (data: any[]): IField[] => {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map(item => ({
    [FIELD_SELECT_SYMBOL]: false,
    data: { ...item },
  }));
};

const unwrapFields = (fields: IField[]): any[] => {
  if (!Array.isArray(fields)) {
    return [];
  }

  return fields.map(item => ({
    ...item.data,
  }));
};

@Component({
  components: {
    draggable,
    SsBox,
    SsText,
    SsSwitch,
    SsInput,
  },
  filters: {
    // 根据 mainKeys 顺序获取展示名称
    display(value: any, keys: (string | number)[] = []) {
      let displayData = '';
      for (let i = 0; i < keys.length; i++) {
        displayData = value[keys[i]];
        if (displayData) {
          break;
        }
      }

      return displayData;
    },
  },
})
export default class SelectFilter extends Vue {
  @Prop({ type: Array, default: () => [] })
  readonly fields!: any[];

  @Prop({ type: Array, default: () => [] })
  readonly selected!: (string | number)[];

  @Prop({ type: String, default: 'id' })
  readonly compareKey!: string;

  @Prop({ type: Array, default: () => ['name'] })
  readonly mainKeys!: string[];

  @Prop({ type: String })
  readonly placeholder?: string;

  @Prop({ type: Boolean, default: false })
  readonly sortable!: boolean;

  @Watch('fields', { immediate: true })
  private handleFieldsChange(val: any[]) {
    this.innerFields = wrapFields(val);
    this.initFields();
  }

  @Watch('selected', { immediate: true })
  private handleSelectedChange(val: (string | number)[]) {
    this.initFields();
  }

  @Emit('select')
  private handleSelect(field: IField, selected: boolean) {
    field[FIELD_SELECT_SYMBOL] = selected;
    return unwrapFields(this.innerFields.filter(f => f[FIELD_SELECT_SYMBOL])).map(data => data[this.compareKey]);
  }

  @Emit('search')
  private handleSearch(text: string) {
    this.searchText = text;
  }

  @Emit('move')
  private handleMove() {
    return unwrapFields(this.innerFields);
  }

  private searchText = '';
  private fieldSelectSymbol = FIELD_SELECT_SYMBOL;
  private innerFields: IField[] = [];

  private get filteredFields() {
    const searchText = this.searchText.toLowerCase();
    if (!searchText) {
      return this.innerFields;
    }

    return this.innerFields.filter(f => {
      const strs = this.mainKeys
        .map(k => {
          const val = f.data[k];
          return val.toLowerCase && val.toLowerCase();
        })
        .filter(val => !!val);

      return strs.find(s => s.indexOf(searchText) !== -1);
    });
  }

  getSelectedFields<T>(): T[] {
    return this.fields.filter(field => field.selected);
  }

  private initFields() {
    this.innerFields.forEach(f => (f[FIELD_SELECT_SYMBOL] = this.selected.includes(f.data[this.compareKey])));
    // FIXME: 清空已选项有问题，其他操作没问题，先用 forceUpdate 解决
    this.$forceUpdate();
  }
}
</script>

<style lang="scss" scoped>
.pamirs-field-filter-wrapper {
  font-size: 12px;
  ::v-deep .el-input__suffix {
    margin-right: 8px;
    color: #979797;
  }
}
</style>

<style lang="scss">
$dot-size: 2px;

.pamirs-field-filter {
  margin: 16px 0;
  height: 300px;
  overflow: auto;

  &-item {
    position: relative;
    padding: 8px 5px;
    background: #fff;
  }

  &-switch {
    margin-right: 16px;
  }
}
.pamirs-drag {
  &-handle {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 16px;
    cursor: all-scroll;
  }
  &-ghost {
    background-color: var(--ss-hover-bg, #ecf8ff);
  }
  &-dot {
    position: absolute;
    line-height: 0;
    @for $num from 1 through 3 {
      &:nth-child(#{$num}) {
        top: ($dot-size * 2) * ($num - 1);
      }
    }
    &::after,
    &::before {
      content: '';
      display: inline-block;
      width: $dot-size;
      height: $dot-size;
      background: #d8d8d8;
    }
    &::after {
      margin-left: $dot-size;
    }
  }
}
</style>
