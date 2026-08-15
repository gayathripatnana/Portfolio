import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiDownload } from 'react-icons/fi';
import { profile } from '../data/resumeData';

export default function ResumeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line/60 px-5 py-3">
              <p className="text-sm font-medium text-fg-strong">Resume — {profile.name}</p>
              <div className="flex items-center gap-2">
                <a
                  href={profile.resumeFile}
                  download
                  aria-label="Download resume"
                  className="rounded-full border border-line p-2 text-muted transition-colors hover:border-accent-2 hover:text-fg-strong"
                >
                  <FiDownload />
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="rounded-full border border-line p-2 text-muted transition-colors hover:border-accent-2 hover:text-fg-strong"
                >
                  <FiX />
                </button>
              </div>
            </div>
            <iframe
              src={profile.resumeFile}
              title={`${profile.name} — Resume`}
              className="h-full w-full flex-1 bg-white"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
