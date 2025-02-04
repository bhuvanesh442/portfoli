import React from "react";

export default function Projects() {
  return (
    <div className="home-projects">
    <h2 className="home-projects-title">Projects</h2>
    <p className="home-projects-description">I’m currently working on building my portfolio with real-world projects. Stay tuned for updates!</p>
    
    <div className="home-projects-list">
        <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A responsive personal website built using **React and Tailwind CSS**.</p>
        </div>
        <div className="project-card">
            <h3>Future Project Idea</h3>
            <p>Exploring **full-stack development** by working on a **task management web app**.</p>
        </div>
    </div>
</div>

  );
}
