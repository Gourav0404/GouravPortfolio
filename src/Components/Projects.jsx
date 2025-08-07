import React from "react";

const projects = [
  { title: "Landing Page", link: "https://landingpage-landingpage.onrender.com" },
  { title: "ToDo App", link: "https://gourav-chouhan-todo-list-1.vercel.app/" },
  { title: "Sign Up Form", link: "https://signup-page-nine-henna.vercel.app" },
  {
    title: "Simple Quiz App", link: "https://quiz-app-chi-woad-68.vercel.app/"
  }, {
    title: "My Portfolio", link: "https://gourav-portfolio-livid.vercel.app/"
  },
  {
    title: "Blog Website", link: "https://blog-website-zh3q.vercel.app/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block p-4 bg-white shadow-md hover:shadow-xl transition rounded-md">
            {project.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
