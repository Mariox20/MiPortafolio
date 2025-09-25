import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Download, GraduationCap, Calendar, MapPin, Code, Wrench, TrendingUp, Users, Briefcase, Shield } from 'lucide-react';

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

// components/Contacto.tsx
export default function Contacto() {
  return (
      <section id="contacto" className="py-20 px-4 bg-gradient-to-r from-[#0F0F0F]/50 to-[#1A1A1A]/50">
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
  );
}