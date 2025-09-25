import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

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

// components/Education.tsx
export default function Education() {
  return (
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
  );
}