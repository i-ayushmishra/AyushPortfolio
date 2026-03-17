import React, { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["about", "skills", "experience", "projects", "contact"]

  return (
    <header className="fixed w-full top-0 z-50 bg-primaryBg/80 backdrop-blur border-b border-white/10">

      <nav className="flex justify-between items-center px-6 md:px-10 py-4">

        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-bold">
          &lt; Ayush / &gt;
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-textSecondary font-medium">

          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item}`}
                className="relative inline-block group pb-1"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}

        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>

        <ul className="flex flex-col items-center gap-6 py-6 bg-primaryBg border-t border-white/10 text-textSecondary">

          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="relative inline-block group pb-1"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}

        </ul>

      </div>

    </header>
  )
}

export default Navbar