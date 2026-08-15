import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from '../data/resumeData';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-6xl px-6 pb-28 pt-10 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="card-glass relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16"
      >
        <div className="bg-noise pointer-events-none absolute inset-0" />
        <p className="relative font-mono text-xs uppercase tracking-[0.3em] text-accent-2">
          Get in touch
        </p>
        <h2 className="relative mt-3 text-3xl font-semibold text-fg-strong sm:text-4xl">
          Let&apos;s build something{' '}
          <span className="text-gradient">intelligent</span> together.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-muted">
          Open to AI/ML engineering roles, freelance builds, and interesting collaborations.
          Reach out and I&apos;ll get back to you soon.
        </p>

        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-invert px-6 py-3 text-sm font-semibold text-invert-fg transition-transform hover:-translate-y-0.5"
          >
            {profile.email} <FiArrowUpRight />
          </a>
        </div>

        <div className="relative mt-8 flex items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-ghost transition-colors hover:text-fg-strong"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-ghost transition-colors hover:text-fg-strong"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>
      </motion.div>

      <footer className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line/60 pt-8 text-xs text-ghost sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
    </section>
  );
}
