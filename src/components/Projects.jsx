import { useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/resumeData';

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
