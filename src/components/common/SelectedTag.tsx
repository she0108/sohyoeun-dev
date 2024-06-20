import { TagColor } from "../../types/notion-color";
import useTagStore from "@/store/tagStore";

interface SelectedTagProps {
  children: string;
  color: TagColor;
}

// TODO
function colorToClassName(color: TagColor) {
  switch (color) {
    case "blue":
      return "bg-blue-200/60 hover:bg-blue-200/90 text-blue-900 px-3 py-0.5 rounded-md text-sm";
    case "brown":
      return "bg-rose-200/60 hover:bg-rose-200/90 text-rose-900 px-3 py-0.5 rounded-md text-sm";
    case "default":
      return "bg-neutral-200/60 hover:bg-neutral-200/90 text-neutral-900/80 px-3 py-0.5 rounded-md text-sm";
    case "gray":
      return "bg-neutral-200/90 hover:bg-neutral-300/90 text-neutral-900/80 px-3 py-0.5 rounded-md text-sm";
    case "green":
      return "bg-green-bg/60 hover:bg-green-bg/90 text-green-tx px-3 py-0.5 rounded-md text-sm";
    case "orange":
      return "bg-orange-200/60 hover:bg-orange-200/90 text-orange-900 px-3 py-0.5 rounded-md text-sm";
    case "pink":
      return "bg-pink-200/60 hover:bg-pink-200/90 text-pink-900 px-3 py-0.5 rounded-md text-sm";
    case "purple":
      return "bg-purple-bg/60 hover:bg-purple-bg/90 text-purple-tx px-3 py-0.5 rounded-md text-sm";
    case "red":
      return "bg-red-200/60 hover:bg-red-200/90 text-red-900 px-3 py-0.5 rounded-md text-sm";
    case "yellow":
      return "bg-amber-200/60 hover:bg-amber-200/90 text-amber-900 px-3 py-0.5 rounded-md text-sm";
  }
}

function SelectedTag({ children, color }: SelectedTagProps) {
  const { resetTag } = useTagStore();

  return (
    <button className={colorToClassName(color)} onClick={resetTag}>
      {children} x
    </button>
  );
}

export default SelectedTag;
