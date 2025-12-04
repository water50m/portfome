"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.3} />;
}

export default function ProjectPreview3D({ title, model, credit}:{ title: string; model: string; credit: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-black border border-cyan-500/40 rounded-2xl p-6
                 shadow-[0_0_20px_#00f0ff50] cursor-pointer"
    >
      <div className="h-64 mb-6 rounded-xl overflow-hidden bg-[#0a0a0a] ">
        <Canvas shadows camera={{ position: [3, 2, 4], fov: 40 }}>
          <ambientLight intensity={0.6} />
          <directionalLight intensity={2} position={[4, 4, 4]} />

          <Model url={model} />

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      <h3 className="text-xl text-cyan-300 mb-2">{title}</h3>
      <p className="opacity-70">Interactive 3D project showcase.</p>
      <p className="opacity-70">{credit}</p>
    </motion.div>
  );
}
