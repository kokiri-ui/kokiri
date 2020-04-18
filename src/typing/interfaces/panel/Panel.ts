import { IBaseComponent } from '../basic';

interface IPanelComponent extends IBaseComponent {
  title?: string;
  bodyStyle?: any;
  bodyClass?: string;
}

export { IPanelComponent };
