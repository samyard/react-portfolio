
// heroicons to write some SVG icons as react components
import { CodeIcon } from "@heroicons/react/solid"; 
import React from "react";
import { extracurriculars } from "../data";

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Extracurriculars
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {extracurriculars.map((extracurricular) => (
            <a
              href={extracurricular.link}
              key={extracurricular.image}
              className="sm:w-full md:w-1/2 lg:w-1/2 p-2 md:p-4">
              <div className="relative h-60">
                <img
                  alt=""
          className={`object-cover w-full h-full ${extracurricular.isRounded ? 'rounded-lg' : 'rounded'}`}
                  src={extracurricular.image}
                />
                  <div className="absolute inset-0 px-4 py-6 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-300 mb-1">
                    {extracurricular.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3 truncate">
                    {extracurricular.title}
                  </h1>
                  <p className="leading-relaxed">{extracurricular.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
