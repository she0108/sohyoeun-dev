import { BulletedListBlockObjectResponse } from "@/types/notion-api";
import Renderer from "../Renderer";

interface BulletedListBlockProps {
  children: BulletedListBlockObjectResponse;
}

function BulletedListBlock({ children }: BulletedListBlockProps) {
  const items = children.bulleted_list.children;

  return (
    <ul className="text-xl mt-3">
      {items.map((item, index) => (
        <Renderer key={index} block={item} />
      ))}
    </ul>
  );
}

export default BulletedListBlock;
