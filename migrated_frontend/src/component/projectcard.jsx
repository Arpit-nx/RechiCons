import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className="group relative block h-full w-full overflow-hidden rounded-[28px]"
    >
      {/* =========================
          IMAGE
      ========================== */}
      <div className="relative h-full w-full overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-1000
            ease-out
            group-hover:scale-105
          "
        />

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
            from-black/80
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
            ARROW
        ========================== */}
        <div
          className="
            absolute
            right-6
            top-6
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-white/10
            text-white
            backdrop-blur-md
            transition-all
            duration-500
            group-hover:rotate-45
            group-hover:bg-white
            group-hover:text-black
          "
        >
          <ArrowUpRight
            size={20}
            strokeWidth={1.5}
          />
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
            md:p-10
          "
        >

          {/* Category */}
          <p
            className="
              mb-3
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/60
            "
          >
            {project.category}
          </p>

          {/* Title */}
          <h3
            className="
              text-4xl
              font-semibold
              tracking-tight
              transition-transform
              duration-500
              group-hover:-translate-y-1
              md:text-5xl
            "
          >
            {project.title}
          </h3>

          {/* Location */}
          <p
            className="
              mt-3
              text-sm
              text-white/60
            "
          >
            {project.location}
          </p>

        </div>

      </div>
    </Link>
  );
}