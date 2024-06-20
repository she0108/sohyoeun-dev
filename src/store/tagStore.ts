import { TagColor } from "@/types/notion-color";
import { create } from "zustand";

interface Tag {
  name: string;
  color: TagColor;
}

interface TagState {
  tag: Tag | null;
  setTag: (tag: Tag) => void;
  resetTag: () => void;
}

const useTagStore = create<TagState>()((set) => ({
  tag: null,
  setTag: (tag: Tag) => set(() => ({ tag: tag })),
  resetTag: () => set(() => ({ tag: null })),
}));

export default useTagStore;
