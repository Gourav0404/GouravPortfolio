import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Git", "GitHub", "Node.js", "Express.js", "MongoDB", "C Programming", "C++"];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-md">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
