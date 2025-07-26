"use client"

import type React from "react"

import { motion } from "framer-motion"
import { PawPrint, Twitter, TextIcon as Telegram, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const SiteFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative w-full py-16 bg-black text-white overflow-hidden">
      {/* Curved wave effect - using a div with border-radius and overflow hidden */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black -translate-y-full">
        <div className="absolute bottom-0 left-0 w-full h-full rounded-t-[50%] bg-black"></div>
      </div>

      <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
        <motion.div
          className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-8 animate-pulse-glow cursor-pointer"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <PawPrint size={48} className="text-white" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-lg font-medium">
          <Link href="https://github.com/rythmern02/Petoverse-web/blob/aab6927d8b49c861aa7027e4158b261b0556aef7/petoverse%20whitepaper-.pdf" className="hover:text-primary transition-colors">
            Whitepaper
          </Link>
          <Link href="https://x.com/petoverse_" className="hover:text-primary transition-colors">
            <Twitter size={20} className="inline-block mr-1" /> Twitter
          </Link>
          <Link href="https://t.me/@rythmern" className="hover:text-primary transition-colors">
            <Telegram size={20} className="inline-block mr-1" /> Telegram
          </Link>
          <Link href="/" className="hover:text-primary transition-colors">
            <BookOpen size={20} className="inline-block mr-1" /> Docs
          </Link>
          <Link href="mail::petoverse01@gmail.com" className="hover:text-primary transition-colors">
            Support
          </Link>
        </div>

        <div className="flex items-center space-x-4 text-gray-400 text-sm">
          <span>Built on</span>
          <Image
            src="/assets/images/logos/avalanche.jpg"
            alt="Avalanche"
            width={50}
            height={15}
            className="opacity-70"
          />
        </div>

        <p className="mt-8 text-gray-500 text-sm">&copy; {new Date().getFullYear()} Petoverse. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default SiteFooter
