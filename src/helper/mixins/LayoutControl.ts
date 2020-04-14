import { Vue, Component } from 'vue-property-decorator';
import { LayoutRole, LayoutContainer } from '../../typing';
import { findSpecificAncestor } from '../utils';

@Component
export default class LayoutControl extends Vue {
  protected role!: LayoutRole;

  protected container!: LayoutContainer | null;

  public mounted(): void {
    const ancestor = findSpecificAncestor(this, 'SsLayoutContainer');
    const container = ancestor ? (ancestor as LayoutContainer) : null;

    if (container) {
      container.__registerRole(this, this.role);
    }

    this.container = container;
  }

  public destroyed(): void {
    if (this.container) {
      this.container.__removeRole(this.role);
    }
  }
}
