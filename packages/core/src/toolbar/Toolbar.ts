import { IToolbarComponent, ToolbarHeadlessComponent } from 'petals-ui/dist/toolbar';

import { VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

type NodeType = string | VNode;

@Component
class ToolbarStructuralComponent
  extends BaseStructuralComponent<ToolbarHeadlessComponent<NodeType>>
  implements IToolbarComponent<NodeType> {
  @Prop({ type: [String, Object], default: '' })
  public readonly content!: NodeType;

  @Prop({ type: String, default: '' })
  public readonly contentClassName!: string;

  @Prop({ type: String, default: '' })
  public readonly extraClassName!: string;

  public created(): void {
    this.setHeadlessComponent(new ToolbarHeadlessComponent(this));
  }
}

export { ToolbarStructuralComponent };
