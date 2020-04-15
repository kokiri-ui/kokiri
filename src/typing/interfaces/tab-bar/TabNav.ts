export type TabNavType = {
  label?: string;
  disabled?: boolean;
  icon?: boolean;
};

export interface ITabNavComponent {
  nav?: TabNavType;
  index?: number;
  active?: boolean;
  editable?: boolean;
}
