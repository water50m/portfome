import ProjectPreview3D from "@/components/ProjectPreview3D";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    { title: "Web development", model: "/models/3d_clipart_webdev.glb", credit: "https://www.fab.com/listings/b3c42ec1-913d-48cd-b6c6-8a314abd9726" },
    { title: "AI Landing Page", model: "/models/monitor.glb" ,credit: "https://www.fab.com/listings/b09b0d38-51da-4183-aba2-b44e086dfc83" },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-10 py-24">
            {/* 🔹 Back Button */}
      <div className="relative mb-8">
        <h1 className="text-5xl font-semibold ppo">
          <span className="text-cyan-400">/</span> Projects
        </h1>

        <Link
          href="/"
          className="absolute top-0 right-0 text-cyan-400 hover:underline flex items-center gap-2"
        >
          ← Back
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-16">
        {projects.map((p, i) => (
          <ProjectPreview3D key={i} title={p.title} model={p.model} credit={p.credit} />
        ))}
      </div>
    </main>
  );
}
