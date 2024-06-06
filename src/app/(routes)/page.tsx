import AboutSection from "@/components/Home/AboutSection";
import PostSection from "@/components/Home/PostSection";
import ProfileSection from "@/components/Home/ProfileSection";
import ProjectSection from "@/components/Home/ProjectSection";
import SearchSection from "@/components/common/SearchSection";
import TagSection from "@/components/common/TagSection";

export default function Home() {
  return (
    <main className="w-[1080px] h-full mx-auto my-20 grid grid-cols-3 gap-10">
      <div className="flex flex-col gap-6">
        <ProfileSection />
        <SearchSection />
        <TagSection />
      </div>
      <div className="col-span-2 flex flex-col gap-8 overflow-y-auto">
        <AboutSection />
        <ProjectSection />
        <PostSection />
      </div>
    </main>
  );
}
