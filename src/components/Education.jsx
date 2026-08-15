import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import Section from './Section';
import { education } from '../data/resumeData';

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid gap-5 sm:grid-cols-3">
        {education.map((ed, i) => (
          <motion.div
            key={ed.school + ed.date}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-glass flex flex-col gap-3 rounded-2xl p-6"
          >
            <FiAward className="text-2xl text-accent-3" />
            <h3 className="text-base font-semibold text-fg-strong">{ed.school}</h3>
            <p className="text-sm text-muted">{ed.degree}</p>
            <div className="mt-auto flex items-center justify-between pt-3 text-xs">
              <span className="text-ghost">{ed.date}</span>
              <span className="rounded-full bg-surface-3 px-2.5 py-1 font-mono font-medium text-accent-2">
                {ed.score}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
