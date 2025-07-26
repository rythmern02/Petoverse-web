"use client"

import type React from "react"

import { motion } from "framer-motion"
import AnimatedText from "@/components/animated-text"
import { Coins, Store, Wallet, Brain, Users, Megaphone } from "lucide-react"

const nodes = [
  { name: "$PETO Token Utility", icon: Coins, emoji: "💰" },
  { name: "NFT Marketplace", icon: Store, emoji: "🛍️" },
  { name: "AI Pet Wallets", icon: Wallet, emoji: "🧠" },
  { name: "Emotional Engine", icon: Brain, emoji: "❤️" },
  { name: "Community Guilds", icon: Users, emoji: "🤝" },
  { name: "DAO Proposals", icon: Megaphone, emoji: "🗳️" },
]

const EcosystemSnapshot: React.FC = () => {
  const centerNode = nodes[0] // $PETO Token Utility as the center
  const orbitingNodes = nodes.slice(1)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  }

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
    hover: { scale: 1.1, boxShadow: "0 0 20px rgba(249, 115, 22, 0.7)", transition: { duration: 0.2 } },
  }

  return (
    <section className="relative w-full py-20 bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center glow-text">
        <AnimatedText text="Ecosystem Snapshot" delay={0.2} />
      </h2>

      <motion.div
        className="relative w-[600px] h-[600px] flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Center Node */}
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-primary/20 border border-primary/50 flex flex-col items-center justify-center text-center p-4 shadow-xl"
          variants={nodeVariants}
          whileHover="hover"
        >
          <centerNode.icon size={40} className="text-primary mb-2" />
          <p className="text-lg font-semibold glow-text">{centerNode.name}</p>
          <span className="text-2xl mt-1">{centerNode.emoji}</span>
        </motion.div>

        {/* Orbiting Nodes */}
        {orbitingNodes.map((node, index) => {
          const angle = (360 / orbitingNodes.length) * index
          const radius = 250 // Distance from center
          const x = radius * Math.cos((angle * Math.PI) / 180)
          const y = radius * Math.sin((angle * Math.PI) / 180)

          return (
            <motion.div
              key={node.name}
              className="absolute w-32 h-32 rounded-full glass-card flex flex-col items-center justify-center text-center p-3"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              variants={nodeVariants}
              whileHover="hover"
            >
              <node.icon size={32} className="text-white mb-1" />
              <p className="text-sm font-medium">{node.name}</p>
              <span className="text-xl mt-1">{node.emoji}</span>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default EcosystemSnapshot
