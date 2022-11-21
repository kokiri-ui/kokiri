import { PanelBodyStyle, IPanelComponent, PanelHeadlessComponent } from 'petals-ui/dist/panel';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class PanelStructuralComponent
  extends BaseStructuralComponent<PanelHeadlessComponent>
  implements IPanelComponent {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: Boolean, default: false })
  public readonly fixed!: boolean;

  @Prop({ type: String, default: '' })
  public readonly bodyClassName!: string;

  @Prop({ type: Object, default: () => ({}) })
  public readonly bodyStyle!: PanelBodyStyle;

  public created(): void {
    this.setHeadlessComponent(new PanelHeadlessComponent(this));
  }
}

export { PanelStructuralComponent };
