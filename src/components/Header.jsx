import React, { useState, useEffect } from 'react'
import { Sun, MoonStar } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const { lang, setLang, t } = useLanguage()

    // Cargar tema guardado
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
            setDarkMode(true)
        }
    }, [])

    // Aplicar clase dark + guardar preferencia
    useEffect(() => {
        const root = document.documentElement

        if (darkMode) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-foreground/10 transition-all duration-300">
            <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">

                {/* Logo */}
                <div className="font-bold text-xl tracking-wider">
                    Portafolio
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-8 font-medium">
                    <a href="#about" className="px-3 py-1.5 rounded-md transition-all duration-200 hover:border">
                        {t.nav.about}
                    </a>
                    <a href="#projects" className="px-3 py-1.5 rounded-md transition-all duration-200 hover:border">
                        {t.nav.projects}
                    </a>
                    <a href="#skills" className="px-3 py-1.5 rounded-md transition-all duration-200 hover:border">
                        {t.nav.skills}
                    </a>
                    <a href="#contact" className="px-3 py-1.5 rounded-md transition-all duration-200 hover:border">
                        {t.nav.contact}
                    </a>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">

                    {/* 🌍 Language toggle */}
                    <button
                        onClick={() => setLang(lang === "es" ? "en" : "es")}
                        className="px-3 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm"
                    >
                        {lang === "es" ? "EN" : "ES"}
                    </button>

                    {/* 🌙 Dark mode toggle */}
                    <button
                        className="p-2 rounded-full hover:bg-neutral-600 transition"
                        onClick={() => setDarkMode(prev => !prev)}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <Sun size={20} /> : <MoonStar size={20} />}
                    </button>

                    {/* 📱 Mobile menu */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="block w-7 h-1 bg-current mb-1 rounded"></span>
                        <span className="block w-7 h-1 bg-current mb-1 rounded"></span>
                        <span className="block w-7 h-1 bg-current rounded"></span>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <nav className="md:hidden flex flex-col gap-2 px-6 pb-6 bg-background text-foreground transition-colors duration-300">
                    <a href="#about" className="transition px-3 py-2 rounded hover:text-primary hover:bg-primary/20" onClick={() => setMenuOpen(!menuOpen)}>
                        {t.nav.about}
                    </a>
                    <a href="#projects" className="transition px-3 py-2 rounded hover:text-primary hover:bg-primary/20" onClick={() => setMenuOpen(!menuOpen)}>
                        {t.nav.projects}
                    </a>
                    <a href="#skills" className="transition px-3 py-2 rounded hover:text-primary hover:bg-primary/20" onClick={() => setMenuOpen(!menuOpen)}>
                        {t.nav.skills}
                    </a>
                    <a href="#contact" className="transition px-3 py-2 rounded hover:text-primary hover:bg-primary/20" onClick={() => setMenuOpen(!menuOpen)}>
                        {t.nav.contact}
                    </a>
                </nav>
            )}
        </header>
    )
}

export default Header