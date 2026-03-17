import React, { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

const BackToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-500 text-white shadow-lg transition-all duration-300 hover:bg-transparent hover:text-blue-400 border border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:scale-110"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  )
}

export default BackToTop