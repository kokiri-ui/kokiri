<template>
  <toolbar class="StatusProgress">
    <spacer />
    <steps>
      <step v-for="item in flow" :key="item.value" :title="item.displayName || item.key" />
    </steps>
  </toolbar>
</template>

<style lang="scss" scoped>
.StatusProgress {
  $gap: 18px;

  margin-top: $gap;
  padding: $gap 0;
  border-top: 1px solid #d9d9d9;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Toolbar, Spacer, Steps, Step } from '../components';

@Component({
  components: {
    Toolbar,
    Spacer,
    Steps,
    Step,
  },
})
export default class StatusProgress extends Vue {
  @Prop({ type: Object, default: () => ({}) })
  public readonly field!: any;

  private flow: { displayName: string; key: string; value: string }[] = [];

  public created(): void {
    const values = JSON.parse(this.field.selection || '{}').enumValues;

    if (!values) {
      return;
    }

    this.flow = values;
  }
}
</script>
