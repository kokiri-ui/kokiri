import { IEllipsisComponent, EllipsisHeadlessComponent } from 'petals-ui/dist/ellipsis';

import { VueConstructor } from 'vue';
import { Component, Ref } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class EllipsisStructuralComponent
  extends BaseStructuralComponent<EllipsisHeadlessComponent>
  implements IEllipsisComponent {
  @Ref()
  private readonly text!: HTMLElement;

  protected content: string = '';

  protected contentOverflow: boolean = false;

  protected get resolvedTag(): string | VueConstructor {
    return this.tag || 'div';
  }

  private updateText(): void {
    if (!this.text) {
      return;
    }

    this.$nextTick(() => {
      this.content = this.text.innerText;
      this.contentOverflow = this.text.scrollWidth > this.text.clientWidth;
    });
  }

  public mounted(): void {
    this.updateText();
  }

  public updated(): void {
    this.updateText();
  }
}

export { EllipsisStructuralComponent };
