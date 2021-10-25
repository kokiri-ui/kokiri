import { ClassName } from 'petals-ui/dist/basic';
import { IEmptyComponent, EmptyHeadlessComponent } from 'petals-ui/dist/empty';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';
import { getComponentConfig } from './helper';

@Component
class EmptyStructuralComponent
  extends BaseStructuralComponent<EmptyHeadlessComponent>
  implements IEmptyComponent {
  @Prop({ type: String })
  public readonly image!: string;

  @Prop({ type: [String, Object, Array] })
  public readonly imageClassName!: ClassName;

  @Prop({ type: String, default: '暂无数据' })
  public readonly description!: string;

  protected get resolvedImage(): string {
    return this.image || getComponentConfig('image');
  }
}

export { EmptyStructuralComponent };
