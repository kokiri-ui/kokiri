<template>
  <el-time-picker
    arrow-control
    :value="currentValue"
    @input="handleInput"
    :disabledDate="disabled"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00',
    }"
    placeholder="任意时间点"
  ></el-time-picker>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TimePicker as ElTimePicker } from 'element-ui';

@Component({
  components: {
    ElTimePicker,
  },
})
export default class SsTimePicker extends Vue {
  @Prop({ default: '' })
  value!: string;

  @Prop()
  readonly type!: string;

  @Prop()
  readonly disabled!: boolean;

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
