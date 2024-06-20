import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { TagColor } from "./notion-color";

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

export type BulletedListBlockObjectResponse = {
  id: string;
  type: "bulleted_list";
  bulleted_list: {
    children: BlockWithChildren[];
  };
};

export type NumberedListBlockObjectResponse = {
  id: string;
  type: "numbered_list";
  numbered_list: {
    children: BlockWithChildren[];
  };
};

export type BlockWithChildren = (
  | BlockObjectResponse
  | BulletedListBlockObjectResponse
  | NumberedListBlockObjectResponse
) & {
  children?: BlockObjectResponse[];
};

export type ProjectPageObject = {
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
  properties: ProjectPropsObject;
  url: string;
  public_url?: string;
};

export type ProjectPropsObject = {
  상태: {
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
  이름: { id: "title"; type: "title"; title: [{ plain_text: string }] };
  소개1: {
    id: string;
    type: "rich_text";
    rich_text: { plain_text: string }[];
  };
  소개2: {
    id: string;
    type: "rich_text";
    rich_text: { plain_text: string }[];
  };
  썸네일: {
    id: string;
    type: "files";
    files: {
      name: string;
      type: "file";
      file: { url: string; expiry_time: string };
    }[];
  };
  기간: {
    id: string;
    type: "date";
    date: {
      start: string;
      end: string;
      time_zone: string | null;
    };
  };
};
