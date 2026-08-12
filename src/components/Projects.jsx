import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import CaseStudyPanel from './CaseStudyPanel';

export default function Projects() {
  const [openProjectId, setOpenProjectId] = useState(null);

  function handleToggleCaseStudy(id) {
    setOpenProjectId((current) => (current === id ? null : id));
  }

  const openProject = projects.find((p) => p.id === openProjectId) ?? null;

  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <h2 className="font-display text-center text-3xl uppercase tracking-widest mb-4 text-white">
        Featured <span className="text-purple-500">Projects</span>
      </h2>
      <p className="text-center text-slate-400 text-sm max-w-xl mx-auto mb-12">
        Full-stack applications I've built, contributed to, and deployed end to end.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOpen={openProjectId === project.id}
            onToggleCaseStudy={handleToggleCaseStudy}
          />
        ))}
      </div>

      {openProject && (
        <CaseStudyPanel project={openProject} onClose={() => setOpenProjectId(null)} />
      )}
    </section>
  );
}
