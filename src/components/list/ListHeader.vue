<template>
  <toolbar :class="$style['List-header']" :title="title">
    <slot />
  </toolbar>
</template>

<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Toolbar } from '../toolbar';

@Component({
  components: {
    Toolbar,
  },
})
export default class ListHeader extends Vue {
  @Prop({ type: String, default: '' })
  readonly title!: string;
}
</script>
