import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

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

// components/Skills.tsx
export default function Skills() {
  return (

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
              { category: "Frontend", skills: ["Angular", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"] },
              { category: "Backend", skills: ["Node.js", "Python", "PHP", "MySQL", "PostgreSQL", "MongoDB", "REST APIs"] },
              { category: "Herramientas", skills: ["Git", "AWS", "Azure", "Vercel", "Cloudflare", "SonarQube", "WordPress", "Centreon", "Linux"] },
              { category: "Otros", skills: ["Automatización con Excel/VBA", "Scrum"] }
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

  );
}