import { Vue, Component, Prop } from 'vue-property-decorator';

import { IBaseComponent, getComponentConfig, BaseHeadlessComponent } from 'petals-ui/dist/basic';

import { ComponentTag } from './typing';

@Component
class BaseStructuralComponent<HeadlessComponent = BaseHeadlessComponent>
  extends Vue
  implements IBaseComponent<ComponentTag> {
  @Prop({ type: [String, Function], default: '' })
  public readonly tag!: ComponentTag;

  private __hc!: HeadlessComponent;

  protected setHeadlessComponent(hc: HeadlessComponent): void {
    this.__hc = hc;
  }

  protected getHeadlessComponent(): HeadlessComponent | null {
    return this.__hc || null;
  }

  public static getComponentClassName(moduleName: string): string {
    return getComponentConfig(moduleName, 'name') || '';
  }
}

export { BaseStructuralComponent };
