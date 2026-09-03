import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <Link
      to={`/project/${project.slug}`}
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

        <img
          src={project.image}
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
            ARROW
        ========================== */}
        

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

          {/* Location */}
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

          {/* View More */}
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