import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import JobTrack from "../assets/JobTrack.png";
import TaskFlow from "../assets/TaskFlow.png";

const projects = [
  {
    title: "JobTrack",
    desc: "JobTrack is designed to simplify the job searching process. Users can register, log in, search for jobs, and apply for them based on different filters such as job role, job type, location, and experience level. The platform also displays recently posted jobs at the top, making it easier for users to find the latest opportunities. The application uses Day.js to manage and format job posting dates efficiently.",
    tech: ["Tailwind CSS", "React.js", "Local Storage", "Firebase"],
    github: "https://github.com/i-ayushmishra/JobTrack",
    live: "https://job-track-kappa.vercel.app/",
    image: JobTrack 
  },
  {
    title: "TaskFlow",
    desc: "TaskFlow is designed to simplify task management between admins and employees. The admin can create tasks, assign them to employees, and track their progress. Employees can view their assigned tasks and update their status accordingly. The application provides a clear overview of active, completed, and failed tasks, helping both admins and employees manage work efficiently.",
    tech: ["Tailwind CSS", "React.js", "Local Storage"],
    github: "https://github.com/i-ayushmishra/TaskFlow",
    live: "https://task-flow-brown-iota.vercel.app/",
    image: TaskFlow
  }
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-20 py-20 lg:py-28"
    >

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
        Featured Projects
        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-4 rounded"></span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-gray-900 border border-white/10 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30"
          >

            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">

              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-black border border-white/10 px-3 py-1 rounded text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm border border-blue-500 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects