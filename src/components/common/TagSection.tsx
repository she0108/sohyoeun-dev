import HeaderTextSmall from "./HeaderTextSmall";
import Tag from "./Tag";

function TagSection() {
  return (
    <div>
      <HeaderTextSmall>🏷️ Tags</HeaderTextSmall>
      <div className="mt-2 flex flex-wrap gap-2">
        <Tag color="default">React</Tag>
        <Tag color="default">tailwindcss</Tag>
        <Tag color="default">Javascript</Tag>
        <Tag color="default">Next.js</Tag>
        <Tag color="default">TypeScript</Tag>
        <Tag color="default">Frontend</Tag>
        <Tag color="default">OS</Tag>
      </div>
    </div>
  );
}

export default TagSection;
