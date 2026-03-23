import { createContext, useState, useEffect } from "react"
import { translations } from "../data/translations"

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("es")

  useEffect(() => {
    const savedLang = localStorage.getItem("lang")
    if (savedLang) {
      setLang(savedLang)
    } else {
      const browserLang = navigator.language.startsWith("es") ? "es" : "en"
      setLang(browserLang)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}