import { ImageFit, ImageSize, IImageComponent, ImageHeadlessComponent } from 'petals-ui/dist/image';

import { Component, Prop, Watch } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class ImageStructuralComponent
  extends BaseStructuralComponent<ImageHeadlessComponent>
  implements IImageComponent {
  @Prop({ type: String, default: '' })
  public readonly src!: string;

  @Prop({ type: String, default: '' })
  public readonly fallback!: string;

  @Prop({ type: String, default: '' })
  public readonly alt!: string;

  @Prop({ type: String, default: 'none' })
  public readonly fit!: ImageFit;

  @Prop({ type: [Number, String], default: 'none' })
  public readonly width!: ImageSize;

  @Prop({ type: [Number, String], default: 'none' })
  public readonly height!: ImageSize;

  protected sourceUrl: string = '';

  private fallbackUsed!: boolean;

  @Watch('src', { immediate: true })
  private handleSrcPropChange(src: string): void {
    this.sourceUrl = src;
    this.fallbackUsed = false;
  }

  public onLoad(evt: Event): void {
    if (this.fallbackUsed) {
      return;
    }

    this.$emit('load', evt);
  }

  public onError(evt: Event): boolean {
    if (this.fallbackUsed) {
      return false;
    }

    this.sourceUrl = this.fallback;
    this.fallbackUsed = true;

    this.$emit('error', evt);

    return true;
  }

  public created(): void {
    this.setHeadlessComponent(new ImageHeadlessComponent(this));
  }
}

export { ImageStructuralComponent };
