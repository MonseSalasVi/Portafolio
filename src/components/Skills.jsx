import { useLanguage } from "../hooks/useLanguage"

const Skills = () => {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">
          {t.skills.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {t?.skills?.map((group, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
            >
              {/* Categoría */}
              <h3 className="text-lg font-semibold mb-4 text-primary">
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
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills