import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Section from './Section';
import { profile } from '../data/resumeData';

const FACTS = [
  { icon: FiMapPin, label: profile.location },
  { icon: FiPhone, label: profile.phone, href: profile.phoneHref },
  { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-lg leading-relaxed text-muted"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-glass flex flex-col gap-4 rounded-2xl p-6"
        >
          {FACTS.map((f) => (
            <a
              key={f.label}
              href={f.href}
              className="flex items-center gap-3 text-sm text-fg-strong transition-colors hover:text-accent-2"
            >
              <f.icon className="shrink-0 text-accent-3" />
              <span className="break-all">{f.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
