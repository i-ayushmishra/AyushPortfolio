import React, { useEffect, useState } from "react"

const Hero = () => {

  const codeLines = [
    "public class AyushPortfolio {",
    "  public static void main(String[] args) {",
    '    String name = "Ayush Mishra";',
    '    String role = "Aspiring Software Developer";',
    '    String [] skills = {"Java","HTML","CSS","JavaScript","React.js"};',
    '    System.out.println("Currently learning Spring Boot & DSA");',
    "  }",
    "}"
  ]

  const [displayedCode, setDisplayedCode] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      if (charIndex < codeLines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedCode(prev => prev + codeLines[lineIndex][charIndex])
          setCharIndex(charIndex + 1)
        }, 40)
        return () => clearTimeout(timeout)
      } else {
        setDisplayedCode(prev => prev + "\n")
        setLineIndex(lineIndex + 1)
        setCharIndex(0)
      }
    }
  }, [charIndex, lineIndex])

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-20 pt-28 pb-16 gap-12"
    >

      {/* LEFT */}
      <div className="flex-1 text-center lg:text-left">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Ayush Mishra
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8">
          MCA Student & Aspiring Software Developer building web applications using Java and modern web technologies.
        </p>

    
        <a
          href="#projects"
          className="glow-btn inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold border border-blue-500 hover:bg-transparent hover:text-blue-400 transition-all duration-300"
        >
          Explore My Work
        </a>

      </div>

      {/* RIGHT */}
      <div className="flex-1 w-full max-w-lg">

        <div className="bg-black rounded-xl border border-white/10 shadow-xl overflow-hidden">

          {/* Header */}
          <div className="flex gap-2 px-4 py-3 bg-gray-800">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Code */}
          <pre className="p-5 text-green-400 text-sm md:text-base whitespace-pre-wrap font-mono">
            {displayedCode}
          </pre>

        </div>

      </div>

    </section>
  )
}

export default Hero