<template>
  <el-slider v-model="value" />
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Slider as ElSlider } from 'element-ui';

@Component({
  components: {
    ElSlider,
  },
})
export default class SsSlider extends Vue {
  @Prop()
  readonly value!: string;
}
</script>
