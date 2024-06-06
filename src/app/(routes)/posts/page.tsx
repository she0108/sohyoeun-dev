import ListSection from "@/components/Posts/ListSection";
import RouterButton from "@/components/common/RouterButton";
import SearchSection from "@/components/common/SearchSection";
import TagSection from "@/components/common/TagSection";

function PostListPage() {
  return (
    <div className="w-dvw h-dvh bg-white flex overflow-hidden">
      <main className="w-[1080px] h-full mx-auto my-20 grid grid-cols-3 gap-10">
        <div className="flex flex-col gap-6">
          <RouterButton to="/">&lt;- Home</RouterButton>
          <SearchSection />
          <TagSection />
        </div>
        <div className="col-span-2 flex flex-col gap-8 overflow-y-auto">
          <ListSection />
        </div>
      </main>
    </div>
  );
}

export default PostListPage;
