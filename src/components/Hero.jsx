import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/resumeData';
import profileImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-noise grain relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 sm:px-8 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 font-mono text-xs text-accent-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-3 shadow-[0_0_8px_2px_rgba(126,240,209,0.7)]" />
            Available for AI/ML engineering work
          </p>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-fg-strong sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name.split(' ').slice(1).join(' ')} —<br />
            <span className="text-gradient">{profile.title}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-invert px-6 py-3 text-sm font-semibold text-invert-fg transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-fg-strong transition-colors hover:border-accent-2 hover:text-accent-2"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-xl text-ghost transition-colors hover:text-fg-strong"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-xl text-ghost transition-colors hover:text-fg-strong"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-xl text-ghost transition-colors hover:text-fg-strong"
            >
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 scale-90 rounded-[2rem] bg-gradient-to-br from-accent-2/30 via-accent/20 to-accent-3/20 blur-2xl" />
          <div className="card-glass overflow-hidden rounded-[2rem] p-3">
            <img
              src={profileImg}
              alt={profile.name}
              className="aspect-[4/5] w-full rounded-[1.4rem] object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 whitespace-nowrap rounded-2xl border border-line bg-surface px-5 py-3 shadow-2xl">
            <p className="text-2xl font-semibold text-fg-strong">10+</p>
            <p className="text-xs text-muted">Shipped AI products</p>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-ghost sm:flex"
      >
        Scroll
        <FiArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
