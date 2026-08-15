import { motion } from 'framer-motion';
import Section from './Section';
import { experience } from '../data/resumeData';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="relative flex flex-col gap-10 border-l border-line pl-8 sm:pl-10">
        {experience.map((job, i) => (
          <motion.div
            key={job.org + job.date}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-accent-2 shadow-[0_0_0_4px_rgba(94,184,255,0.15)] sm:-left-[3.05rem]" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-fg-strong">{job.role}</h3>
              <span className="font-mono text-xs text-accent-3">{job.date}</span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-accent-2">
              {job.orgLink ? (
                <a
                  href={job.orgLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent-3 hover:underline"
                >
                  {job.org}
                </a>
              ) : (
                job.org
              )}
            </p>
            <p className="text-xs text-ghost">{job.location}</p>

            <ul className="mt-4 flex flex-col gap-2.5">
              {job.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ghost" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
