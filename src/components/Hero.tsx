"use client";


import { motion } from "framer-motion";
import Link from "next/link";
import Jupiter from "@/components/Jupiter";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 padding-0x">
      
      {/* 3D OBJECT */}
      <div className="h-[200px]">
        <Jupiter /> 
        {/* <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} intensity={1} />
          <Sphere args={[1, 64, 64]} scale={2.5}>
            <MeshDistortMaterial
              color="#00f0ff"
              distort={0.25}
              speed={1.5}
              emissive="#00f0ff"
            />
          </Sphere>
          <OrbitControls enableZoom={false} />
        </Canvas> */}
      </div>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >
        <h1 className="text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-cyan-400">Parinya Machaopa</span>
        </h1>
        <p className="text-xl opacity-80">
          Front-end Developer / Web UI Designer
        </p>
        <Link
          href="/projects"
          className="px-6 py-3 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded-xl hover:bg-cyan-500/30 transition inline-block"
        >
          View Projects
        </Link>
      </motion.div>
    </section>
  );
}
