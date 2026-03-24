import { Mail, MapPin } from 'lucide-react'
import { useLanguage } from "../hooks/useLanguage"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Contact = () => {
    const { t } = useLanguage()

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Title */}
                <h2 className="text-3xl font-bold mb-6">
                    {t?.contact?.title || "Contact"}
                </h2>

                <div className="grid">

                    {/* LEFT → Info */}
                    <div className="space-y-4 flex flex-wrap justify-around w-full">

                        <a
                            href="mailto:cmonsev@gmail.com"
                            className="flex items-center gap-3 p-4 bg-card/70 backdrop-blur-md rounded-xl hover:shadow-lg hover:-translate-y-1 transition group w-auto"
                        >
                            <Mail className="text-xl text-foreground/70 group-hover:text-primary transition" />
                            <span className="text-gradient animate-gradient">
                                Email
                            </span>
                        </a>

                        <a
                            href="https://github.com/MonseSalasVi"
                            target="_blank"
                            className="flex items-center gap-3 p-4 bg-card/70 backdrop-blur-md rounded-xl hover:shadow-lg hover:-translate-y-1 transition group w-auto"
                        >
                            <FaGithub className="text-xl text-foreground/70 group-hover:text-primary transition" />
                            <span className="text-gradient animate-gradient">GitHub</span>
                        </a>

                        <a
                            href="https://mx.linkedin.com/in/monse-salasv/"
                            target="_blank"
                            className="flex items-center gap-3 p-4 bg-card/70 backdrop-blur-md rounded-xl hover:shadow-lg hover:-translate-y-1 transition group w-auto"
                        >
                            <FaLinkedin className="text-xl text-foreground/70 group-hover:text-primary transition" />
                            <span className="text-gradient animate-gradient">LinkedIn</span>
                        </a>

                        <a
                            className="flex items-center gap-3 p-4 bg-card/70 backdrop-blur-md rounded-xl hover:shadow-lg hover:-translate-y-1 transition group w-auto"
                        >
                            <MapPin className="text-xl text-foreground/70 group-hover:text-primary transition" />
                            <span className="text-gradient animate-gradient">Zapopan, Jalisco México</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact