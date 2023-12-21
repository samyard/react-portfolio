// heroicons to write some SVG icons as react components
import { TerminalIcon } from "@heroicons/react/solid"; 
import React, { useState, useEffect, useRef } from "react";
import { projects } from "../data";

const Projects = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateScale = () => {
    if (sectionRef.current) {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top + window.scrollY;
      const sectionBottom = sectionRect.bottom + window.scrollY;

      // Adjust the scale calculation based on your requirements
      const scaleFactor = 0.0003;
      const scaleIn = Math.min(1 + (scrollY - sectionTop) * scaleFactor, 1);
      const scaleOut = Math.min(1 + (sectionBottom - scrollY) * scaleFactor, 1);

      // Choose the appropriate scaling direction based on the scroll position
      return scrollY >= sectionTop && scrollY <= sectionBottom ? scaleIn : scaleOut;
    }

    // Default scale if sectionRef is not available
    return 1;
  };

  const scale = calculateScale();



  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font"  ref={sectionRef}
    >
      <div className="container px-10 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <TerminalIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white"
          style={{ transform: `scale(${scale})` }}>
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 md:1/2 lg:w-1/3 p-2"
            >
              <div className="relative h-60">
                <img
                  alt=""
                  className={`object-cover w-full h-full ${
                    project.isRounded ? "rounded-lg" : "rounded"
                  }`}
                  src={project.image}
                />
                <div className="absolute inset-0 px-4 py-6 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-300 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3 truncate">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
