"use client";
import React from "react";
import { resumeData } from "@/data/resume-data";
import { Printer, MapPin, Mail, Phone, Github, Globe, Linkedin, ExternalLink, Workflow, Image as ImageIcon} from "lucide-react";
import Link from "next/link"; 
import MermaidChart from "@/components/MermaidChart"

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 print:bg-white print:p-0">
      
      {/* --- ปุ่ม Download PDF (ซ่อนเวลา Print) --- */}
      <div className="fixed bottom-8 right-8 print:hidden z-50">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-full shadow-xl transition-all border border-slate-700"
        >
          <Printer size={18} /> Save as PDF
        </button>
      </div>

      {/* --- A4 Container --- */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none print:max-w-none min-h-[297mm] p-8 md:p-4 text-slate-800">
        
        {/* --- 1. HEADER (ปรับใหม่ให้คลีน) --- */}
        <header className="flex flex-col md:flex-row gap-6 items-start border-b-2 border-slate-100  mb-8">
          
          {/* ส่วนรูปภาพ (ถ้าไม่ใส่รูป ให้ลบ div นี้ออกได้เลย) */}
          {/* <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden border-4 border-white shadow-sm"> */}
            {/* ใส่รูปจริงตรงนี้: <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
            {/* <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">NO PHOTO</div> */}
          {/* </div> */}

          {/* ส่วนข้อมูลส่วนตัว */}
          <div className="flex-1 space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 uppercase">
              {resumeData.personalInfo.name}
            </h1>
            <p className="text-xl text-blue-600 font-medium">
              {resumeData.personalInfo.title}
            </p>
            
            {/* Contact Grid */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 mt-3">
              {resumeData.personalInfo.email && (
                  <div className="flex items-center gap-1.5">
                      <Mail size={14} className="text-slate-400" /> 
                      <a href={`mailto:${resumeData.personalInfo.email}`} className="hover:text-blue-600 transition-colors">
                        {resumeData.personalInfo.email}
                      </a>
                  </div>
              )}
              {resumeData.personalInfo.phone && (
                  <div className="flex items-center gap-1.5">
                      <Phone size={14} className="text-slate-400" /> {resumeData.personalInfo.phone}
                  </div>
              )}
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-slate-400" /> {resumeData.personalInfo.location}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 text-sm mt-2">
                {resumeData.personalInfo.github && (
                   <a href={`https://${resumeData.personalInfo.github}`} target="_blank" className="flex items-center gap-1.5 text-slate-500 hover:text-black transition-colors">
                      <Github size={14} /> 
                      <span>{resumeData.personalInfo.github.split('/').pop()}</span>
                   </a>
                )}
                {/* {resumeData.personalInfo.linkedin && (
                   <a href={`https://${resumeData.personalInfo.linkedin}`} target="_blank" className="flex items-center gap-1.5 text-slate-500 hover:text-blue-700 transition-colors">
                      <Linkedin size={14} /> 
                      <span>LinkedIn</span>
                   </a>
                )} */}
                 {resumeData.personalInfo.portfolio && (
                   <a href={`https://${resumeData.personalInfo.portfolio}`} target="_blank" className="flex items-center gap-1.5 text-slate-500 hover:text-blue-600 transition-colors">
                      <Globe size={14} /> 
                      <span>Portfolio: https://pflo.gotzillax.online</span>

                   </a>
                )}
            </div>
          </div>
        </header>

        {/* --- 2. SUMMARY (เอาสีพื้นหลังออกแล้ว) --- */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-100 pb-1">
            Professional Summary
          </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base text-left" 
                dangerouslySetInnerHTML={{ __html: resumeData.summary.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-slate-900">$1</span>') }} 
            />        
        </section>

        {/* --- 3. SKILLS (ปรับระยะห่างนิดหน่อย) --- */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 border-b border-slate-100 pb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {resumeData.skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <span key={idx} className="bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium print:border print:border-gray-200 print:bg-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. PROJECTS --- */}
       <section className="mb-10">
          <div className="flex justify-between items-end border-b border-slate-100 pb-1 mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Key Projects
            </h2>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest print:hidden">Selected Works</span>
          </div>

          <div className="space-y-8">
            {resumeData.projects.map((project, index) => (
              <div key={index} className="group break-inside-avoid">
                
                <div className="mb-3">
                  
                  {/* --- Row 1: Title (Left) & GitHub (Right) --- */}
                  {/* ✅ ใช้ justify-between เพื่อดันของไปชิดซ้าย-ขวา */}
                  <div className="flex justify-between items-start mb-2 gap-4"> 
                    
                    {/* Left: Project Title */}
                    <h3 className="font-bold text-slate-900 text-base">
                      {project.link ? (
                        <Link
                          href={project.link}
                          target={project.link.startsWith('http') ? "_blank" : undefined}
                          className="group-hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                        >
                          {project.title}
                          <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ) : (
                        <span className="group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </span>
                      )}
                    </h3>

                    {/* Right: GitHub Icon */}
                    {/* ✅ shrink-0: ป้องกันไอคอนบี้ถ้าชื่อยาว */}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-slate-400 hover:text-slate-900 transition-colors print:hidden shrink-0"
                        title="View Source Code"
                      >
                        <Github size={18} /> {/* เพิ่มขนาดนิดนึงเพื่อให้เห็นชัดขึ้นเมื่ออยู่ไกล */}
                      </Link>
                    )}
                  </div>

                  {/* --- Row 2: Tech Stack --- */}
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                    {project.tech.map((t, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 px-2 py-1 rounded print:bg-transparent print:text-slate-500 print:border print:border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Development Status */}
                {project.developmentStatus && (
                  <p className="text-xs text-amber-600 mb-2 font-medium bg-amber-50 inline-block px-2 py-1 rounded">
                    {project.developmentStatus}
                  </p>
                )}

                {/* Description List */}
                <ul className="list-disc list-outside ml-4 space-y-1.5 marker:text-slate-300">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: desc.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800 font-semibold">$1</strong>') }} />
                  ))}
                </ul>

                {/* Image Preview */}
                {project.img && (
                  <div className="mt-4 border border-slate-100 rounded-lg bg-slate-50/50 p-4 print:border-slate-200">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <ImageIcon size={12} />
                      Preview
                    </h4>
                    <div className="bg-white rounded border border-slate-100 p-2 shadow-sm overflow-hidden">
                      <img 
                        src={project.img} 
                        alt={`Preview of ${project.title}`} 
                        className="w-full h-auto rounded object-cover block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                {/* Mermaid Diagram */}
                {project.mermaidCode && (
                  <div className="mt-4 border border-slate-100 rounded-lg bg-slate-50/50 p-4 print:border-slate-200">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Workflow size={12} />
                      System Architecture
                    </h4>
                    <div className="bg-white rounded border border-slate-100 p-2 shadow-sm overflow-hidden">
                      <MermaidChart code={project.mermaidCode} />
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        </section>


        {/* --- 6. EDUCATION --- */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 border-b border-slate-100 pb-1">
            Education
          </h2>
          <div>
            <h3 className="font-bold text-slate-900">{resumeData.education.degree}</h3>
            <div className="flex justify-between text-sm text-slate-600 mt-1">
                <span>{resumeData.education.university}</span>
                {/* <span>{resumeData.education.year}</span> */}
            </div>
          </div>
        </section>

      </div>
      
      {/* Footer (Screen only) */}
      <div className="text-center text-gray-400 text-xs mt-8 pb-4 print:hidden opacity-50">
        Preview Mode • Use Chrome for best printing results
      </div>
    </div>
  );
}