<template>
  <VueTreeSelect
    :options="options"
    :disable-branch-nodes="true"
    :show-count="true"
    search-nested
    :value="currentValue"
    @input="handleInput"
  />
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch, Emit } from 'vue-property-decorator';
import VueTreeSelect from '@riophae/vue-treeselect';
import '@riophae/vue-treeselect/dist/vue-treeselect.css';

@Component({
  components: {
    VueTreeSelect
  }
})
export default class TreeSelect extends Vue {
  @Prop({ default: () => '' })
  value!: string;

  @Prop({ default: () => [] })
  readonly options!: any[];

  private currentValue: string = '';

  handleInput(val) {
    this.currentValue = val;
    this.$emit('input', val);
  }
  created() {
    this.currentValue = this.value;
  }
}
</script>
