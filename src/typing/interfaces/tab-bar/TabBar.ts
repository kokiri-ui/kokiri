import { NumberOrString } from '../../aliases';
import { TabNavType } from './TabNav';

export interface ITabBarComponent {
  navs?: TabNavType[];
  active?: NumberOrString;
  editable?: boolean;
  stretch?: boolean; // 选项卡是否拉伸
}
