import React from "react";
import profile from "/portfolioImage.png.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={profile} alt="Profile" className="w-64 h-64 rounded-full object-cover" />
        <p className="text-lg">
          I'm a passionate React.js frontend developer with a strong foundation in HTML, CSS, and JavaScript. I love building beautiful and responsive user interfaces that enhance user experience. I specialize in crafting clean, scalable, and maintainable code using modern tools like Tailwind CSS and React Hooks. I enjoy turning design concepts into interactive web applications and continuously strive to learn new technologies. I’m also familiar with Git and GitHub for version control and enjoy collaborating in team-based environments.
        </p>
      </div>
    </section>
  );
};

export default About;