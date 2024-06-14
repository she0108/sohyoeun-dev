import { NumberedListBlockObjectResponse } from "@/types/notion-api";
import Renderer from "../Renderer";

interface NumberedListBlockProps {
  children: NumberedListBlockObjectResponse;
}

function NumberedListBlock({ children }: NumberedListBlockProps) {
  const items = children.numbered_list.children;

  return (
    <ul className="text-xl mt-3">
      {items.map((item, index) => (
        <Renderer key={index} block={item} />
      ))}
    </ul>
  );
}

export default NumberedListBlock;
