import { Vue, Component, Prop } from 'vue-property-decorator';

import {
  StateClassNamePrefix,
  ClassName,
  IBaseComponent,
  getComponentConfig,
  getDescendantClassName,
  BaseHeadlessComponent,
} from 'petals-ui/dist/basic';

import { ComponentTag } from './typing';

@Component
class BaseStructuralComponent<
    HeadlessComponent = BaseHeadlessComponent,
    ComponentTheme extends string = string
  >
  extends Vue
  implements Omit<IBaseComponent<ComponentTag>, 'style'> {
  @Prop({ type: [String, Function] })
  public readonly tag!: ComponentTag;

  @Prop({ type: [String, Object, Array] })
  public readonly className!: ClassName;

  @Prop({ type: String })
  public readonly theme!: ComponentTheme;

  private __hc!: HeadlessComponent;

  protected setHeadlessComponent(hc: HeadlessComponent): void {
    this.__hc = hc;
  }

  protected getHeadlessComponent(): HeadlessComponent | null {
    return this.__hc || null;
  }

  protected getComponentClassNames(): string[] {
    return [
      ...(this.__hc as any).getClassNames().map((cls: string) => this.$style[cls]),
      ...(this.__hc as any).getExtraClassNames(),
    ];
  }

  protected getDescendantClassName(descendant: string): string {
    return this.$style[(this.__hc as any).getDescendantClassName(descendant)];
  }

  protected getModifierClassName(modifier: string): string {
    return this.$style[(this.__hc as any).getModifierClassName(modifier)];
  }

  protected getStateClassName(state: string, prefix?: StateClassNamePrefix): string {
    return this.$style[(this.__hc as any).getStateClassName(state, prefix)];
  }

  protected getParentDescendantClassName(descendant: string): string {
    const parentComponentName: string = (this.__hc as any).getParentComponentName();

    return parentComponentName
      ? this.$style[getDescendantClassName(parentComponentName, descendant)]
      : '';
  }

  public static getComponentClassName(moduleName: string): string {
    return getComponentConfig(moduleName, 'name') || '';
  }
}

export { BaseStructuralComponent };
