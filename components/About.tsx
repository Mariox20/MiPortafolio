import { motion } from "framer-motion";

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

// components/About.tsx
export default function About() {
  return (
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
                  {["Angular", "Node.js", "React", "Python", "TypeScript", "Next.js","PHP","VBA"].map(
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
  );
}