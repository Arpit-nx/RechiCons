import ProjectCard from "../component/projectcard";
import { projectsData } from "./data/projectfile";

export default function OngoingProjects() {
  const ongoingProjects = projectsData.filter(
    (project) => project.category === "Ongoing"
  );

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-3 text-center text-3xl font-bold">
          Ongoing Projects
        </h1>

        <p className="mb-12 text-center text-gray-600">
          Explore our ongoing projects.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ongoingProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </div>
  );
}