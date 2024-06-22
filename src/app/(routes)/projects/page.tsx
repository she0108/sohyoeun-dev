import ListSection from "@/components/Projects/ListSection";
import RouterButton from "@/components/common/RouterButton";

export const dynamic = "force-dynamic";

function ProjectListPage() {
  return (
    <div className="w-dvw h-dvh bg-white flex">
      <main className="w-[1080px] max-h-full mx-auto grid grid-cols-7 gap-10 overflow-y-visible">
        <div className="col-span-2 flex flex-col gap-6 my-20">
          <RouterButton to="/">&lt;- Home</RouterButton>
        </div>
        <div className="col-span-5 flex flex-col gap-8 py-20 overflow-y-scroll">
          <ListSection />
        </div>
      </main>
    </div>
  );
}

export default ProjectListPage;
