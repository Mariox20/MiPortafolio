import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Download, Menu, X } from "lucide-react";



// components/Navbar.tsx
export default function Navbar() {

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
    { id: "experiencia", label: "Experiencia"},
    { id: "proyectos", label: "Proyectos" },
    { id: "habilidades", label: "Habilidades" },
    { id: "contacto", label: "Contacto" },
  ]

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

const [isMenuOpen, setIsMenuOpen] = useState(false)
const [activeSection, setActiveSection] = useState("inicio")

useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre-mi", "formacion","experiencia", "proyectos", "habilidades", "contacto"]
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

  return (
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
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 hover:text-[#4F8EF7] text-sm ${
                    activeSection === item.id ? "text-[#4F8EF7]" : "text-white/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* CV Download Button */}
              <Button
                onClick={downloadCV}
                className="bg-gradient-to-r from-[#4F8EF7] to-[#00C896] hover:from-[#4F8EF7]/80 hover:to-[#00C896]/80 text-white px-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Download size={16} className="mr-0 lg:mr-2" />
                <span className="hidden lg:inline">Descargar CV</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú de navegación"
            >
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
  );
}