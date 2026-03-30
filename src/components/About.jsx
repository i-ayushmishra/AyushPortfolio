import React from "react"
import Tilt from "react-parallax-tilt"

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-20 py-20 lg:py-28"
    >

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 relative">
        About Me
        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-4 rounded"></span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

        <div className="flex-1">

          <p className="text-gray-400 mb-5 leading-relaxed">
            Hello! I'm an MCA student with hands-on project experience in Frontend Development using {" "}
            <span className="text-blue-400 font-medium">
              HTML5, CSS3 JavaScript & React.js.
            </span> <br />
            I enjoy building responsive and user-friendly web applications & continously improving my coding & problem-solving skills.
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Currently, I am expanding my backend knowledge by learning {" "}
            <span className="text-blue-400 font-medium">
              Core Java, JDBC & Spring Boot
            </span>  to become a Full Stack Java Developer.
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I am actively seeking entry-level opportunities where I can contribute to real projects and grow as a software developer.
          </p>

          
          <a
            href="https://drive.google.com/file/d/1gIt0eQOQelMqZgaRLjd6qDc-jo4jgN3V/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="glow-btn inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold border border-blue-500 hover:bg-transparent hover:text-blue-400 transition-all duration-300"
          >
            View Resume
          </a>

        </div>

        
        <div className="flex-1 flex justify-center">

          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.03}
            className="w-full max-w-md"
          >

            <div className="bg-gray-900 border border-white/10 rounded-xl p-8 shadow-xl transition duration-300 hover:shadow-2xl">

              <h3 className="text-xl font-semibold text-blue-400 mb-6">
                Core Competencies
              </h3>

              <div className="flex flex-wrap gap-3">

                {[
                  "Java",
                  "React.js",
                  "MySQL",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Data Structures",
                  "Git & GitHub",
                  "Problem Solving"
                ].map((skill, index) => (

                  <span
                    key={index}
                    className="px-4 py-2 text-sm bg-black border border-white/10 rounded-md text-gray-300 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-md"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </Tilt>

        </div>

      </div>

    </section>
  )
}

export default About
