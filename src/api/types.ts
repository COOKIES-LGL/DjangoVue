export interface WeatherType {
  city: string;
  weather: string;
}

export interface LinkCategoryItemType {
  id: number;
  category_name: string;
  category_level: number;
  category_parent: number;
  order_id: number;
}

export interface LinkItemType {
  id: number;
  link_title: string;
  create_time: number;
  link_icon: string;
  parent_id: number;
  grandparent_id: number;
  link_desc: string;
  view_count: number;
  link_loves: number;
  link_type: number;
  link_status: number;
  link_need_vpn: number;
  order_id: number;
  link_url: string;
}

export interface GetLinkListParams {
  grandparent_id: number;
}

export interface GetSpecialLinkListParams {
  parent_id: number;
}
export interface PostLinkListForOrderParams {
  linkList: LinkItemType[];
}

export interface GetLinkListForOrderParams {
  lv1: number;
  lv2: number;
}

export interface GetCategoryByTypeParam {
  category_type: number;
}

