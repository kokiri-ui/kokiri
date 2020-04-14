<template>
  <ul :class="$style.Suggesstion">
    <template v-if="options.length">
      <li
        :class="[$style.selectable, { [$style['is-active']]: active === index }]"
        :key="item.id"
        @click="select(item)"
        @mousedown.prevent
        v-for="(item, index) in options"
      >
        {{ item.value }}
      </li>
    </template>
    <template v-else>
      <li>无匹配结果</li>
    </template>
  </ul>
</template>

<style lang="scss" module>
.Suggesstion {
  background-color: #fff;
  border: 1px solid #666;
  border-radius: 4px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 0 15px;
    line-height: 30px;
    cursor: pointer;

    + li {
      border-top: 1px solid #ccc;
    }

    &.is-active,
    &.selectable:hover {
      background-color: yellow;
    }
  }
}
</style>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { Box } from '../box';
import { OptionItem } from './util';

@Component({
  components: {
    Box,
  },
})
export default class SsSuggestion extends Vue {
  @Prop({ type: Array, default: () => [] })
  options: OptionItem[] = [];

  @Prop({ type: Number, default: -1 })
  active!: number;

  @Emit()
  select(option: OptionItem) {}

  created() {}

  destroyed() {}
}
</script>
