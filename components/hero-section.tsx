"use client"

import type React from "react"

import { motion } from "framer-motion"
import { GlowingButton } from "@/components/glowing-button"
import AnimatedText from "@/components/animated-text"
import PetIcon from "@/components/pet-icon"
import Image from "next/image"

interface HeroSectionProps {
  onJoinWaitlist: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ onJoinWaitlist }) => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Particles/Floating Icons */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 animate-float" style={{ animationDelay: "0s" }}>
          <PetIcon type="cat" size={60} className="text-orange-400 opacity-30" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float" style={{ animationDelay: "1s" }}>
          <PetIcon type="dog" size={80} className="text-orange-500 opacity-40" />
        </div>
        <div className="absolute top-1/2 right-1/10 animate-float" style={{ animationDelay: "2s" }}>
          <PetIcon type="bird" size={50} className="text-orange-300 opacity-20" />
        </div>
        <div className="absolute top-1/5 right-0 animate-float" style={{ animationDelay: "3s" }}>
          <PetIcon type="dragon" size={70} className="text-orange-600 opacity-50" />
        </div>
        <div className="absolute bottom-1/5 left-1/5 animate-float" style={{ animationDelay: "4s" }}>
          <PetIcon type="paw" size={90} className="text-white opacity-60" />
        </div>
      </div>

      {/* Mobile Device Mockups */}
      <motion.div
        className="hidden lg:block absolute top-0 lg:mt-16 left-0 lg:ml-12 lg:w-[28vw] lg:h-[60vw] max-h-[80vh] max-w-[20rem] aspect-[9/19.5] rounded-[2.5rem] bg-gray-900 border-8 border-gray-700 overflow-hidden shadow-2xl z-10"
        initial={{ opacity: 0, y: 50, rotate: -15 }}
        animate={{ opacity: 1, y: 0, rotate: -15 }}
        transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
        whileHover={{ y: -10, rotate: -20, scale: 1.05 }}
      >
        <Image
          src="/assets/images/screens/homepage-ios.jpg"
          alt="Petoverse iOS App"
          layout="fill"
          objectFit="cover"
          className="rounded-[2rem]"
        />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-2 bg-gray-600 rounded-full"></div> {/* Notch */}
      </motion.div>

      <motion.div
        className="hidden lg:block absolute top-0 lg:mt-16 right-0 lg:mr-12 lg:w-[28vw] lg:h-[60vw] max-h-[80vh] max-w-[20rem] aspect-[9/19.5] rounded-[2.5rem] bg-gray-900 border-8 border-gray-700 overflow-hidden shadow-2xl z-10"
        initial={{ opacity: 0, y: 50, rotate: 15 }}
        animate={{ opacity: 1, y: 0, rotate: 15 }}
        transition={{ duration: 1, delay: 3.2, ease: "easeOut" }}
        whileHover={{ y: -10, rotate: 20, scale: 1.05 }}
      >
        <Image
          src="/assets/images/screens/homepage-ios.jpg"
          alt="Petoverse Android App"
          layout="fill"
          objectFit="cover"
          className="rounded-[2rem]"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-600 rounded-full"></div>{" "}
        {/* Home bar */}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        {/* Floating 3D Petoverse logo */}
        <motion.div
          className="relative w-32 h-32 rounded-full bg-primary flex items-center justify-center mb-8 animate-pulse-glow"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <PetIcon type="paw" size={80} className="text-white" animate={false} />
          <div className="absolute inset-0 rounded-full ring-4 ring-primary/50 animate-ping-slow"></div>
        </motion.div>

        <AnimatedText
          text="Your AI Pet. Your Web3 Companion."
          className="text-5xl md:text-7xl font-bold mb-4 glow-text"
          delay={0.5}
        />
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          Emotionally aware, chain-native digital pets that evolve with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
        >
          <GlowingButton size="lg" onClick={onJoinWaitlist} className="px-10 py-3 text-lg">
            Join the Waitlist
          </GlowingButton>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col items-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
        >
          <p className="text-sm text-gray-400">Coming Soon to</p>
          <div className="flex space-x-4">
            <Image
              src="/assets/images/logos/App-Store.png"
              alt="App Store"
              width={'180'}
              height={'20'}
              className="opacity-50 hover:opacity-75 transition-opacity duration-300"
            />
            <Image
              src="/assets/images/logos/Play-Store.png"
              alt="Play Store"
              width={'102'}
              height={'20'}
              className="opacity-50 hover:opacity-75 transition-opacity duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
