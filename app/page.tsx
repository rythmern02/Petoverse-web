"use client"

import HeroSection from "@/components/hero-section"
import PetShowcase from "@/components/pet-showcase"
import FeatureJourney from "@/components/feature-journey"
import WorldMap from "@/components/world-map"
import EcosystemSnapshot from "@/components/ecosytem-snapshot"
import WaitlistSection from "@/components/waitlist-section"
import SiteFooter from "@/components/site-footer"
import ThreePetModel from "@/components/three-pet-model"
import AppUISlider from "@/components/app-ui-slider" // Import the new component
import { useRef } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const waitlistRef = useRef<HTMLDivElement>(null)

  const handleJoinWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative min-h-screen bg-black text-white font-sans">
      {/* Global background blobs/gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-primary/20 blur-3xl opacity-30 -top-20 -left-20 animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-orange-500/15 blur-3xl opacity-20 -bottom-40 -right-40 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-primary/25 blur-3xl opacity-25 top-1/3 right-1/4 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* New animated background image placeholders */}
        <motion.img
          src="/placeholder.svg?height=200&width=200"
          alt="Abstract Sphere"
          className="absolute top-[10%] left-[5%] w-48 h-48 opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <motion.img
          src="/placeholder.svg?height=250&width=250"
          alt="Liquid Blob"
          className="absolute bottom-[15%] left-[10%] w-64 h-64 opacity-15 animate-float"
          style={{ animationDelay: "3s" }}
        />
        <motion.img
          src="/placeholder.svg?height=150&width=150"
          alt="Circuit Pattern"
          className="absolute top-[25%] right-[5%] w-36 h-36 opacity-20 animate-float"
          style={{ animationDelay: "5s" }}
        />
        <motion.img
          src="/placeholder.svg?height=180&width=180"
          alt="Energy Wave"
          className="absolute bottom-[5%] right-[25%] w-44 h-44 opacity-18 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
      <HeroSection onJoinWaitlist={handleJoinWaitlist} />
      <PetShowcase />
      <FeatureJourney />
      <AppUISlider /> {/* Integrated the new App UI Slider here */}
      <WorldMap />
      <EcosystemSnapshot />
      <ThreePetModel />
      <div ref={waitlistRef}>
        <WaitlistSection />
      </div>
      <SiteFooter />
    </main>
  )
}
