import { NumberedListBlockObjectResponse } from "@/types/notion-api";
import Renderer from "../Renderer";

interface NumberedListBlockProps {
  children: NumberedListBlockObjectResponse;
}

function NumberedListBlock({ children }: NumberedListBlockProps) {
  const items = children.numbered_list.children;

  return (
    <ol className="list-decimal ml-5 text-xl mt-3">
      {items.map((item, index) => (
        <Renderer key={index} block={item} />
      ))}
    </ol>
  );
}

export default NumberedListBlock;
