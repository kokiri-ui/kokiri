<template>
  <span :class="computedClassNames" @click="handleClick">
    <svg
      :class="computedDescendantClassName"
      focusable="false"
      aria-hidden="true"
      v-if="iconType === 'svg'"
    >
      <use :xlink:href="`#${iconRef}`" />
    </svg>
    <i :class="computedDescendantClassName" aria-hidden="true" v-else />
  </span>
</template>

<script lang="ts">
import { Component, Prop, Emit } from 'vue-property-decorator';

import { IconType, IIconComponent, IconHeadlessComponent } from 'petals-ui/dist/icon';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  name: getComponentName('icon'),
})
export default class Icon
  extends BaseStructuralComponent<IconHeadlessComponent>
  implements IIconComponent {
  @Prop({ type: String, default: '' })
  public readonly refs!: string;

  private iconType: IconType = 'font';

  private iconRef: string = '';

  private get computedClassNames(): string[] {
    return this.getComponentClassNames();
  }

  private get computedDescendantClassName(): string {
    return this.getDescendantClassName('content');
  }

  @Emit('click')
  private handleClick(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  private initMetadata(): void {
    const hc = this.getHeadlessComponent()!;
    const { type } = hc.getOption();

    this.iconType = type;
    this.iconRef = hc.getSvgIconRef();
  }

  public created(): void {
    this.setHeadlessComponent(new IconHeadlessComponent(this));
    this.initMetadata();
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
