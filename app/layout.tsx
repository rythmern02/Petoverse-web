import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "Petoverse - Your AI Pet. Your Web3 Companion.",
  description: "Emotionally aware, chain-native digital pets that evolve with you.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/images/logos/petoverse-logo.png" />
      </head>
      <body className={cn("min-h-screen bg-black font-sans antialiased text-white", spaceGrotesk.variable)}>
        {children}
      </body>
    </html>
  )
}
