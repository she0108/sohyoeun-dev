import Image from "next/image";
import Tag from "../common/Tag";
import { TagColor } from "@/types/notion-color";
import Link from "next/link";

interface ProjectContainerProps {
  project: any;
}

function ProjectContainer({ project }: ProjectContainerProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="w-full h-auto bg-neutral-100 rounded-3xl flex flex-col overflow-hidden">
        <div className="w-full h-48 rounded-t-3xl relative">
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

        <div className="mx-6 mt-2 mb-5 flex flex-wrap gap-2">
          {project.skills.map((skill: { name: string; color: TagColor }) => (
            <Tag key={skill.name} color={skill.color}>
              {skill.name}
            </Tag>
          ))}
          {project.tags.map((tag: { name: string; color: TagColor }) => (
            <Tag key={tag.name} color={tag.color}>
              {tag.name}
            </Tag>
          ))}
        </div>
        {/* <h5 className="text-xs font-light text-neutral-400 mx-6 mt-2 whitespace-pre">
      {project.description2}
    </h5> */}
      </div>
    </Link>
  );
}

export default ProjectContainer;
