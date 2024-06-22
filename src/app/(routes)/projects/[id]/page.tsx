import ContentSection from "@/components/Project/ContentSection";
import FrontmatterSection from "@/components/Project/FrontmatterSection";

function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <main className="w-[1080px] min-h-full mx-auto my-20 p-24 flex flex-col bg-neutral-50 rounded-3xl">
      <FrontmatterSection pageId={params.id} />
      <ContentSection pageId={params.id} />
    </main>
  );
}

export default ProjectPage;
