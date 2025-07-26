"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import AnimatedText from "@/components/animated-text"
import Image from "next/image"

const zones = [
  {
    name: "Lava Zone",
    color: "#FF4500",
    description: "Volcanic landscapes, rare resources.",
    position: { top: "20%", left: "15%" },
  },
  {
    name: "Sky Islands",
    color: "#87CEEB",
    description: "Floating cities, aerial challenges.",
    position: { top: "10%", right: "20%" },
  },
  {
    name: "Forests",
    color: "#32CD32",
    description: "Lush ecosystems, hidden ancient pets.",
    position: { bottom: "25%", left: "30%" },
  },
  {
    name: "Cyber Arenas",
    color: "#00FFFF",
    description: "High-tech battlegrounds, competitive play.",
    position: { bottom: "15%", right: "10%" },
  },
]

const WorldMap: React.FC = () => {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null)

  return (
    <section className="relative w-full py-20 bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center glow-text">
        <AnimatedText text="The World of Petoverse" delay={0.2} />
      </h2>

      <p className="text-lg md:text-xl text-gray-300 mb-12 text-center max-w-3xl">
        Zones built on Avalanche Subnets. Custom chains. Real stakes.
      </p>

      <div className="relative w-full max-w-5xl aspect-video rounded-[3rem] overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl">
        {/* Placeholder for the curved map view */}
        <Image
          src="/placeholder.svg?height=600&width=1000"
          alt="Petoverse World Map"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />

        {zones.map((zone) => (
          <motion.div
            key={zone.name}
            className="absolute w-24 h-24 rounded-full flex items-center justify-center cursor-pointer z-10"
            style={{
              top: zone.position.top,
              left: zone.position.left,
              right: zone.position.right,
              bottom: zone.position.bottom,
              backgroundColor: hoveredZone === zone.name ? zone.color : `${zone.color}30`, // Add transparency
              boxShadow: hoveredZone === zone.name ? `0 0 20px ${zone.color}` : "none",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={() => setHoveredZone(zone.name)}
            onMouseLeave={() => setHoveredZone(null)}
            whileHover={{ scale: 1.1, boxShadow: `0 0 30px ${zone.color}` }}
          >
            <span className="text-white font-semibold text-sm text-center">{zone.name}</span>
          </motion.div>
        ))}

        {hoveredZone && (
          <motion.div
            className="absolute p-4 rounded-lg glass-card z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderColor: zones.find((z) => z.name === hoveredZone)?.color,
              borderWidth: "2px",
            }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: zones.find((z) => z.name === hoveredZone)?.color }}>
              {hoveredZone}
            </h3>
            <p className="text-gray-200 text-sm">{zones.find((z) => z.name === hoveredZone)?.description}</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default WorldMap
