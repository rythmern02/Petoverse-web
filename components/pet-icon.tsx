"use client"

import type React from "react"

import { motion } from "framer-motion"
import { PawPrint, Cat, Dog, Bird, BirdIcon as Dragon } from "lucide-react"
import { cn } from "@/lib/utils"

interface PetIconProps {
  type: "paw" | "cat" | "dog" | "bird" | "dragon"
  size?: number
  className?: string
  animate?: boolean
}

const iconMap = {
  paw: PawPrint,
  cat: Cat,
  dog: Dog,
  bird: Bird,
  dragon: Dragon,
}

const PetIcon: React.FC<PetIconProps> = ({ type, size = 24, className, animate = true }) => {
  const IconComponent = iconMap[type]

  const floatVariants = {
    initial: { y: 0, x: 0 },
    animate: {
      y: [0, -10, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        delay: Math.random() * 2, // Random delay for varied floating
      },
    },
  }

  const pulseVariants = {
    initial: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.7, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        delay: Math.random() * 1, // Random delay for varied pulsing
      },
    },
  }

  return (
    <motion.div
      variants={animate ? floatVariants : undefined}
      initial={animate ? "initial" : undefined}
      animate={animate ? "animate" : undefined}
      className={cn("relative", className)}
    >
      <motion.div
        variants={animate ? pulseVariants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        className="absolute inset-0 flex items-center justify-center"
      >
        <IconComponent size={size} className="text-primary opacity-70" />
      </motion.div>
      <IconComponent size={size} className="text-white" />
    </motion.div>
  )
}

export default PetIcon
