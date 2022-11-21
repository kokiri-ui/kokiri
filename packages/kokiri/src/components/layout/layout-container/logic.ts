import { Vue, Component, Mixins } from 'vue-property-decorator';

import { ComponentStyle, DirectionType, normalizeLooseSize } from 'petals-ui/dist/basic';
import { LayoutRole } from 'petals-ui/dist/layout';
import { getComponentName, LayoutContainerStructuralComponent } from '@kokiri/core/dist/layout';

import { LayoutControl } from '../LayoutControl';

@Component({
  name: getComponentName('layoutContainer'),
})
export default class LayoutContainer extends Mixins(
  LayoutContainerStructuralComponent,
  LayoutControl,
) {
  protected role: LayoutRole = 'container';

  private roles: { [key: string]: Vue } = {};

  private direction: DirectionType = '' as any;

  private isTop!: boolean;

  private get computedClassNames(): string[] {
    const classNames: string[] = this.getComponentClassNames();

    if (this.direction) {
      classNames.push(this.getModifierClassName(this.direction));
    }

    (['header', 'footer', 'aside'] as LayoutRole[]).forEach((role: LayoutRole) => {
      if (this.hasRole(role)) {
        classNames.push(this.$style[`has-${role}`]);
      }
    });

    return classNames;
  }

  private get computedStyle(): ComponentStyle {
    const style: ComponentStyle = {};

    if (this.direction === 'vertical') {
      const headerHeight: string = this.getNormalizedRolePropValue('header', 'height');
      const footerHeight: string = this.getNormalizedRolePropValue('footer', 'height');

      if (this.hasRole('header') && headerHeight) {
        style.paddingTop = headerHeight;
      }

      if (this.hasRole('footer') && footerHeight) {
        style.paddingBottom = footerHeight;
      }
    } else {
      const asideWidth: string = this.getNormalizedRolePropValue('aside', 'width');

      if (this.hasRole('aside') && asideWidth) {
        style.paddingLeft = asideWidth;
      }
    }

    return style;
  }

  private hasRole(role: LayoutRole): boolean {
    return !!this.roles[role];
  }

  private getNormalizedRolePropValue(role: LayoutRole, propName: string): string {
    const roleInst: any = this.roles[role] as any;

    return roleInst && roleInst[propName] !== undefined
      ? normalizeLooseSize(roleInst[propName])
      : '';
  }

  public __registerRole(role: LayoutRole, $role: Vue): void {
    this.roles[role] = $role;
  }

  public __removeRole(role: LayoutRole): void {
    if (this.roles[role]) {
      this.roles[role] = null as any;
      delete this.roles[role];
    }
  }

  public mounted(): void {
    this.isTop = this.container === null;
    this.direction = this.hasRole('header') || this.hasRole('footer') ? 'vertical' : 'horizontal';
  }
}
