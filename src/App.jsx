import { useState, useEffect } from "react"
import { translations } from "./data/translations"
import Header from "./components/Header"
import About from "./components/about"

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
    </div>
  )
}

export default App