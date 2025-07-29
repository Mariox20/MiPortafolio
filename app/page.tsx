"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre-mi", "proyectos", "habilidades", "contacto"]
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
    // Crear un enlace temporal para descargar el CV
    const link = document.createElement("a")
    link.href = "/cv-mario-aguilera.pdf" // Asegúrate de tener este archivo en public/
    link.download = "CV-Mario-Aguilera.pdf"
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
                    src="/profile.jpg"
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
                Soy un desarrollador full-stack apasionado con más de 5 años de experiencia creando soluciones digitales
                que marcan la diferencia. Me encanta convertir problemas complejos en diseños simples, hermosos e
                intuitivos.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a proyectos
                de código abierto o compartiendo conocimientos con la comunidad de desarrolladores.
              </p>

              {/* Tech Stack */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Stack Tecnológico</h3>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {["React", "Node.js", "Python", "TypeScript", "Next.js", "PostgreSQL", "AWS", "Docker"].map(
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
                title: "Plataforma E-Commerce",
                description:
                  "Una solución completa de comercio electrónico con React, Node.js e integración con Stripe",
                image: "/placeholder.svg?height=200&width=300",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                github: "#",
                demo: "#",
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
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#4F8EF7]/50 text-[#4F8EF7] hover:bg-[#4F8EF7]/10 bg-transparent"
                        >
                          <Github size={16} className="mr-2" />
                          Código
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#4F8EF7] to-[#00C896] hover:from-[#4F8EF7]/80 hover:to-[#00C896]/80"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Button>
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
              { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
              { category: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"] },
              { category: "Herramientas", skills: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
              { category: "Otros", skills: ["Machine Learning", "DevOps", "Testing", "Agile", "Liderazgo"] },
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
                    value: "mario.aguilera@example.com",
                    href: "mailto:mario.aguilera@example.com",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "/in/marioaguilera",
                    href: "https://linkedin.com/in/marioaguilera",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "@marioaguilera",
                    href: "https://github.com/marioaguilera",
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
                  { Icon: Github, href: "https://github.com/marioaguilera" },
                  { Icon: Linkedin, href: "https://linkedin.com/in/marioaguilera" },
                  { Icon: Mail, href: "mailto:mario.aguilera@example.com" },
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
          <p className="text-white/60">© 2024 Mario Aguilera. Desarrollado con Next.js y Framer Motion.</p>
        </div>
      </footer>
    </div>
  )
}
