import HeaderTextLarge from "../common/HeaderTextLarge";

function ProjectSection() {
  return (
    <div>
      <HeaderTextLarge>🖥️ Projects</HeaderTextLarge>
      <div className="grid grid-cols-2 gap-5 mt-3">
        <div className="w-full h-32 bg-neutral-100 rounded-3xl"></div>
        <div className="w-full h-32 bg-neutral-100 rounded-3xl"></div>
      </div>
    </div>
  );
}

export default ProjectSection;
