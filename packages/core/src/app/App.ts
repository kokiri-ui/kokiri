import { IAppComponent, AppHeadlessComponent } from 'petals-ui/dist/app';
import { Component } from 'vue-property-decorator';

import { addClassNames, removeClassNames, BaseStructuralComponent } from '../basic';

const docRoot = document.documentElement;
const docBody = document.body;

@Component
class AppStructuralComponent
  extends BaseStructuralComponent<AppHeadlessComponent>
  implements IAppComponent {
  private addHostClassName(): void {
    addClassNames(docRoot, [this.$style.Host]);
    addClassNames(docBody, [this.$style['Host-body']]);
  }

  private removeHostClassName(): void {
    removeClassNames(docRoot, [this.$style.Host]);
    removeClassNames(docBody, [this.$style['Host-body']]);
  }

  public created(): void {
    this.setHeadlessComponent(new AppHeadlessComponent(this));
    this.addHostClassName();
  }

  public mounted(): void {
    this.addHostClassName();
  }

  public updated(): void {
    this.addHostClassName();
  }

  public destroyed(): void {
    this.removeHostClassName();
  }
}

export { AppStructuralComponent };
