"use client"

import Footer from "@/components/Footer"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Education from "@/components/Education"
import About from "@/components/About"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

export default function Portfolio() {

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
