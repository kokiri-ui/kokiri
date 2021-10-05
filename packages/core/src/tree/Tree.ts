import {
  TreeData,
  ConfigurableTreeNodeDataField,
  ITreeComponent,
  TreeHeadlessComponent,
} from 'petals-ui/dist/tree';
import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class TreeStructuralComponent
  extends BaseStructuralComponent<TreeHeadlessComponent>
  implements ITreeComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: Array, default: () => [] })
  public readonly value!: string[];

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly readonly!: boolean;

  @Prop({ type: Array, default: () => [] })
  public readonly dataSource!: TreeData;

  @Prop({ type: Boolean, default: false })
  public readonly checkable!: boolean;

  @Prop({ type: Array, default: () => [] })
  public readonly expandedKeys!: string[];

  @Prop({ type: Array, default: () => [] })
  public readonly selectedKeys!: string[];

  @Prop({ type: Object, default: () => ({}) })
  public readonly nodeField!: ConfigurableTreeNodeDataField;

  @Emit('change')
  public onChange(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('select')
  public onSelect(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('expand')
  public onExpand(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new TreeHeadlessComponent(this));
  }
}

export { TreeStructuralComponent };
