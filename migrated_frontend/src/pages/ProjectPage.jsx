
import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useSearchParams,
} from "react-router-dom";

import ProjectHeader from "../component/project_template_code/ProjectHeader.jsx";
import OverviewSection from "../component/project_template_code/OverviewSection.jsx";
import ProjectDetailsSection from "../component/project_template_code/ProjectDetailsSection.jsx";
import MediaGallerySection from "../component/project_template_code/MediaGallerySection.jsx";

import { getProjectById } from "../api/projects";

// Frontend images
import { projectImages } from "../data/projectImages";

export default function ProjectPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const projectId = searchParams.get("id");

  /*
   * Store the page from which the user opened the project
   * and the exact scroll position on that page.
   */
  const previousPath =
    location.state?.from || "/";

  const previousScrollY =
    typeof location.state?.scrollY === "number"
      ? location.state.scrollY
      : 0;

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) {
        setError("Project ID is missing.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const data = await getProjectById(projectId);

        console.log("Project response:", data);

        setProject(data);
      } catch (error) {
        console.error("Project fetch error:", error);

        setError(
          error?.response?.data?.detail ||
            "Failed to load project."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fbf8f3]">
        <p className="text-gray-600">
          Loading project...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fbf8f3]">
        <p className="text-red-500">
          {error}
        </p>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fbf8f3]">
        <p className="text-gray-600">
          Project not found.
        </p>
      </main>
    );
  }

  const mainImage = projectImages[project.slug];

  const header = project.header || {};
  const overview = project.overview || {};
  const details = project.details || {};
  const mediaGallery = project.mediaGallery || {};

  const detailContent = Array.isArray(details.content)
    ? details.content
        .map((item) => item.text)
        .filter(Boolean)
    : [];

  return (
    <main className="w-full min-h-screen bg-[#fbf8f3] text-gray-900 font-sans">

      {/* ================================
          BACK BUTTON
      ================================= */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          to={previousPath}
          state={{
            restoreScrollY: previousScrollY,
          }}
          aria-label="Back"
          className="group inline-block text-gray-500 transition-colors duration-300 hover:text-yellow-500"
        >
          <span className="mt-15 inline-block text-lg transition-transform duration-300 group-hover:-translate-x-1 sm:text-xl md:text-2xl">
            ←
          </span>
        </Link>
      </div>

      {/* ================================
          PROJECT HEADER
      ================================= */}
      <ProjectHeader
        title={header.title}
      />

      {/* ================================
          PROJECT OVERVIEW
      ================================= */}
      <OverviewSection
        mainImage={mainImage}
        developer={overview.developer}
        location={overview.location}
      />

      {/* ================================
          PROJECT DETAILS
      ================================= */}
      <ProjectDetailsSection
        title={details.title}
        paragraphs={detailContent}
      />

      {/* ================================
          MEDIA GALLERY
      ================================= */}
      <MediaGallerySection
        projectView={{
          title: "Project View",
          images: [
            mainImage,
            ...(mediaGallery.projectView || []),
          ].filter(Boolean),
        }}
      />

    </main>
  );
}
