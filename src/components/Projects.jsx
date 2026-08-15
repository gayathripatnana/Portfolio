import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/resumeData';

export default function Projects() {
  const [active, setActive] = useState(null);
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return undefined;

    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, []);

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    const amount = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="relative">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {projects.map((p, i) => (
            <div
              key={p.id}
              data-card
              className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
            >
              <ProjectCard project={p} index={i} onOpen={setActive} />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous project"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          className="absolute left-0 top-[45%] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface-2/90 p-2.5 text-fg backdrop-blur transition-all hover:border-accent-2/60 hover:text-accent-2 disabled:pointer-events-none disabled:opacity-0 sm:flex"
        >
          <FiChevronLeft className="text-lg" />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          className="absolute right-0 top-[45%] hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-line bg-surface-2/90 p-2.5 text-fg backdrop-blur transition-all hover:border-accent-2/60 hover:text-accent-2 disabled:pointer-events-none disabled:opacity-0 sm:flex"
        >
          <FiChevronRight className="text-lg" />
        </button>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
