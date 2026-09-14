import { useEffect, useState } from "react";
import ProjectCard from "../component/projectcard";
import { getProjects } from "../api/projects";

export default function OngoingProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProjects();

        setProjects(data);
      } catch (error) {
        console.error("Projects fetch error:", error);

        setError(
          error?.response?.data?.detail ||
            "Failed to load projects."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const ongoingProjects = projects.filter(
    (project) => project.category_id === 4
  );

  if (loading) {
    return (
      <div className="min-h-screen px-6 py-20 text-center">
        Loading ongoing projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen px-6 py-20 text-center text-red-500">
        {error}
      </div>
    );
  }

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