import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {eyebrow && (
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent-2">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight text-fg-strong sm:text-4xl">
              {title}
            </h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
