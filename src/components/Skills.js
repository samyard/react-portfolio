

import React, { useState } from "react";
import { DatabaseIcon, ChipIcon, ClipboardCheckIcon } from "@heroicons/react/solid";
import { skills } from "../data";


export default function Skills() {
  const [openCategories, setOpenCategories] = useState([]);

  //  skill categories
  const categories = [...new Set(skills.map((skill) => skill.category))];

  // toggling open/close status of a category
  const toggleCategory = (category) => {
    if (openCategories.includes(category)) {
      setOpenCategories(openCategories.filter((c) => c !== category));
    } else {
      setOpenCategories([...openCategories, category]);
    }
  };

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ClipboardCheckIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Core Technical Skills
          </h1>
        </div>
        {categories.map((category) => (
          <div key={category} className="mb-8">
            <div
              className={`cursor-pointer flex items-center justify-between border-2 border-blue-300 p-2 rounded transition-transform transform hover:scale-105 ${
                openCategories.includes(category) ? "bg-blue-400" : ""
              }`}
              onClick={() => toggleCategory(category)}
            >
              <h2 className="text-xl font-sans text-white flex items-center">
                {category} ({skills.filter((skill) => skill.category === category).length})
              </h2>
              {openCategories.includes(category) ? (
                <span className="text-blue-200">[-]</span>
              ) : (
                <span className="text-blue-200">[+]</span>
              )}
            </div>
            {openCategories.includes(category) && (
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.title} className="p-2 sm:w-1/2 w-full">
                      <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <skill.icon className="text-blue-300 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-sans text-white">
                          {skill.title}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
