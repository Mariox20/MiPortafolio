import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

// components/Projects.tsx
export default function Projects() {
  return (
      <section id="proyectos" className="py-20 px-4 bg-gradient-to-r from-[#0F0F0F]/50 to-[#1A1A1A]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] bg-clip-text text-transparent">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Aquí tienes algunos de mis proyectos recientes que muestran mis habilidades y pasión por el desarrollo
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Poke Explorer",
                description:
                  "Aplicación web desarrollada como reto técnico para explorar Pokémon utilizando la API pública. Construida con React y Next.js, con despliegue en Vercel.",
                image: "/PokeExplorerLanding.png",
                tech: ["React", "Next.js", "Vercel", "API REST"],
                github: "https://github.com/Mariox20/Poke-Explorer",
                demo: "https://poke-explorer-ebon.vercel.app/",
              },
              {
                title: "Sitio de Pilates FlowFit",
                description:
                  "Página web profesional para un estudio de pilates, desarrollada en WordPress con Elementor. Incluye sistema de reservas en línea con Amelia y pagos integrados con Transbank.",
                image: "/FlowfitLanding.png",
                tech: ["WordPress", "Elementor", "Amelia", "Transbank"],
                github: "#",
                demo: "https://flowfit.cl/",
              },
              {
                title: "App de Gestión de Tareas",
                description: "Una herramienta colaborativa de gestión de tareas con actualizaciones en tiempo real",
                image: "/placeholder.svg?height=200&width=300",
                tech: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind"],
                github: "#",
                demo: "#",
              },
              {
                title: "Asistente de Chat IA",
                description:
                  "Un asistente de chat inteligente potenciado por OpenAI con datos de entrenamiento personalizados",
                image: "/placeholder.svg?height=200&width=300",
                tech: ["Python", "OpenAI", "FastAPI", "React"],
                github: "#",
                demo: "#",
              },
              {
                title: "Cursos de Compliance",
                description:
                  "Plataforma de cursos de cumplimiento normativo desarrollada con PHP, MySQL y Bootstrap. Incluye sistema de login, gestión de usuarios y acceso a contenido académico.",
                image: "/LoginCompliance.png",
                tech: ["PHP", "MySQL", "Bootstrap"],
                github: "#",
                demo: "https://compliancecoval.cl/curso/index.html",
              },              
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="backdrop-blur-md bg-[#1A1A1A]/80 border-white/10 hover:bg-[#1A1A1A]/90 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                      <p className="text-white/70 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                            {tech}
                          </span>
                        ))}
                      </div>
                        <div className="flex gap-4">
                          {project.github !== "#" && (
                            <Button asChild size="sm" variant="outline" className="border-[#4F8EF7]/50 text-[#4F8EF7] hover:bg-[#4F8EF7]/10 bg-transparent">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github size={16} className="mr-2" />
                                Código
                              </a>
                            </Button>
                          )}
                          {project.demo !== "#" && (
                            <Button asChild size="sm" className="bg-gradient-to-r from-[#4F8EF7] to-[#00C896] hover:from-[#4F8EF7]/80 hover:to-[#00C896]/80">
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={16} className="mr-2" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}