export interface HeaderBarMenuType {
  label: string;
  value: string;
}

export interface SideBarMenuItemType {
  label: string;
  icon: string;
  name: string;
}

export interface SideBarMenuType {
  label: string;
  icon: string;
  name: string;
  children: SideBarMenuItemType[];
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
