import { TagColor } from "../../types/notion-color";

interface TagProps {
  children: string;
  color: TagColor;
}

// TODO
function colorToClassName(color: TagColor) {
  switch (color) {
    case "blue":
      return "bg-blue-200/60 hover:bg-blue-200/90 text-blue-900/80 px-3 py-0.5 rounded-md text-sm";
    case "brown":
      return "bg-rose-200/60 hover:bg-rose-200/90 text-rose-900/80 px-3 py-0.5 rounded-md text-sm";
    case "default":
      return "bg-neutral-200/60 hover:bg-neutral-200/90 text-neutral-900/80 px-3 py-0.5 rounded-md text-sm";
    case "gray":
      return "bg-neutral-200/90 hover:bg-neutral-300/90 text-neutral-900/80 px-3 py-0.5 rounded-md text-sm";
    case "green":
      return "bg-green-200/60 hover:bg-green-200/90 text-green-900/80 px-3 py-0.5 rounded-md text-sm";
    case "orange":
      return "bg-orange-200/60 hover:bg-orange-200/90 text-orange-900/80 px-3 py-0.5 rounded-md text-sm";
    case "pink":
      return "bg-pink-200/60 hover:bg-pink-200/90 text-pink-900/80 px-3 py-0.5 rounded-md text-sm";
    case "purple":
      return "bg-purple-200/60 hover:bg-purple-200/90 text-purple-900/80 px-3 py-0.5 rounded-md text-sm";
    case "red":
      return "bg-red-200/60 hover:bg-red-200/90 text-red-900/80 px-3 py-0.5 rounded-md text-sm";
    case "yellow":
      return "bg-amber-200/60 hover:bg-amber-200/90 text-amber-900/80 px-3 py-0.5 rounded-md text-sm";
  }
}

function Tag({ children, color }: TagProps) {
  return <button className={colorToClassName(color)}>{children}</button>;
}

export default Tag;
