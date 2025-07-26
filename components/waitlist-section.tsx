"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { GlassmorphismCard } from "@/components/glassmorphism-card"
import { Input } from "@/components/ui/input"
import { GlowingButton } from "@/components/glowing-button"
import AnimatedText from "@/components/animated-text"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState("")
  const [wallet, setWallet] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const formData = new FormData(e.target as HTMLFormElement)
    formData.append("access_key", "dc38edd0-b123-4020-9754-036060788dec")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })
      
      const result = await response.json()
      if (result.success) {
        console.log(result)
        setSubmitted(true)
        // Reset form after a short delay
        setTimeout(() => {
          setEmail("")
          setWallet("")
          setSubmitted(false)
        }, 3000)
      } else {
        console.error("Form submission failed:", result)
        // You might want to show an error message to the user here
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      // You might want to show an error message to the user here
    }
  }

  return (
    <section
      id="waitlist"
      className="relative w-full py-20 bg-black text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center glow-text">
        <AnimatedText text="Be First to Enter the Petoverse" delay={0.2} />
      </h2>

      <GlassmorphismCard className="w-full max-w-md p-8 text-center relative overflow-hidden">
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20 rounded-[2rem]"
          >
            <CheckCircle2 className="text-green-500 mb-4" size={64} />
            <p className="text-2xl font-bold text-green-400">Success!</p>
            <p className="text-lg text-gray-300">You're on the waitlist.</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email (required)"
              className="w-full bg-transparent border border-primary/50 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent rounded-full px-6 py-3 text-lg"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="text"
              name="wallet"
              placeholder="Your Wallet Address (optional)"
              className="w-full bg-transparent border border-primary/50 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent rounded-full px-6 py-3 text-lg"
              value={wallet}
              onChange={(e: any) => setWallet(e.target.value)}
            />
          </div>
          <GlowingButton type="submit" size="lg" className="w-full py-3 text-xl">
            Join the Petoverse
          </GlowingButton>
        </form>

        <div className="mt-8 flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-400">Coming Soon to</p>
          <div className="flex space-x-4">
            <Image
              src="/assets/images/logos/App-Store.png"
              alt="App Store"
              width={80}
              height={13.3}
              className="opacity-50 hover:opacity-75 transition-opacity duration-300"
            />
            <Image
              src="/assets/images/logos/Play-Store.png"
              alt="Play Store"
              width={40}
              height={13.3}
              className="opacity-50 hover:opacity-75 transition-opacity duration-300"
            />
          </div>
        </div>
      </GlassmorphismCard>
    </section>
  )
}

export default WaitlistSection
