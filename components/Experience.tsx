import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Briefcase, Calendar, Code, GraduationCap, MapPin, Shield, TrendingUp, Users, Wrench } from "lucide-react";

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

// components/Experience.tsx
export default function Experience() {
  return (
      <section id="experiencia" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] bg-clip-text text-transparent">
              Experiencia Profesional
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Mi trayectoria profesional en el desarrollo de software y análisis de sistemas
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Experience Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#4F8EF7] via-[#00C896] to-[#FFA500] rounded-full"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {/* Coval - Analista de Sistemas */}
                <motion.div variants={fadeInUp} className="relative">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:w-1/2 md:pr-8 md:text-right">
                      <Card className="backdrop-blur-md bg-[#1A1A1A]/80 border-[#4F8EF7]/20 hover:bg-[#1A1A1A]/90 transition-all duration-300 group ml-16 md:ml-0">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-start md:justify-end mb-4">
                            <div className="w-14 h-14 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] rounded-full flex items-center justify-center">
                              <Briefcase size={28} className="text-white" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">Analista de Sistemas</h3>
                          <p className="text-[#4F8EF7] font-semibold mb-2">Coval Servicios Financieros</p>
                          <div className="flex items-center justify-start md:justify-end gap-4 text-white/60 text-sm mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>Agosto 2023 - Abril 2025</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-start md:justify-end gap-1 text-white/60 text-sm mb-4">
                            <MapPin size={14} />
                            <span>Santiago, Chile</span>
                          </div>
                          
                          {/* Achievements */}
                          <div className="space-y-3 text-left md:text-right">
                            <div className="flex items-start gap-2 md:flex-row-reverse">
                              <Code size={16} className="text-[#4F8EF7] mt-1 flex-shrink-0" />
                              <p className="text-white/80 text-sm">Desarrollo e implementación de plataforma web para gestión de proyectos y tareas</p>
                            </div>
                            <div className="flex items-start gap-2 md:flex-row-reverse">
                              <TrendingUp size={16} className="text-[#00C896] mt-1 flex-shrink-0" />
                              <p className="text-white/80 text-sm">Automatización de flujos Excel con macros, reduciendo tiempo en +50%</p>
                            </div>
                            <div className="flex items-start gap-2 md:flex-row-reverse">
                              <Users size={16} className="text-[#FFA500] mt-1 flex-shrink-0" />
                              <p className="text-white/80 text-sm">Liderazgo del equipo de desarrollo e integración de practicantes</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] rounded-full border-4 border-[#0F0F0F] z-10"></div>

                    <div className="md:w-1/2"></div>
                  </div>
                </motion.div>

                {/* Adecco - Part-time */}
                <motion.div variants={fadeInUp} className="relative">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:w-1/2"></div>

                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-gradient-to-r from-[#00C896] to-[#FFA500] rounded-full border-4 border-[#0F0F0F] z-10"></div>

                    <div className="md:w-1/2 md:pl-8">
                      <Card className="backdrop-blur-md bg-[#1A1A1A]/80 border-[#00C896]/20 hover:bg-[#1A1A1A]/90 transition-all duration-300 group ml-16 md:ml-0">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-start mb-4">
                            <div className="w-14 h-14 bg-gradient-to-r from-[#00C896] to-[#FFA500] rounded-full flex items-center justify-center">
                              <TrendingUp size={28} className="text-white" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">Administrativo de Plataformas</h3>
                          <p className="text-[#00C896] font-semibold mb-1">Adecco</p>
                          <p className="text-white/60 text-sm mb-2">(Part-time)</p>
                          <div className="flex items-center gap-4 text-white/60 text-sm mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>Mayo 2024 - Julio 2024</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-white/60 text-sm mb-4">
                            <MapPin size={14} />
                            <span>Santiago, Chile</span>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <TrendingUp size={16} className="text-[#00C896] mt-1 flex-shrink-0" />
                              <p className="text-white/80 text-sm">Gestión de pedidos y logística los fines de semana</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <TrendingUp size={16} className="text-[#FFA500] mt-1 flex-shrink-0" />
                              <p className="text-white/80 text-sm">Generación de reportes de efectividad en pedidos</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Shield size={16} className="text-[#4F8EF7] mt-1 flex-shrink-0" />
                              <p className="text-white/80 text-sm">Control de fraudes y verificación de transacciones</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>

                {/* Kibernum - Full Stack */}
                <motion.div variants={fadeInUp} className="relative">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:w-1/2 md:pr-8 md:text-right">
                      <Card className="backdrop-blur-md bg-[#1A1A1A]/80 border-[#FFA500]/20 hover:bg-[#1A1A1A]/90 transition-all duration-300 group ml-16 md:ml-0">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-start md:justify-end mb-4">
                            <div className="w-14 h-14 bg-gradient-to-r from-[#FFA500] to-[#4F8EF7] rounded-full flex items-center justify-center">
                              <Code size={28} className="text-white" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">Desarrollador Full Stack</h3>
                          <p className="text-[#FFA500] font-semibold mb-2">Kibernum</p>
                          <div className="flex items-center justify-start md:justify-end gap-4 text-white/60 text-sm mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>Noviembre 2022 - Julio 2023</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-start md:justify-end gap-1 text-white/60 text-sm mb-4">
                            <MapPin size={14} />
                            <span>Santiago, Chile</span>
                          </div>
                          
                          <div className="space-y-3 text-left md:text-right">
                            <div className="flex items-start gap-2 md:flex-row-reverse">
                              <Code size={16} className="text-[#FFA500] mt-1 flex-shrink-0" />
                              <p className="text-white/80 text-sm">Desarrollo de aplicaciones web con LAMP y Python</p>
                            </div>
                            <div className="flex items-start gap-2 md:flex-row-reverse">
                              <TrendingUp size={16} className="text-[#4F8EF7] mt-1 flex-shrink-0" />
                              <p className="text-white/80 text-sm">Integración de soluciones en la nube y despliegue en producción</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-gradient-to-r from-[#FFA500] to-[#4F8EF7] rounded-full border-4 border-[#0F0F0F] z-10"></div>

                    <div className="md:w-1/2"></div>
                  </div>
                </motion.div>

                {/* Coval - Practicante */}
                <motion.div variants={fadeInUp} className="relative">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:w-1/2"></div>

                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] rounded-full border-4 border-[#0F0F0F] z-10"></div>

                    <div className="md:w-1/2 md:pl-8">
                      <Card className="backdrop-blur-md bg-[#1A1A1A]/80 border-[#4F8EF7]/20 hover:bg-[#1A1A1A]/90 transition-all duration-300 group ml-16 md:ml-0">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-start mb-4">
                            <div className="w-14 h-14 bg-gradient-to-r from-[#4F8EF7] to-[#00C896] rounded-full flex items-center justify-center">
                              <GraduationCap size={28} className="text-white" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">Estudiante en Prácticas</h3>
                          <p className="text-[#4F8EF7] font-semibold mb-2">Coval Servicios Financieros</p>
                          <div className="flex items-center gap-4 text-white/60 text-sm mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>Agosto 2022 - Octubre 2022</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-white/60 text-sm mb-4">
                            <MapPin size={14} />
                            <span>Santiago, Chile</span>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <Code size={16} className="text-[#4F8EF7] mt-1 flex-shrink-0" />
                              <p className="text-white/80 text-sm">Desarrollo de herramientas internas para optimización de procesos</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Wrench size={16} className="text-[#00C896] mt-1 flex-shrink-0" />
                              <p className="text-white/80 text-sm">Mantención de equipos y soporte en mesa de ayuda</p>
                            </div>
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