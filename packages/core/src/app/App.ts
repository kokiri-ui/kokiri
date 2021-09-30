import { IAppComponent, AppHeadlessComponent } from 'petals-ui/dist/app';
import { Component } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

const docRoot = document.documentElement;
const docBody = document.body;

@Component
class AppStructuralComponent
  extends BaseStructuralComponent<AppHeadlessComponent>
  implements IAppComponent {
  private addHostClassName(): void {
    const hostClassName = this.$style.Host;
    const bodyClassName = this.$style['Host-body'];

    if (docRoot.className.indexOf(hostClassName) === -1) {
      docRoot.className = docRoot.className
        ? `${docRoot.className} ${hostClassName}`
        : hostClassName;
    }

    if (docBody.className.indexOf(bodyClassName) === -1) {
      docBody.className = docBody.className
        ? `${docBody.className} ${bodyClassName}`
        : bodyClassName;
    }
  }

  private removeHostClassName(): void {
    docRoot.className = docRoot.className.replace(this.$style.Host, '');
    docBody.className = docBody.className.replace(this.$style['Host-body'], '');
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
