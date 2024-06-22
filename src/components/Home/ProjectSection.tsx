"use client";

import { useEffect, useState } from "react";
import HeaderTextLarge from "../common/HeaderTextLarge";
import ProjectContainer from "./ProjectContainer";
import RouterButton from "../common/RouterButton";

function ProjectSection() {
  const [projects, setProjects] = useState<React.ReactElement[] | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/database/projects?size=3", {
        method: "POST",
        cache: "force-cache",
        next: { revalidate: 3600 },
      });
      const json = await response.json();

      console.log(json);

      const projectObjects = json.projects;

      const projectElements: React.ReactElement[] = [];
      for (let project of projectObjects) {
        projectElements.push(
          <ProjectContainer key={project.id} project={project} />
        );
      }
      setProjects(projectElements);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-end">
        <HeaderTextLarge>🖥️ Projects</HeaderTextLarge>
        <RouterButton to="/projects">more -&gt;</RouterButton>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-3">
        {projects ? projects : skeleton}
      </div>
    </div>
  );
}

export default ProjectSection;

const skeleton = [
  <div
    key={0}
    className="w-full h-64 bg-neutral-100 rounded-3xl flex flex-col overflow-hidden animate-pulse"
  />,
  <div
    key={1}
    className="w-full h-64 bg-neutral-100 rounded-3xl flex flex-col overflow-hidden animate-pulse"
  />,
  <div
    key={2}
    className="w-full h-64 bg-neutral-100 rounded-3xl flex flex-col overflow-hidden animate-pulse"
  />,
];
