"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import Image from "next/image"
import { GlowingButton } from "./glowing-button"
import AnimatedText from "./animated-text"

const appScreenshots = [
  {
    id: 1,
    title: "Home Dashboard",
    description: "Your pet's daily activities and emotional state at a glance.",
    image: "/assets/images/screens/homepage-ios.jpg",
  },
  {
    id: 2,
    title: "Interaction Hub",
    description: "Talk, play, and train your pet with intuitive controls.",
    image: "/assets/images/screens/pet-playground.jpg",
  },
  {
    id: 3,
    title: "Evolution and Customization",
    description: "Track your pet's growth and unlock new forms.",
    image: "/assets/images/screens/pet-customize.jpg",
  },
  {
    id: 4,
    title: "Mission Board",
    description: "Discover quests and earn rewards with your companion.",
    image: "/assets/images/screens/pet-missions.jpg",
  },
  {
    id: 5,
    title: "Wallet & Marketplace",
    description: "Manage your $PETO tokens and explore unique items.",
    image: "/assets/images/screens/pet-info.jpg",
  },
]

const AppUISlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // 0: initial, 1: next, -1: prev

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + newDirection + appScreenshots.length) % appScreenshots.length
      return nextIndex
    })
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  }

  return (
    <section className="relative w-full py-20 bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center glow-text">
        <AnimatedText text="A Glimpse Inside Petoverse" delay={0.2} />
      </h2>

      <div className="relative w-full max-w-5xl h-[600px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full flex flex-col items-center justify-center"
          >
            <GlassmorphismCard className="w-[320px] h-[580px] p-4 flex flex-col items-center justify-start overflow-hidden">
              <div className="relative w-full h-[480px] rounded-xl overflow-hidden mb-4">
                <Image
                  src={appScreenshots[currentIndex].image || "/placeholder.svg"}
                  alt={appScreenshots[currentIndex].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 glow-text">{appScreenshots[currentIndex].title}</h3>
              <p className="text-sm text-gray-300 text-center">{appScreenshots[currentIndex].description}</p>
            </GlassmorphismCard>
          </motion.div>
        </AnimatePresence>

        <GlowingButton
          className="absolute left-4 z-20 rounded-full p-2"
          onClick={() => paginate(-1)}
          variant="ghost"
          size="icon"
        >
          <ChevronLeft size={32} />
        </GlowingButton>
        <GlowingButton
          className="absolute right-4 z-20 rounded-full p-2"
          onClick={() => paginate(1)}
          variant="ghost"
          size="icon"
        >
          <ChevronRight size={32} />
        </GlowingButton>
      </div>

      <div className="flex mt-8 space-x-3">
        {appScreenshots.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? "bg-primary scale-125" : "bg-gray-600 hover:bg-gray-400"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  )
}

export default AppUISlider
