import { TagColor } from "./TagColor";

export interface MultiSelectPropResponse {
  id: string;
  name: string;
  type: "multi_select";
  multi_select: {
    options: { name: string; color: TagColor }[];
  };
}
