import { useLanguage } from "../hooks/useLanguage"
import { FaCode, FaLayerGroup, FaShoppingCart, FaChartBar, FaTools } from "react-icons/fa"

const Skills = () => {
  const { t } = useLanguage()
  const iconMap = {
    languages: FaCode,
    libraries: FaLayerGroup,
    ecommerce: FaShoppingCart,
    marketing: FaChartBar,
    tools: FaTools,
  }

  return (
    <section id="skills" className="py-20 px-6 opacity-0 translate-y-10 animate-fadeIn">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">
          {t.skills.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {t?.skills.items?.map((group, index) => {
            const Icon = iconMap[group.key]
            return (
              <div
                key={index}
                className="bg-card-2 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                {/* Categoría */}

                <h3 className="text-lg font-semibold mb-4 text-primary flex">
                  {Icon && (
                    <span className="p-2 rounded-lg bg-primary/10">
                      <Icon className="text-primary text-lg" />
                    </span>
                  )}
                  {group.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-accent/30 backdrop-blur-sm border border-accent/40 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
          {/* {t?.skills.items?.map((group, index) => (
            <div
              key={index}
              className="bg-card-2 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
            >
              
          ))} */}

        </div>
      </div>
    </section>
  )
}

export default Skills