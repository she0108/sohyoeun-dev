import HeaderTextLarge from "../common/HeaderTextLarge";
import Tag from "../common/Tag";

function ListSection() {
  return (
    <div>
      <HeaderTextLarge>📂 Posts</HeaderTextLarge>
      <div className="flex flex-col gap-5 mt-3">
        <div className="w-full h-min bg-neutral-100 rounded-3xl p-6">
          <h3 className="text-xl font-medium mb-1">
            React(+Vite)에 TailwindCSS 더하기
          </h3>
          <p className="text-base font-normal text-neutral-500 mb-2">
            요즘 사람들이 가장 많이 사용하는 CSS 프레임워크, 설치부터 활용까지
            모두 알아보자
          </p>
          <div className="flex gap-2">
            <span className="text-sm text-neutral-400 mr-2">
              2024년 6월 5일
            </span>
            <Tag color="default">React</Tag>
            <Tag color="default">tailwindcss</Tag>
          </div>
        </div>
        <div className="w-full h-min bg-neutral-100 rounded-3xl p-6">
          <h3 className="text-xl font-medium mb-1">
            React(+Vite)에 TailwindCSS 더하기
          </h3>
          <p className="text-base font-normal text-neutral-500 mb-2">
            요즘 사람들이 가장 많이 사용하는 CSS 프레임워크, 설치부터 활용까지
            모두 알아보자
          </p>
          <div className="flex gap-2">
            <span className="text-sm text-neutral-400 mr-2">
              2024년 6월 5일
            </span>
            <Tag color="default">React</Tag>
            <Tag color="default">tailwindcss</Tag>
          </div>
        </div>
        <div className="w-full h-min bg-neutral-100 rounded-3xl p-6">
          <h3 className="text-xl font-medium mb-1">
            React(+Vite)에 TailwindCSS 더하기
          </h3>
          <p className="text-base font-normal text-neutral-500 mb-2">
            요즘 사람들이 가장 많이 사용하는 CSS 프레임워크, 설치부터 활용까지
            모두 알아보자
          </p>
          <div className="flex gap-2">
            <span className="text-sm text-neutral-400 mr-2">
              2024년 6월 5일
            </span>
            <Tag color="default">React</Tag>
            <Tag color="default">tailwindcss</Tag>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListSection;
