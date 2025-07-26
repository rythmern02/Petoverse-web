"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { GlowingButton } from "./glowing-button"

const petTypes = [
  { name: "Dog", image: "/assets/images/pets/dog.png" },
  { name: "Cat", image: "/assets/images/pets/cat.png" },
  { name: "Owl", image: "/assets/images/pets/owl.png" },
  { name: "Dragon", image: "/assets/images/pets/dragon.png" },
]

const PetShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // 0: initial, 1: next, -1: prev

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + newDirection + petTypes.length) % petTypes.length
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
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-text">
        Each pet has a soul. Yours is waiting.
      </h2>

      <div className="relative w-full max-w-3xl h-[400px] flex items-center justify-center">
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
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary/30 to-orange-900/30 p-4 flex items-center justify-center shadow-2xl"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={petTypes[currentIndex].image || "/placeholder.svg"}
                alt={petTypes[currentIndex].name}
                width={350}
                height={320}
                className="object-cover rounded-full"
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-2xl font-bold opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="glow-text">{petTypes[currentIndex].name}</span>
              </motion.div>
            </motion.div>
            <p className="mt-6 text-2xl font-semibold glow-text">{petTypes[currentIndex].name}</p>
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
        {petTypes.map((_, index) => (
          <motion.div
            key={index}
            className={cn(
              "w-3 h-3 rounded-full cursor-pointer transition-all duration-300",
              index === currentIndex ? "bg-primary scale-125" : "bg-gray-600 hover:bg-gray-400",
            )}
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

export default PetShowcase
