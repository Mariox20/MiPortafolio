"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Download, GraduationCap, Calendar, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre-mi", "formacion", "proyectos", "habilidades", "contacto"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const downloadCV = () => {
    //Enlace para descargar el CV
    const link = document.createElement("a")
    link.href = "/CV_MarioAguileraV2.pdf"
    link.download = "CV_MarioAguileraV2.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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

  const navigationItems = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-mi", label: "Sobre Mí" },
    { id: "formacion", label: "Formación" },
    { id: "proyectos", label: "Proyectos" },
    { id: "habilidades", label: "Habilidades" },
    { id: "contacto", label: "Contacto" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-[#4F8EF7] to-[#00C896] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Mario Aguilera
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 hover:text-[#4F8EF7] ${
                    activeSection === item.id ? "text-[#4F8EF7]" : "text-white/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* CV Download Button */}
              <Button
                onClick={downloadCV}
                className="bg-gradient-to-r from-[#4F8EF7] to-[#00C896] hover:from-[#4F8EF7]/80 hover:to-[#00C896]/80 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Download size={16} className="mr-2" />
                Descargar CV
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden backdrop-blur-md bg-white/10 border-t border-white/20"
          >
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 hover:text-[#4F8EF7] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={downloadCV}
                className="w-full bg-gradient-to-r from-[#4F8EF7] to-[#00C896] hover:from-[#4F8EF7]/80 hover:to-[#00C896]/80 text-white py-2 rounded-full transition-all duration-300"
              >
                <Download size={16} className="mr-2" />
                Descargar CV
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4F8EF7]/10 to-[#00C896]/10 animate-pulse"></div>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#4F8EF7]/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#4F8EF7] via-[#00C896] to-[#FFA500] bg-clip-text text-transparent">
              Mario Aguilera
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/80 mb-6">Desarrollador Full Stack</h2>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Creando experiencias digitales con tecnologías modernas y soluciones creativas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20"
          >
            <Button
              onClick={() => scrollToSection("proyectos")}
              className="bg-gradient-to-r from-[#4F8EF7] to-[#00C896] hover:from-[#4F8EF7]/80 hover:to-[#00C896]/80 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Ver Mi Trabajo
            </Button>
            <Button
              onClick={() => scrollToSection("contacto")}
              variant="outline"
              className="border-[#4F8EF7]/50 text-[#4F8EF7] hover:bg-[#4F8EF7]/10 px-8 py-3 rounded-full transition-all duration-300"
            >
              Contactar
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Profile Photo */}
            <motion.div variants={fadeInUp} className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto">
                  <img
                    src="/FotoLinkedin.png"
                    alt="Mario Aguilera - Desarrollador Full Stack"
                    className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-[#4F8EF7]/20"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=320&width=320&text=Mario+Aguilera"
                    }}
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#00C896] to-[#FFA500] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-2 h-2 bg-[#4F8EF7] rounded-full opacity-60"></div>
                <div className="absolute top-1/4 -right-6 w-1 h-1 bg-[#00C896] rounded-full opacity-80"></div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInUp} className="flex-1 space-y-6 text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] bg-clip-text text-transparent">
                Sobre Mí
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Soy un desarrollador de software con más de 2 años de experiencia en el desarrollo de aplicaciones web, 
                trabajando con stacks como LAMP, Python, Node.js, TypeScript y Angular. Me especializo en el diseño e 
                implementación de soluciones que optimizan procesos y mejoran la experiencia de usuario.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Durante mi carrera he liderado equipos, automatizado flujos de trabajo y participado en proyectos de 
                integración de sistemas y despliegue en la nube. Me motiva enfrentar nuevos desafíos tecnológicos y aplicar 
                metodologías ágiles como Scrum para entregar valor en cada proyecto.
              </p>

              {/* Tech Stack */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Stack Tecnológico</h3>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {["Angular", "Node.js", "React", "Python", "TypeScript", "Next.js", "PostgreSQL", "Cloud" ].map(
                    (tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formacion" className="py-20 px-4 bg-gradient-to-r from-[#0F0F0F]/50 to-[#1A1A1A]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] bg-clip-text text-transparent">
              Formación Académica
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Mi trayectoria educativa en el campo de la informática y programación
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#4F8EF7] to-[#00C896] rounded-full hidden md:block"></div>

              {/* Education Items */}
              <div className="space-y-12">
                {/* Ingeniería en Informática */}
                <motion.div variants={fadeInUp} className="relative">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Content (Desktop) / Full Content (Mobile) */}
                    <div className="md:w-1/2 md:pr-8 md:text-right">
                      <Card className="backdrop-blur-md bg-[#1A1A1A]/80 border-[#4F8EF7]/20 hover:bg-[#1A1A1A]/90 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-center md:justify-end mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] rounded-full flex items-center justify-center">
                              <GraduationCap size={24} className="text-white" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">Ingeniería en Informática</h3>
                          <p className="text-[#4F8EF7] font-semibold mb-2">INSTITUTO PROFESIONAL INACAP</p>
                          <div className="flex items-center justify-center md:justify-end gap-4 text-white/60 text-sm mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>Agosto 2023 - Enero 2025</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center md:justify-end gap-1 text-white/60 text-sm mb-3">
                            <MapPin size={14} />
                            <span>Santiago, Chile</span>
                          </div>
                          <div className="inline-block px-3 py-1 bg-[#00C896]/20 text-[#00C896] rounded-full text-xs font-medium">
                            ✅ Completado
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] rounded-full border-4 border-[#0F0F0F] z-10"></div>

                    {/* Right Spacer */}
                    <div className="md:w-1/2"></div>
                  </div>
                </motion.div>

                {/* Técnico Analista Programador */}
                <motion.div variants={fadeInUp} className="relative">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Spacer */}
                    <div className="md:w-1/2"></div>

                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] rounded-full border-4 border-[#0F0F0F] z-10"></div>

                    {/* Right Content (Desktop) / Full Content (Mobile) */}
                    <div className="md:w-1/2 md:pl-8">
                      <Card className="backdrop-blur-md bg-[#1A1A1A]/80 border-[#4F8EF7]/20 hover:bg-[#1A1A1A]/90 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-center md:justify-start mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#00C896] to-[#FFA500] rounded-full flex items-center justify-center">
                              <GraduationCap size={24} className="text-white" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">Técnico de Nivel Superior</h3>
                          <h4 className="text-lg font-semibold text-white/90 mb-2">Analista Programador</h4>
                          <p className="text-[#00C896] font-semibold mb-2">CENTRO DE FORMACIÓN TÉCNICA INACAP</p>
                          <div className="flex items-center justify-center md:justify-start gap-4 text-white/60 text-sm mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>Marzo 2020 - Octubre 2022</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-1 text-white/60 text-sm mb-3">
                            <MapPin size={14} />
                            <span>Santiago, Chile</span>
                          </div>
                          <div className="inline-block px-3 py-1 bg-[#00C896]/20 text-[#00C896] rounded-full text-xs font-medium">
                            ✅ Completado
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4">
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

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] bg-clip-text text-transparent">
              Habilidades y Experiencia
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Tecnologías y herramientas que utilizo para dar vida a las ideas
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { category: "Frontend", skills: ["Angular", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "WordPress"] },
              { category: "Backend", skills: ["Node.js", "Python", "PHP", "MySQL", "PostgreSQL", "MongoDB", "API REST"] },
              { category: "Herramientas", skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "Scrum"] },
              { category: "Otros", skills: ["Automatización con Excel/VBA", "Testing", "DevOps", "Liderazgo", "Metodologías Ágiles"] },
            ].map((skillGroup, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="backdrop-blur-md bg-[#1A1A1A]/80 border-white/10 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">{skillGroup.category}</h3>
                    <div className="space-y-3">
                      {skillGroup.skills.map((skill) => (
                        <motion.div key={skill} whileHover={{ x: 5 }} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] rounded-full"></div>
                          <span className="text-white/80">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] bg-clip-text text-transparent">
              Ponte en Contacto
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Siempre estoy abierto a discutir nuevas oportunidades y proyectos interesantes
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col items-center space-y-8"
          >
            {/* Contact Links */}
            <motion.div variants={fadeInUp} className="w-full max-w-2xl">
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "marioaguilerav15@gmail.com",
                    href: "mailto:marioaguilerav15@gmail.com",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "/in/marioaguilera",
                    href: "https://www.linkedin.com/in/mario-aguilera-valdenegro-27839427b/",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "@marioaguilera",
                    href: "https://github.com/Mariox20",
                  },
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center space-x-4 p-6 backdrop-blur-md bg-[#1A1A1A]/60 border border-[#4F8EF7]/20 rounded-lg hover:bg-[#1A1A1A]/80 hover:border-[#4F8EF7]/40 transition-all duration-300 group"
                  >
                    <contact.icon
                      size={28}
                      className="text-[#4F8EF7] group-hover:text-[#00C896] transition-colors duration-300"
                    />
                    <div>
                      <div className="text-white font-medium text-lg">{contact.label}</div>
                      <div className="text-white/60">{contact.value}</div>
                    </div>
                    <ExternalLink
                      size={20}
                      className="text-white/40 ml-auto group-hover:text-[#4F8EF7] transition-colors duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-white/60 mb-6 text-lg">¡Construyamos algo increíble juntos!</p>
              <div className="flex justify-center space-x-6">
                {[
                  { Icon: Github, href: "https://github.com/Mariox20" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/mario-aguilera-valdenegro-27839427b/" },
                  { Icon: Mail, href: "mailto:marioaguilerav15@gmail.com" },
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 backdrop-blur-md bg-[#1A1A1A]/60 border border-[#4F8EF7]/30 rounded-full flex items-center justify-center hover:bg-[#4F8EF7]/10 hover:border-[#4F8EF7] transition-all duration-300 group"
                  >
                    <Icon size={24} className="text-white group-hover:text-[#4F8EF7] transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">© 2025 Mario Aguilera. Desarrollado con Next.js y Framer Motion.</p>
        </div>
      </footer>
    </div>
  )
}
