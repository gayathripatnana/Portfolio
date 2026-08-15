import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className="card-glass group flex h-full flex-col rounded-2xl p-6 text-left transition-colors hover:border-accent-2/50"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-fg-strong">{project.name}</h3>
          <p className="mt-1 text-sm text-accent-3">{project.tagline}</p>
        </div>
        <FiArrowUpRight className="mt-1 shrink-0 text-lg text-ghost transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-2" />
      </div>

      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-md bg-surface-3 px-2 py-1 font-mono text-[11px] text-muted"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="rounded-md bg-surface-3 px-2 py-1 font-mono text-[11px] text-ghost">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-4 text-xs">
        <span className="text-ghost">{project.org ?? 'Independent'}</span>
        <span className="font-mono text-accent-2">{project.date}</span>
      </div>
    </motion.button>
  );
}
