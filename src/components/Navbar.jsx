import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { profile } from '../data/resumeData';
import { useTheme } from '../hooks/useTheme';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-line/60' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-fg-strong">
          PG<span className="text-accent-2">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-fg-strong"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent-2 hover:text-accent-2"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-line px-4 py-2 text-sm font-medium text-fg-strong transition-colors hover:border-accent-2 hover:text-accent-2 md:inline-block"
          >
            Resume
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="text-fg-strong md:hidden"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line/60 bg-ink/95 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-muted hover:text-fg-strong"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-line px-4 py-2 text-sm font-medium text-fg-strong"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
