import { IViewGroupComponent } from '../view-group/ViewGroup';
import { PlacementType } from '../../aliases';

export interface ITabsComponent extends IViewGroupComponent {
  position?: PlacementType; // 选项卡显示位置
  stretch?: boolean; // 选项卡是否拉伸
  editable?: boolean; // 选项卡是否可编辑
}
