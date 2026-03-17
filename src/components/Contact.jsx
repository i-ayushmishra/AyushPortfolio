import React from "react"
import { FaEnvelope, FaLinkedin, FaGithub, FaYoutube, FaInstagram  } from "react-icons/fa"

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-20 py-20 lg:py-28 text-center"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Get In Touch
        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-4 rounded"></span>
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        I'm open to new opportunities and collaborations. Feel free to reach out!
      </p>

      {/* Email Button */}
      <a
        href="mailto:ayushmishra.workmail@gmail.com"
        className="glow-btn inline-flex items-center gap-3 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold border border-blue-500 hover:bg-transparent hover:text-blue-400 transition-all duration-300"
      >
        <FaEnvelope />
        Say Hello
      </a>

      
      <div className="flex justify-center gap-6 mt-10">

        <a
          href="https://github.com/i-ayushmishra"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-gray-400 hover:text-white transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/aayushmishra19/"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-gray-400 hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
    href="https://www.youtube.com/@TheVairagyaMishra"
    target="_blank"
    rel="noreferrer"
    className="text-2xl text-gray-400 hover:text-blue-400 transition"
  >
    <FaYoutube />
  </a>

  <a
    href="https://www.instagram.com/thevairagyamishra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noreferrer"
    className="text-2xl text-gray-400 hover:text-blue-400 transition"
  >
    <FaInstagram />
  </a>

      </div>

    </section>
  )
}

export default Contact