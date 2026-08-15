import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  const links = project?.links ?? (project?.link ? [{ label: project.linkLabel, href: project.link }] : []);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-3xl border border-line bg-surface p-8 shadow-2xl sm:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 rounded-full border border-line p-2 text-muted transition-colors hover:border-accent-2 hover:text-fg-strong"
            >
              <FiX />
            </button>

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-3">
              {project.date}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-fg-strong sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1 text-base text-accent-2">{project.tagline}</p>
            {project.org && (
              <p className="mt-1 text-sm text-ghost">
                {project.orgLink ? (
                  <a
                    href={project.orgLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent-2 hover:underline"
                  >
                    {project.org}
                  </a>
                ) : (
                  project.org
                )}
              </p>
            )}
            {project.client && (
              <p className="mt-1 text-sm text-ghost">Client: {project.client}</p>
            )}

            {links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-fg-strong transition-colors hover:border-accent-2 hover:text-accent-2"
                  >
                    {l.label} <FiExternalLink size={12} />
                  </a>
                ))}
              </div>
            )}

            <p className="mt-7 text-sm leading-relaxed text-muted">{project.summary}</p>

            <div className="mt-7">
              <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-accent-2">
                Key contributions
              </h4>
              <ul className="flex flex-col gap-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-3" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {project.role && (
              <div className="mt-7 rounded-xl border border-line bg-surface-2 px-5 py-4">
                <p className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-3">
                  My role
                </p>
                <p className="text-sm text-muted">{project.role}</p>
              </div>
            )}

            <div className="mt-7">
              <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-accent-2">
                Tech stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-surface-3 px-2.5 py-1.5 font-mono text-xs text-fg-strong"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
