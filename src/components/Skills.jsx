import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from './Section';
import { skills, certifications } from '../data/resumeData';
import { skillIcons } from '../data/skillIcons';

function SkillTile({ item, index }) {
  const Icon = skillIcons[item];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: (index % 12) * 0.03 }}
      whileHover={{ y: -3 }}
      className="card-glass flex flex-col items-center gap-2.5 rounded-xl px-3 py-5 text-center transition-colors hover:border-accent-2/50"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-3 text-2xl text-accent-2">
        {Icon ? <Icon /> : <span className="text-xs font-semibold text-muted">{item[0]}</span>}
      </span>
      <span className="text-xs font-medium text-muted">{item}</span>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(skills[0].label);
  const activeGroup = skills.find((g) => g.label === active);

  return (
    <Section id="skills" eyebrow="Skills" title="Tools & technologies I work with">
      <div className="mb-8 flex flex-wrap gap-2">
        {skills.map((group) => (
          <button
            key={group.label}
            onClick={() => setActive(group.label)}
            className={`rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-colors ${
              active === group.label
                ? 'bg-surface-3 text-accent-2'
                : 'border border-line text-muted hover:text-fg-strong'
            }`}
          >
            {group.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
        >
          {activeGroup.items.map((item, i) => (
            <SkillTile key={item} item={item} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-16">
        <h3 className="mb-6 text-xl font-semibold text-fg-strong">Courses & Certifications</h3>
        <div className="grid gap-5 sm:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-glass flex flex-col gap-2 rounded-2xl p-6"
            >
              <h4 className="text-sm font-semibold text-fg-strong">{c.title}</h4>
              <p className="text-xs text-accent-3">
                {c.issuer} · {c.date}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{c.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
