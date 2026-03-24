import { Mail, MapPin } from 'lucide-react'
import { useLanguage } from "../hooks/useLanguage"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Contact = () => {
    const { t } = useLanguage()

    return (
        <section id="contact" className="py-20 px-6 opacity-0 translate-y-10 animate-fadeIn">
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
                            className="gradient-border">
                            <span className="gradient-border-inner px-2 py-1 rounded text-xs">
                                <Mail size={"20px"} />  Email
                            </span>
                        </a>
                        <a
                            href="https://github.com/MonseSalasVi"
                            target="_blank"
                            className="gradient-border">
                            <span className="gradient-border-inner px-2 py-1 rounded text-xs">
                                <FaGithub size={"20px"} /> GitHub</span>
                        </a>
                        <a
                            href="https://mx.linkedin.com/in/monse-salasv/"
                            target="_blank"
                            className="gradient-border">
                            <span className="gradient-border-inner px-2 py-1 rounded text-xs"><FaLinkedin size={"20px"} /> LinkedIn</span>
                        </a>
                        <a className="gradient-border">
                            <span className="gradient-border-inner px-2 py-1 rounded text-xs"> <MapPin size={"20px"} /> Zapopan, Jalisco México</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact