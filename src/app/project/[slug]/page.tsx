// app/project/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import { 
  ArrowLeft, AlertTriangle, Lightbulb, 
  Wrench, Terminal
} from "lucide-react";

export default function ProjectDetail() {
  const params = useParams(); 
  // @ts-ignore (Bypass type check for demo simplicity)
  const project = caseStudies.find((p) => p.slug === params.slug);

  if (!project) return <div className="p-10 text-center">Project not found</div>;

  return (
    <div className="min-h-screen bg-white text-slate-800 pb-20 font-sans">
      
      {/* Navbar */}
      <nav className="max-w-8xl mx-auto py-8 px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
      </nav>

      <main className="max-w-8xl mx-auto px-6">
        
        {/* --- Header --- */}
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <span key={tech} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm font-semibold border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* --- Content --- */}
        <div className="space-y-16">
          
          {/* 1. Background */}
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
              <Lightbulb className="text-yellow-500" strokeWidth={2.5} /> 
              The Background
            </h2>
            <div className="text-lg text-slate-700 leading-8 whitespace-pre-wrap bg-yellow-50/50 p-6 rounded-xl border border-yellow-100">
              {project.content.background}
            </div>
          </section>

          {/* 2. Timeline: Problem -> Solution -> Learning */}
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-8">
              <Terminal className="text-blue-600" strokeWidth={2.5} /> 
              Development Log & Problem Solving
            </h2>
            
            <div className="relative border-l-2 border-slate-200 ml-3 space-y-12">
              {/* @ts-ignore */}
              {project.content.challenges.map((phase, idx) => (
                <section key={idx} className="relative pl-8 border-l-2 border-slate-200">
                {/* Timeline Dot */}
                <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">
                  {idx + 1}
                </span>

                {/* Phase Title */}
                <h2 className="text-2xl font-bold text-slate-900 mb-6 -mt-1">
                  {phase.title}
                </h2>

                {/* --- Sub-Problems Grid --- */}
                <div className="grid gap-6 md:grid-cols-2 mb-6">
                  {phase.subProblems.map((sub, subIdx) => (
                    <div key={subIdx} className="bg-slate-50 rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      {/* Problem Title */}
                      <h3 className="flex items-center gap-2 font-bold text-red-600 text-lg mb-2">
                        <AlertTriangle size={18} /> {sub.title}
                      </h3>
                      
                      {/* Problem Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">
                        {sub.description}
                      </p>

                      {/* Image (Optional) */}
                      {sub.image && (
                        <div className="rounded-lg overflow-hidden border border-slate-200 mt-2">
                          <img 
                            src={sub.image} 
                            alt={sub.title} 
                            className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* --- Solution & Result Box --- */}
                <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                  <h4 className="flex items-center gap-2 font-bold text-blue-700 mb-2">
                    <Wrench size={18} /> The Solution
                  </h4>
                  <p className="text-slate-700 leading-7">
                    {phase.solution}
                  </p>
                  
                  {/* Phase Learnings Tags */}
                  {phase.learnings && (
                     <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-blue-100/50">
                        {phase.learnings.map((tag, tIdx) => (
                          <span key={tIdx} className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-md">
                            #{tag}
                          </span>
                        ))}
                     </div>
                  )}
                </div>

              </section>
              ))}
            </div>
          </section>

          {/* 3. Global Conclusion */}
          {project.content.conclusion && (
            <section className="bg-slate-100 p-8 rounded-2xl text-center">
               <h2 className="text-xl font-bold text-slate-800 mb-4">Current Status</h2>
               <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                 {project.content.conclusion}
               </p>
            </section>
          )}

        </div>
      </main>
    </div>
  );
}