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
      return "bg-blue-300/70 hover:bg-blue-400/70 text-blue-900 pl-3 pr-2 py-0.5 rounded-md text-sm whitespace-pre";
    case "brown":
      return "bg-rose-300/70 hover:bg-rose-400/70 text-rose-900 pl-3 pr-2 py-0.5 rounded-md text-sm whitespace-pre";
    case "default":
      return "bg-neutral-300/70 hover:bg-neutral-400/70 text-neutral-900/80 pl-3 pr-2 py-0.5 rounded-md text-sm whitespace-pre";
    case "gray":
      return "bg-neutral-300/70 hover:bg-neutral-300 text-neutral-900/80 pl-3 pr-2 py-0.5 rounded-md text-sm whitespace-pre";
    case "green":
      return "bg-green-bg/70 hover:bg-green-bg text-green-tx pl-3 pr-2 py-0.5 rounded-md text-sm whitespace-pre";
    case "orange":
      return "bg-orange-300/70 hover:bg-orange-400/70 text-orange-900 pl-3 pr-2 py-0.5 rounded-md text-sm whitespace-pre";
    case "pink":
      return "bg-pink-300/70 hover:bg-pink-400/70 text-pink-900 pl-3 pr-2 py-0.5 rounded-md text-sm whitespace-pre";
    case "purple":
      return "bg-purple-bg/70 hover:bg-purple-bg text-purple-tx pl-3 pr-2 py-0.5 rounded-md text-sm whitespace-pre";
    case "red":
      return "bg-red-300/70 hover:bg-red-400/70 text-red-900 pl-3 pr-2 py-0.5 rounded-md text-sm whitespace-pre";
    case "yellow":
      return "bg-amber-300/70 hover:bg-amber-400/70 text-amber-900 pl-3 pr-2 py-0.5 rounded-md text-sm whitespace-pre";
  }
}

function SelectedTag({ children, color }: SelectedTagProps) {
  const { resetTag } = useTagStore();

  return (
    <button className={colorToClassName(color)} onClick={resetTag}>
      {children}
      {"  ⨯"}
    </button>
  );
}

export default SelectedTag;
