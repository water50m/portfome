"use client";

import { motion } from "framer-motion";

export default function ProjectCard3D({ title }: { title: string }) {
  return (
    <motion.div
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-black border border-cyan-500/40 rounded-xl p-6
                 shadow-[0_0_20px_#00f0ff40] hover:shadow-[0_0_40px_#00f0ff80]"
    >
      <h3 className="text-cyan-400 text-xl mb-3">{title}</h3>
      <p className="opacity-70">Interactive futuristic UI design project.</p>
    </motion.div>
  );
}
