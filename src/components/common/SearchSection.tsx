import HeaderTextSmall from "./HeaderTextSmall";

function SearchSection() {
  return (
    <div>
      <HeaderTextSmall>🔍 Search</HeaderTextSmall>
      <input
        placeholder="검색어를 입력하세요"
        className="text-base w-full mt-2 px-4 py-2 bg-neutral-100 rounded-2xl focus:outline-none"
      />
    </div>
  );
}

export default SearchSection;
