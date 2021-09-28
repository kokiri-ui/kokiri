import { IconType, IIconComponent, IconHeadlessComponent } from 'petals-ui/dist/icon';
import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class IconStructuralComponent
  extends BaseStructuralComponent<IconHeadlessComponent>
  implements IIconComponent {
  @Prop({ type: String, default: '' })
  public readonly refs!: string;

  protected iconType: IconType = 'font';

  protected iconRef: string = '';

  private initMetadata(): void {
    const hc = this.getHeadlessComponent()!;
    const { type } = hc.getOption();

    this.iconType = type;
    this.iconRef = hc.getSvgIconRef();
  }

  @Emit('click')
  protected onClick(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new IconHeadlessComponent(this));
    this.initMetadata();
  }
}

export { IconStructuralComponent };
