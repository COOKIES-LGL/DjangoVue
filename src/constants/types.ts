export interface HeaderBarMenuType {
  label: string;
  value: string;
}

export interface SideBarMenuItemType {
  label: string;
  icon: string;
  id: number;
}

export interface SideBarMenuType {
  label: string;
  icon: string;
  id: number;
  children?: SideBarMenuItemType[];
}

export interface SearchTabListType {
  label: string;
  value: string;
  children: SearchTabListChildType[];
}

export interface SearchTabListChildType {
  label: string;
  holdplace: string;
  url: string;
}
