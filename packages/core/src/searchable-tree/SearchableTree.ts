import { debounce } from 'throttle-debounce';
import {
  TreeNodeKey,
  TreeNodeRenderer,
  TreeData,
  ConfigurableTreeNodeDataField,
  TreeNodeFilter,
  ISearchableTreeComponent,
  SearchableTreeHeadlessComponent,
} from 'petals-ui/dist/searchable-tree';

import { VNode } from 'vue';
import { Component, Prop, Emit, Watch } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class SearchableTreeStructuralComponent
  extends BaseStructuralComponent<SearchableTreeHeadlessComponent>
  implements ISearchableTreeComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: Array, default: () => [] })
  public readonly value!: TreeNodeKey[];

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly readonly!: boolean;

  @Prop({ type: String })
  public readonly placeholder!: string;

  @Prop({ type: Array, default: () => [] })
  public readonly dataSource!: TreeData;

  @Prop({ type: Boolean, default: false })
  public readonly checkable!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly expanded!: boolean;

  @Prop({ type: Array, default: () => [] })
  public readonly expandedKeys!: TreeNodeKey[];

  @Prop({ type: Array, default: () => [] })
  public readonly selectedKeys!: TreeNodeKey[];

  @Prop({ type: Object, default: () => ({}) })
  public readonly nodeField!: ConfigurableTreeNodeDataField;

  @Prop({ type: Function })
  public readonly nodeRenderer!: TreeNodeRenderer<VNode>;

  @Prop({ type: String })
  public readonly emptyText!: string;

  @Prop({ type: Function, default: () => true })
  public readonly filter!: TreeNodeFilter;

  @Prop({ type: String })
  public readonly searchContainerClassName!: string;

  @Prop({ type: String })
  public readonly searchClassName!: string;

  @Prop({ type: String })
  public readonly searchIcon!: string;

  @Prop({ type: String })
  public readonly searchIconClassName!: string;

  @Prop({ type: String })
  public readonly treeContainerClassName!: string;

  @Prop({ type: String })
  public readonly treeClassName!: string;

  protected resolvedTreeData: TreeData = [];

  protected searchKeyword: string = '';

  protected debouncedTreeDataResolver: Function = null as any; // eslint-disable-line @typescript-eslint/ban-types

  private resolveTreeData(): void {
    this.resolvedTreeData = this.getHeadlessComponent()!.resolveTreeData(this.searchKeyword);
  }

  @Watch('dataSource')
  private handleDataSourceChange(): void {
    this.resolveTreeData();
  }

  protected handleTreeSearch(keyword: string): void {
    this.searchKeyword = keyword;

    this.debouncedTreeDataResolver();
  }

  @Emit('change')
  public onChange(checkedKeys: TreeNodeKey[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('select')
  public onSelect(selectedKeys: TreeNodeKey[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('expand')
  public onExpand(expandedKeys: TreeNodeKey[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.debouncedTreeDataResolver = debounce(300, false, this.resolveTreeData);

    this.setHeadlessComponent(new SearchableTreeHeadlessComponent(this));
    this.resolveTreeData();
  }
}

export { SearchableTreeStructuralComponent };
