import { TagColor } from "../../types/TagColor";

interface TagProps {
  children: string;
  color: TagColor;
}

// TODO
function colorToClassName(color: TagColor) {
  switch (color) {
    case "default":
      return "text-sm text-neutral-500 bg-neutral-200/80 hover:bg-neutral-300/80 rounded px-2.5";
  }
}

function Tag({ children, color }: TagProps) {
  return <div className={colorToClassName(color)}>{children}</div>;
}

export default Tag;
