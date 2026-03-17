import React from "react"

const experiences = [
  {
    title: "Master of Computer Applications (MCA)",
    time: "2024 - 2026",
    desc: "IMS Engineering College Ghaziabad,UP."
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    time: "2021 - 2024",
    desc: "Maharana Pratap Group of Institutions"
  },
  {
    title: "WordPress Developer Intern",
    time: "Jan 2024 - Jun 2024",
    desc: "I worked at Brijwasi Chains India Pvt. Ltd, Kanpur, UP, where I developed and customized websites using WordPress and Elementor. I also handled UI  with HTML, CSS, and basic JavaScript, managed website content, and collaborated closely with the team."
  }
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-20 py-20 lg:py-28"
    >

      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
        My Journey
        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-4 rounded"></span>
      </h2>

  
      <div className="relative max-w-4xl mx-auto">

    
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-white/10"></div>

       
        {experiences.map((item, index) => (

          <div
            key={index}
            className={`mb-12 flex flex-col md:flex-row items-start md:items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >

         
            <div className="bg-gray-900 border border-white/10 p-6 rounded-xl shadow-lg w-full md:w-1/2 transition-all duration-300 hover:scale-105 hover:border-blue-500">

              <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-2">
                {item.title}
              </h3>

              <span className="text-sm text-gray-400">
                {item.time}
              </span>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>

           
            <div className="relative z-10 w-8 h-8 flex items-center justify-center">

              <div className="w-4 h-4 bg-blue-500 rounded-full shadow-md"></div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Experience