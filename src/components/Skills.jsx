import React from "react"
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from "react-icons/fa"

import {
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si"

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> }
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 lg:px-20 py-20 lg:py-28"
    >

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
        Technologies I Use
        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-4 rounded"></span>
      </h2>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="group bg-gray-900 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:border-blue-500"
          >

        
            <div className="text-4xl text-blue-400 group-hover:text-white transition">
              {skill.icon}
            </div>

            <p className="text-gray-300 text-sm group-hover:text-white transition">
              {skill.name}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Skills