import { ComponentStyle } from 'petals-ui/dist/basic';
import { IListComponent, ListHeadlessComponent } from 'petals-ui/dist/list';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class ListStructuralComponent
  extends BaseStructuralComponent<ListHeadlessComponent>
  implements IListComponent {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: Boolean, default: false })
  public readonly bordered!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly divided!: boolean;

  @Prop({ type: String, default: '' })
  public readonly bodyClassName!: string;

  @Prop({ type: Object, default: () => ({}) })
  public readonly bodyStyle!: ComponentStyle;

  public created(): void {
    this.setHeadlessComponent(new ListHeadlessComponent(this));
  }
}

export { ListStructuralComponent };
