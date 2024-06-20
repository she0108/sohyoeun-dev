import Image from "next/image";
import Tag from "../common/Tag";
import { TagColor } from "@/types/notion-color";

interface ProjectContainerProps {
  project: any;
}

function ProjectContainer({ project }: ProjectContainerProps) {
  return (
    <div className="w-full h-64 bg-neutral-100 rounded-3xl flex flex-col overflow-hidden">
      <div className="w-full h-36 rounded-t-3xl relative">
        <Image
          src={project.thumbnail}
          alt="project thumbnail"
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-medium mx-6 mt-4">{project.name}</h3>
      <h4 className="text-base font-normal text-neutral-500 mx-6 whitespace-pre">
        {project.description1}
      </h4>
      <h5 className="text-xs font-light text-neutral-400 mx-6 mt-2 whitespace-pre">
        {project.description2}
      </h5>
      {/* <div className="mx-6 mt-1">
        {project.tags.map((tag: { name: string; color: TagColor }) => (
          <Tag key={tag.name} color={tag.color}>
            {tag.name}
          </Tag>
        ))}
      </div> */}
    </div>
  );
}

export default ProjectContainer;
