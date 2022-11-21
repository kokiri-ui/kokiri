import { LinkTarget, ILinkComponent, LinkHeadlessComponent } from 'petals-ui/dist/link';

import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

type LinkHref = string;

@Component
class LinkStructuralComponent
  extends BaseStructuralComponent<LinkHeadlessComponent>
  implements ILinkComponent<LinkHref> {
  @Prop({ type: String, default: 'javascript:void(0);' })
  public readonly href!: LinkHref;

  @Prop({ type: String, default: 'self' })
  public readonly target!: LinkTarget;

  @Emit('click')
  public onClick(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new LinkHeadlessComponent(this));
  }
}

export { LinkStructuralComponent };
