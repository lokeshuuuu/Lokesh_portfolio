import React, { useEffect } from 'react';
import ProjectItem from './ProjectItem';
import ScrollReveal from 'scrollreveal';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    ScrollReveal().reveal('.projects-heading', {
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      easing: 'ease-in-out'
    });
    ScrollReveal().reveal('.project-item', {
      delay: 400,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      easing: 'ease-in-out',
      interval: 200 // Stagger animation for multiple project items
    });
  }, []);

  const projectsData = [
    { id: 1, title: 'Project Title 1', description: 'Description of Project 1.', link: '#' },
    { id: 2, title: 'Project Title 2', description: 'Description of Project 2.', link: '#' },
    { id: 3, title: 'Project Title 3', description: 'Description of Project 3.', link: '#' },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};


export default Projects; // Added comment to force re-compilation