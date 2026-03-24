import { useState, useEffect } from "react"
import { translations } from "./data/translations"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  const [lang, setLang] = useState("es")

  useEffect(() => {
    const savedLang = localStorage.getItem("lang")
    if (savedLang) setLang(savedLang)
  }, [])

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  const t = translations[lang]

  return (
    <div className="bg-background text-foreground">
      <Header />
      <About />
      <div className="max-w-5xl mx-auto border-t border-blueLight my-4"></div>
      <Projects />
      <div className="max-w-5xl mx-auto border-t border-blueLight my-4"></div>
      <Skills />
      <div className="max-w-5xl mx-auto border-t border-blueLight my-4"></div>
      <Contact />
    </div>
  )
}

export default App