
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { projectImages } from "../data/projectImages";

export default function ProjectCard({ project, index }) {

  // Get image from frontend using backend project slug
  const image = projectImages[project.slug];

  return (
    <Link
      to={`/project?id=${project.id}&from=${project.category_id}`}
      className="
        group
        relative
        block
        h-[420px]
        w-full
        overflow-hidden
        rounded-[28px]
        sm:h-[440px]
        lg:h-[460px]
      "
    >
      {/* =========================
          IMAGE
      ========================== */}
      <div className="relative h-full w-full overflow-hidden">

        {image ? (
          <img
            src={image}
            alt={project.title}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-105
            "
          />
        ) : (
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-gray-300
              text-gray-600
            "
          >
            No image available
          </div>
        )}

        {/* =========================
            DARK OVERLAY
        ========================== */}
        <div
          className="
            absolute
            inset-0
            bg-black/20
            transition-all
            duration-700
            group-hover:bg-black/40
          "
        />

        {/* =========================
            BOTTOM GRADIENT
        ========================== */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/20
            to-transparent
          "
        />

        {/* =========================
            PROJECT NUMBER
        ========================== */}
        <div
          className="
            absolute
            left-6
            top-6
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/20
            text-sm
            text-white
            backdrop-blur-md
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* =========================
            PROJECT CONTENT
        ========================== */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-7
            text-white
            md:p-8
          "
        >

          {/* =========================
              CATEGORY
          ========================== */}
          <p
            className="
              mb-3
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/60
            "
          >
            {project.category_id === 3
              ? "Completed"
              : project.category_id === 4
              ? "Ongoing"
              : project.category_id === 5
              ? "Upcoming"
              : ""}
          </p>

          {/* =========================
              TITLE
          ========================== */}
          <h3
            className="
              text-2xl
              font-semibold
              tracking-tight
              transition-transform
              duration-500
              group-hover:-translate-y-1
              sm:text-3xl
              lg:text-4xl
            "
          >
            {project.title}
          </h3>

          {/* =========================
              LOCATION
          ========================== */}
          {project.location && (
            <p
              className="
                mt-3
                text-sm
                text-white/60
              "
            >
              {project.location}
            </p>
          )}

          {/* =========================
              VIEW MORE
          ========================== */}
          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              text-sm
              font-medium
              text-yellow-400
              transition-all
              duration-300
              group-hover:gap-3
            "
          >
            View Project

            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
            />
          </div>

        </div>
      </div>
    </Link>
  );
}

