import profile from "../assets/MonseSalas.png" // tu imagen
import { useLanguage } from "../hooks/useLanguage"

const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* 🖼️ Imagen con borde animado */}
        <div className="relative w-72 h-72 mx-auto">
          {/* Glow animado */}
          <div className="absolute inset-0 rounded-full blur-xl opacity-70 animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

          <img
            src={profile}
            alt="Profile"
            className="relative w-full h-full object-cover rounded-full border-4 border-card hover:scale-105 transition"
          />
        </div>

        {/* 📝 Texto */}
        <div>
          <h2 className="text-3xl font-bold mb-2 text-center">{t.about.title}</h2>
          <h2 className="text-4xl font-bold text-gradient animate-gradient text-center mb-4">
            Front End Developer
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            {t.about.text1}
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            {t.about.text2}
          </p>

          <p className="text-foreground/80 leading-relaxed">
            {t.about.text3}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About