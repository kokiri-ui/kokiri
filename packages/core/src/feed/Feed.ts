import { IFeedComponent, FeedHeadlessComponent } from 'petals-ui/dist/feed';

import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class FeedStructuralComponent
  extends BaseStructuralComponent<FeedHeadlessComponent>
  implements IFeedComponent {
  @Prop({ type: String, default: '' })
  public readonly avatar!: string;

  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: Object })
  public readonly asideClassName!: string;

  @Prop({ type: Object })
  public readonly avatarClassName!: string;

  @Prop({ type: Object })
  public readonly contentClassName!: string;

  @Prop({ type: Object })
  public readonly headerClassName!: string;

  @Prop({ type: Object })
  public readonly bodyClassName!: string;

  @Emit('click')
  protected onClick(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new FeedHeadlessComponent(this));
  }
}

export { FeedStructuralComponent };
