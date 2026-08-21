import { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import CaseStudyPanel from './CaseStudyPanel';
import SectionHeading from './SectionHeading';

function getColumnCount() {
  if (typeof window === 'undefined') return 1;
  if (window.matchMedia('(min-width: 1024px)').matches) return 3;
  if (window.matchMedia('(min-width: 768px)').matches) return 2;
  return 1;
}

function useColumnCount() {
  const [columns, setColumns] = useState(getColumnCount);

  useEffect(() => {
    const mqLg = window.matchMedia('(min-width: 1024px)');
    const mqMd = window.matchMedia('(min-width: 768px)');
    function update() {
      setColumns(getColumnCount());
    }
    mqLg.addEventListener('change', update);
    mqMd.addEventListener('change', update);
    return () => {
      mqLg.removeEventListener('change', update);
      mqMd.removeEventListener('change', update);
    };
  }, []);

  return columns;
}

export default function Projects() {
  const [openProjectId, setOpenProjectId] = useState(null);
  const columns = useColumnCount();

  function handleToggleCaseStudy(id) {
    setOpenProjectId((current) => (current === id ? null : id));
  }

  const openProject = projects.find((p) => p.id === openProjectId) ?? null;

  const rows = [];
  for (let i = 0; i < projects.length; i += columns) {
    rows.push(projects.slice(i, i + columns));
  }

  return (
    <section id="projects" className="scroll-mt-24 pt-4">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected work"
        description="Full-stack applications I've built, contributed to, and deployed end to end."
      />

      <div className="mt-6 space-y-4">
        {rows.map((row, rowIndex) => {
          const rowHasOpenProject = row.some((project) => project.id === openProjectId);
          return (
            <div key={rowIndex} className="space-y-4">
              <div
                className="grid gap-4 items-stretch"
                style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
              >
                {row.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isOpen={openProjectId === project.id}
                    onToggleCaseStudy={handleToggleCaseStudy}
                  />
                ))}
              </div>

              {rowHasOpenProject && openProject && (
                <CaseStudyPanel project={openProject} onClose={() => setOpenProjectId(null)} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
