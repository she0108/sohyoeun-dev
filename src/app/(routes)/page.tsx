import AboutSection from "@/components/Home/AboutSection";
import PostSection from "@/components/Home/PostSection";
import ProfileSection from "@/components/Home/ProfileSection";
import ProjectSection from "@/components/Home/ProjectSection";
import SearchSection from "@/components/common/SearchSection";
import TagSection from "@/components/common/TagSection";

export default function Home() {
  return (
    <main className="w-dvw md:w-[720px] lg:w-[1080px] h-full px-10 md:mx-auto my-20 grid md:grid-cols-7 gap-10">
      <div className="md:col-span-2 grid grid-cols-2 md:flex md:flex-col gap-6">
        <ProfileSection />
        <div className="flex flex-col gap-6">
          <SearchSection />
          <TagSection />
        </div>
      </div>
      <div className="md:col-span-5 flex flex-col gap-8 overflow-y-auto">
        {/* <AboutSection /> */}
        <ProjectSection />
        <PostSection />
      </div>
    </main>
  );
}
