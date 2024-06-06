import { TagColor } from "./TagColor";

export interface MultiSelectPropResponse {
  id: string;
  name: string;
  type: "multi_select";
  multi_select: {
    options: { name: string; color: TagColor }[];
  };
}

export type PageObject = {
  object: "page";
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: any;
  last_edited_by: any;
  cover?: any;
  icon?: any;
  parent: {
    type: string;
    [key: string]: string | boolean;
  };
  archived: boolean;
  in_trash: boolean;
  properties: PropsObject;
  url: string;
  public_url?: string;
};

export type PropsObject = {
  분류: {
    id: string;
    type: "status";
    status: { id: string; name: string; color: TagColor };
  };
  태그: {
    id: string;
    type: "mutli_select";
    multi_select: {
      id: string;
      name: string;
      color: TagColor;
    }[];
  };
  제목: { id: "title"; type: "title"; title: [{ plain_text: string }] };
  소개: {
    id: string;
    type: "rich_text";
    rich_text: { plain_text: string }[];
  };
};

export type PostInfoObject = {};
