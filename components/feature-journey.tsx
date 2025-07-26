"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useInView } from "react-intersection-observer"
import { Sparkles, MessageSquareText, HeartHandshake, Gem, Vote } from "lucide-react"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import AnimatedText from "@/components/animated-text"

interface FeatureStepProps {
  icon: React.ElementType
  title: string
  description: string
  delay?: number
}

const FeatureStep: React.FC<FeatureStepProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col items-center text-center max-w-md mx-auto p-6"
    >
      <GlassmorphismCard className="p-6 mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-primary/20 border-primary/30">
        <Icon size={48} className="text-primary glow-text" />
      </GlassmorphismCard>
      <h3 className="text-3xl font-bold mb-3 glow-text">{title}</h3>
      <p className="text-lg text-gray-300">{description}</p>
    </motion.div>
  )
}

const FeatureJourney: React.FC = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.2])

  return (
    <section ref={ref} className="relative w-full py-20 bg-black text-white overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="sticky top-0 left-0 w-full h-full flex flex-col items-center justify-center z-0"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center glow-text">
          <AnimatedText text="Your Petoverse Journey" delay={0.2} />
        </h2>
      </motion.div>

      <div className="relative z-10 flex flex-col space-y-24 mt-20">
        <FeatureStep
          icon={Sparkles}
          title="Mint your pet (ERC-721A NFT, soulbound)"
          description="Each Petoverse companion is a unique, soulbound NFT, ensuring a truly personal connection."
          delay={0.2}
        />
        <FeatureStep
          icon={MessageSquareText}
          title="Talk to it. It remembers."
          description="Engage in meaningful conversations. Your pet learns and evolves its personality based on your interactions."
          delay={0.4}
        />
        <FeatureStep
          icon={HeartHandshake}
          title="Grow it. Train it. It reacts."
          description="Nurture your pet through training and care. Witness its emotional responses and growth in real-time."
          delay={0.6}
        />
        <FeatureStep
          icon={Gem}
          title="Explore missions, earn tokens, evolve it."
          description="Embark on adventures, complete quests, and earn $PETO tokens to unlock new abilities and evolutions."
          delay={0.8}
        />
        <FeatureStep
          icon={Vote}
          title="It votes with you. It learns from you. It becomes you."
          description="Your pet is an extension of your digital self, participating in governance and reflecting your journey."
          delay={1.0}
        />
      </div>
    </section>
  )
}

export default FeatureJourney
