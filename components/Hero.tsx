import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState, useMemo } from "react";



//components/Hero.tsx
export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    // Generar posiciones consistentes entre servidor y cliente
    const particles = useMemo(() => {
        return [...Array(50)].map((_, i) => ({
            id: i,
            left: ((i * 137) % 100), // Algoritmo consistente
            top: ((i * 71) % 100),
            delay: (i * 0.04) % 2,
        }))
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMenuOpen(false)
    }
    
  return (
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4F8EF7]/10 to-[#00C896]/10 animate-pulse"></div>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-[#4F8EF7]/40 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + (particle.id % 2),
                repeat: Number.POSITIVE_INFINITY,
                delay: particle.delay,
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
  );
}