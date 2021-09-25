import { FormControlSize } from 'petals-ui/dist/form-control';
import { ISelectComponent, SelectHeadlessComponent } from 'petals-ui/dist/select';
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Select as IvuSelect } from 'view-design';

import { getComponentName, BaseStructuralComponent } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('select'),
})
export default class Select
  extends BaseStructuralComponent<SelectHeadlessComponent>
  implements ISelectComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: String, default: '' })
  public readonly value!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly readonly!: boolean;

  @Prop({ type: String, default: '' })
  public readonly placeholder!: string;

  @Prop({ type: Boolean, default: false })
  public readonly clearable!: boolean;

  @Prop({ type: String, default: 'medium' })
  public readonly size!: FormControlSize;

  @Prop({ type: Boolean, default: false })
  public readonly multiple!: boolean;

  private render(h: CreateElement): VNode {
    const props: Record<string, any> = {};

    return h(IvuSelect, { props }, this.$slots.default);
  }

  private created(): void {
    this.setHeadlessComponent(new SelectHeadlessComponent(this));
  }
}
