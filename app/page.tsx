"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Download, GraduationCap, Calendar, MapPin, Code, Wrench, TrendingUp, Users, Briefcase, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/Footer"
import Contacto from "@/components/Contact"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Education from "@/components/Education"
import About from "@/components/About"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] text-white overflow-x-hidden">

      <Navbar />
      <Hero />
      <About/>      
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />      
      <Footer />
      
    </div>
  )
}
