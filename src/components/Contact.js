

import React from "react";

export default function Contact() {
    // eslint-disable-next-line
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent."))
        .catch((error) => alert(error));
    }
  
  
  return (
<section id="contact" className="relative">
<div className="container px-15 py-10 mx-auto flex sm:flex-nowrap flex-wrap relative">
    <div className=" lg:w-full md:w-full bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-5 flex items-end justify-start relative">
      <img
        className="object-cover object-center rounded w-full h-auto md:w-full lg:w-full"
        src="./backbay.png" 
        alt="Boston"
        style={{maxHeight: '800px', maxWidth:'700px', filter: 'opacity(0.95)' }}
      />
      <div className="bottom-right bg-gray-900 absolute p-6 rounded-md shadow-md text-white" style={{ left: '15%', bottom: '10%', opacity: '0.95' }}>
      <div className="lg:w-full md:w-full px-1">
          <h2 className="text-center title-font font-semibold text-white tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1 text-center">
            Boston, MA
            <br />
            Open to relocation.
          </p>
        </div>
        <div className="lg:w-full px-1 lg:mt-0">
          <h2 className="title-font text-center font-semibold text-white tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 text-center leading-relaxed">
            samyard@bu.edu

              </a>
            </div>
          </div>
        </div>
        <form
          netlify="true"
          name="contact"
          className="sm: w-full lg:w-full md:w-full flex flex-col items-center md:ml-auto md:py-8 mt-8 md:mt-0"
          style={{ maxHeight: '700px' , maxWidth: '80vh', minWidth: '300px'}}
          >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font text-center">
            Send Me A Message
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg transform transition-transform hover:scale-105">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
