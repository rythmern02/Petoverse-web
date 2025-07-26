"use client"

import type React from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Gltf, Environment } from "@react-three/drei"
import { Suspense } from "react"
import { motion } from "framer-motion"
import AnimatedText from "@/components/animated-text"

interface ThreePetModelProps {
  modelPath?: string
}

const ThreePetModel: React.FC<ThreePetModelProps> = ({ modelPath = "/assets/3d/owl.glb" }) => {
  return (
    <section className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center glow-text z-10">
        <AnimatedText text="Meet Your Future Companion" delay={0.2} />
      </h2>
      <motion.div
        className="w-full h-[calc(100vh-200px)] relative z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Gltf src={modelPath} scale={2} position={[0, -1, 0]} /> {/* Adjust scale/position for duck.glb */}
            <OrbitControls enableZoom={true} enablePan={true} />
            <Environment preset="sunset" /> {/* Provides realistic lighting */}
          </Suspense>
        </Canvas>
      </motion.div>
    </section>
  )
}

export default ThreePetModel
