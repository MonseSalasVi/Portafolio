import { useLanguage } from '../hooks/useLanguage'
const Projects = () => {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-20 px-6 opacity-0 translate-y-10 animate-fadeIn">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">
          {t.experience.title}
        </h2>

        <div className="space-y-10">
          {t.experience.jobs.map((job, index) => (
            <div
              key={index}
              className="bg-card-1 rounded-lg p-6 shadow-md transition-transform hover:-translate-y-1"
            >
              {/* Empresa */}
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <h3 className="text-xl font-semibold text-primary">
                  {job.company}
                </h3>
                <span className="text-sm text-foreground/60">
                  {job.date}
                </span>
              </div>

              {/* Descripción */}
              <p className="text-foreground/80 mb-4">
                {job.description}
              </p>

              {/* Tools */}
              {job.tools && (
                <div className="flex flex-wrap gap-2 mb-4 justify-end">
                  {job.tools.map((tool, i) => (
                    <span key={i} className="bg-card-2 px-3 py-1 rounded-full text-sm">
                      <span className="text-sm">
                        {tool}
                      </span>
                    </span>
                  ))}
                </div>
              )}

              {/* Sub proyectos */}
              {job.projects && (
                <div className="mt-6 space-y-4 flex flex-col gap-6">
                  {job.projects.map((project, i) => (
                    <div
                      key={i}
                      className="border-l-2 border-primary pl-4"
                    >
                      <h4 className="font-semibold">
                        {project.name}
                      </h4>
                      <p className="text-sm text-foreground/70">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2 justify-end ">
                        {project.tools.map((tool, j) => (
                          <span
                            key={j}
                            className="bg-card-2 px-3 py-1 rounded-full text-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects