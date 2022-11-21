import { IPanelHeaderComponent, PanelHeaderHeadlessComponent } from 'petals-ui/dist/panel';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class PanelHeaderStructuralComponent
  extends BaseStructuralComponent<PanelHeaderHeadlessComponent>
  implements IPanelHeaderComponent {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  public created(): void {
    this.setHeadlessComponent(new PanelHeaderHeadlessComponent(this));
  }
}

export { PanelHeaderStructuralComponent };
