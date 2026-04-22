'use client';

import React, { useState } from 'react';
import { Mail, Github, MapPin, Globe, Phone, Printer, Languages } from 'lucide-react';
import Link from 'next/link';
import { summary } from 'framer-motion/client';

// --- Configuration / Data (Multi-language) ---
const RESUME_DATA = {
  en: {
    name: "PARINYA MACHAOPA",
    title: "AI Engineer & Full Stack Developer",
    // summary: "Full-Stack AI Engineer with expertise in AI Solutions (Computer Vision & LLMs) and Infrastructure. Experienced in designing complex database schemas for enterprise HR systems and deploying secure, high-performance web applications using Next.js and Docker. Proven ability to digitize manual workflows and solve data scarcity problems via synthetic data generation.",
    summary: "Results-driven Full-Stack Developer experienced in designing and engineering high-performance web systems, from UI implementation to complex database architecture. Skilled in modern web technologies and secure infrastructure deployment. Brings an innovative edge with practical knowledge in AI integration, particularly in Computer Vision and LLMs, to enhance application capabilities and automate workflows.",
    experienceTitle: "Work Experience",
    projectTitle: "Key Projects",
    educationTitle: "Education",
    skillsTitle: "Technical Skills",
    experience: [
      {
        role: "Software Developer Intern", 
        company: "Eternelle Co., Ltd.",
        period: "Apr 2025 – May 2025",
        points: [
          "**Proficient in Full-stack development** by building an HRIS with **Next.js** and **MSSQL**, learning to transform complex physical workflows into efficient digital systems.",
          "Deepened understanding of **Relational Database Design** through architecting schemas for payroll and career history logic.",
          "Gained practical experience in **Enterprise Security** by implementing **RBAC** to protect sensitive employee data."
        ]
      },
      {
        role: "Full Stack Developer Intern",
        company: "Faculty of Medical Science, Naresuan University",
        period: "Nov 2023 - Nov 2024 (Project Delivery)", 
        points: [
          "Learned to bridge user requirements with technical solutions by digitizing manual tracking via **PHP** and **MySQL**.",
          "Explored **Geospatial Data Visualization** using **Leaflet.js**, improving strategic planning through interactive mapping.",
          "Mastered **Query Optimization**, learning how database performance directly impacts administrative efficiency."
        ]
      }
    ],
    projects: [
      {
        title: "Enterprise-Grade Home Lab Infrastructure",
        tech: "Docker, Linux, Cloudflare, Tailscale",
        points: [
          "Navigated complex **Network Security** challenges by self-hosting microservices via **VPN Mesh**, avoiding public exposure.",
          "Gained hands-on experience in **Systems Administration** and DNS management for robust remote access."
        ]
      },
      {
        title: "Faculty Personnel & Budget Management System (FPA)",
        tech: "PHP, MySQL, LDAP, UI/UX Design",
        points: [
          "Engineered a full-cycle web application from scratch, designing a robust **Relational Database** to streamline complex faculty budget and personnel data.",
          "Integrated enterprise-level **LDAP Authentication** and implemented **PDPA-compliant** UI flows to ensure strict organizational data privacy."
        ]
      },
      // {
      //   title: "AI Clothes Detection for Suspect Identification",
      //   tech: "Python, PyTorch, YOLO, OpenCV",
      //   points: [
      //     "Developed an AI system to identify individuals from CCTV feeds based on physical descriptions of clothing to assist in suspect tracking.",
      //     "Solved **Data Scarcity** by engineering a Synthetic Data Pipeline to generate 10,000+ labeled clothing images, learning how to bridge the gap between virtual and real-world data.",
      //     "Explored **Real-time Inference** on video streams, focusing on the accuracy of detection in low-quality surveillance environments."
      //   ]
      // },
      {
        title: "Epic Card Battle RPG",
        tech: "Next.js 14, TypeScript, Tailwind CSS",
        points: [
          "Mastered **Advanced State Management** and decoupled architecture, learning to manage complex game logic without external engines.",
          "Deepened **Type Safety** knowledge through strict TypeScript patterns to ensure code maintainability."
        ]
      },
      {
        title: "AI-Powered Stock Sentiment Bot",
        tech: "Python, LLMs (Gemini/GPT-4), Supabase",
        points: [
          "Explored **Prompt Engineering** and **LLM Orchestration**, learning to optimize token costs while maintaining analysis quality.",
          "Learned to automate lifecycle tasks (CI/CD) using **GitHub Actions** for real-time market data."
        ]
      }
    ],
    education: {
      degree: "Bachelor of Engineering in Computer Engineering",
      university: "Naresuan University",
      year: "Graduating 2026"
    }
  },
  th: {
    name: "ปริญญา มาชาวป่า",
    title: "วิศวกรเอไอ และนักพัฒนาเว็บแบบฟูลสแต็ก",
    // summary: "วิศวกร AI แบบ Full-Stack ที่มีความเชี่ยวชาญด้านโซลูชัน AI (Computer Vision & LLMs) และโครงสร้างพื้นฐาน มีประสบการณ์ในการออกแบบฐานข้อมูลที่ซับซ้อนสำหรับระบบ HR ระดับองค์กร และการปรับใช้เว็บแอปพลิเคชันประสิทธิภาพสูงที่มีความปลอดภัยสูงด้วย Next.js และ Docker มีความสามารถในการเปลี่ยนขั้นตอนการทำงานแบบดั้งเดิมให้เป็นระบบดิจิทัล และแก้ปัญหาการขาดแคลนข้อมูลด้วยการสร้างข้อมูลสังเคราะห์ (Synthetic Data)",
    summary: "นักพัฒนาเว็บแบบ Full-Stack ที่มีความเชี่ยวชาญในการออกแบบและพัฒนาระบบเว็บที่มีประสิทธิภาพสูง ตั้งแต่การสร้างส่วนติดต่อผู้ใช้ไปจนถึงการออกแบบฐานข้อมูลที่ซับซ้อน มีทักษะในการใช้เทคโนโลยีเว็บสมัยใหม่และการปรับใช้โครงสร้างพื้นฐานที่ปลอดภัย พร้อมด้วยความรู้ด้านการผสานรวม AI โดยเฉพาะในด้าน Computer Vision และ LLMs เพื่อเพิ่มขีดความสามารถของแอปพลิเคชันและทำให้กระบวนการทำงานเป็นอัตโนมัติ",
    experienceTitle: "ประสบการณ์การทำงาน",
    projectTitle: "โปรเจกต์ที่สำคัญ",
    educationTitle: "การศึกษา",
    skillsTitle: "ทักษะทางเทคนิค",
    experience: [
      {
        role: "นักศึกษาฝึกงานซอฟต์แวร์", 
        company: "บริษัท อีเทอเนลเล่ จำกัด",
        period: "เม.ย. 2568 – พ.ค. 2568",
        points: [
          "**สามารถพัฒนาแบบ Full-stack ได้เป็นอย่างดี** ผ่านการสร้างระบบ HRIS ด้วย **Next.js** และ **MSSQL** เรียนรู้การเปลี่ยนกระบวนการทำงานในกระดาษให้เป็นระบบดิจิทัลที่มีประสิทธิภาพ",
          "เข้าใจการออกแบบ **Relational Database** ในเชิงลึกผ่านการออกแบบ Schema สำหรับระบบคำนวณเงินเดือนและการจัดการประวัติพนักงาน",
          "ได้รับประสบการณ์จริงด้าน **Enterprise Security** โดยการนำระบบ **RBAC** มาใช้เพื่อปกป้องข้อมูลเงินเดือนและข้อมูลพนักงานที่ละเอียดอ่อน"
        ]
      },
      {
        role: "นักศึกษาฝึกงานฟูลสแต็ก",
        company: "คณะวิทยาศาสตร์การแพทย์ มหาวิทยาลัยนเรศวร",
        period: "พ.ย. 2566 - พ.ย. 2567 (ส่งมอบโปรเจกต์)", 
        points: [
          "เรียนรู้การแปลงความต้องการของผู้ใช้ให้เป็นโซลูชันทางเทคนิค โดยการเปลี่ยนระบบติดตามการฝึกงานแบบเดิมให้เป็นดิจิทัลด้วย **PHP** และ **MySQL**",
          "ศึกษาการจัดการข้อมูล **Geospatial** ด้วย **Leaflet.js** เพื่อช่วยในการวางแผนกลยุทธ์ผ่านแผนที่แบบโต้ตอบ",
          "ฝึกฝนทักษะ **Query Optimization** เรียนรู้ว่าประสิทธิภาพของฐานข้อมูลส่งผลโดยตรงต่อความรวดเร็วในการทำงานของเจ้าหน้าที่"
        ]
      }
    ],
    projects: [
      {
        title: "โครงสร้างพื้นฐาน Home Lab ระดับองค์กร",
        tech: "Docker, Linux, Cloudflare, Tailscale",
        points: [
          "จัดการความท้าทายด้าน **Network Security** โดยการโฮสต์ Microservices ผ่าน **VPN Mesh** เพื่อหลีกเลี่ยงการเปิดช่องโหว่สู่สาธารณะ",
          "ได้รับประสบการณ์ตรงด้าน **Systems Administration** และการจัดการ DNS สำหรับการเข้าถึงจากระยะไกลที่มีความเสถียร"
        ]
      },
      // {
      //   title: "ระบบ AI ตรวจจับเสื้อผ้าเพื่อระบุตัวตนบุคคล",
      //   tech: "Python, PyTorch, YOLO, OpenCV",
      //   points: [
      //     "พัฒนา AI สำหรับตรวจจับและค้นหาบุคคลจากกล้องวงจรปิดโดยวิเคราะห์จากลักษณะเสื้อผ้า เพื่อช่วยในการระบุตัวตนผู้ต้องสงสัยตามรูปพรรณสัณฐาน",
      //     "แก้ปัญหา **การขาดแคลนข้อมูล** โดยสร้าง Pipeline ข้อมูลสังเคราะห์กว่า 10,000 ภาพ เรียนรู้การปรับจูนโมเดลให้ใช้งานได้จริงกับภาพจากกล้องวงจรปิดที่มีความละเอียดต่ำ",
      //     "ศึกษาการทำ **Real-time Inference** กับไฟล์วิดีโอ เพื่อเพิ่มประสิทธิภาพในการค้นหาบุคคลในสถานการณ์จริง"
      //   ]
      // },
      {
        title: "ระบบจัดการข้อมูลบุคลากรและงบประมาณคณะ (FPA System)",
        tech: "PHP, MySQL, LDAP, UI/UX Design",
        points: [
          "พัฒนาระบบเว็บแอปพลิเคชันแบบ Full-cycle ตั้งแต่เริ่มต้น โดยออกแบบโครงสร้าง **Relational Database** เพื่อจัดการข้อมูลบุคลากรและงบประมาณของคณะที่มีความซับซ้อน",
          "เชื่อมต่อระบบยืนยันตัวตนระดับองค์กรด้วย **LDAP Authentication** และออกแบบหน้าต่าง UI ที่รองรับนโยบาย **PDPA** เพื่อรักษาความปลอดภัยและความเป็นส่วนตัวของข้อมูลผู้ใช้งาน"
        ]
      },
      {
        title: "Epic Card Battle RPG",
        tech: "Next.js 14, TypeScript, Tailwind CSS",
        points: [
          "เชี่ยวชาญการจัดการ **State ระดับสูง** และสถาปัตยกรรมแบบ Decoupled เรียนรู้การจัดการ Logic ของเกมที่ซับซ้อนโดยไม่ใช้ Game Engine",
          "เพิ่มพูนความรู้ด้าน **Type Safety** ผ่านรูปแบบ TypeScript ขั้นสูงเพื่อให้โค้ดดูแลรักษาง่ายในระยะยาว"
        ]
      },
      {
        title: "บอทวิเคราะห์หุ้นด้วย AI",
        tech: "Python, LLMs (Gemini/GPT-4), Supabase",
        points: [
          "ศึกษาด้าน **Prompt Engineering** และการจัดการ **LLM Orchestration** เรียนรู้วิธีลดต้นทุน API ในขณะที่ยังรักษาคุณภาพการวิเคราะห์ไว้ได้",
          "เรียนรู้การทำงานแบบอัตโนมัติ (CI/CD) ด้วย **GitHub Actions** สำหรับการดึงข้อมูลตลาดแบบ Real-time"
        ]
      }
    ],
    education: {
      degree: "วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์",
      university: "มหาวิทยาลัยนเรศวร",
      year: "จบการศึกษาปี 2569"
    }
  }
};

const COMMON_CONTACT = {
  email: "pmachaopa1@gmail.com",
  tel: "(+66) 65-815-1150", 
  location: "Phitsanulok, Thailand",
  github: "water50m",
  githubUrl: "https://github.com/water50m",
  portfolio: "portfome-olive.vercel.app",
  portfolioUrl: "https://portfome-olive.vercel.app/",
  resumeUrl: "https://portfome-olive.vercel.app/resume"
};

const SKILLS = {
  languages: ["Python", "TypeScript", "SQL (MSSQL/MySQL)", "PHP", "C++"],
  frameworks: ["Next.js", "React", "Tailwind CSS", "PyTorch", "OpenCV", "YOLOv8"],
  infrastructure: ["Docker", "Linux (Debian)", "Cloudflare", "Tailscale", "Git/GitHub Actions"],
  tools: ["Microsoft SQL Server", "Supabase", "PostgreSQL", "Figma"]
};

export default function ResumePage() {
  const [lang, setLang] = useState<'en' | 'th'>('en');
  const d = RESUME_DATA[lang];

  return (
    <main className="min-h-screen bg-gray-100 py-5 print:bg-white print:p-0">
      {/* Floating Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 print:hidden z-50">
        <button 
          onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center gap-2 text-sm"
        >
          <Languages size={16} /> {lang === 'en' ? 'ภาษาไทย' : 'English'}
        </button>
        <button 
          onClick={() => window.print()}
          className="bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition flex items-center gap-2 text-sm"
        >
          <Printer size={16} /> Save PDF
        </button>
      </div>

      {/* A4 Page Container */}
      <div className="w-[210mm] mx-auto bg-white shadow-xl p-8 min-h-[297mm] print:shadow-none print:w-full print:h-full print:p-6 text-gray-800">
        
        {/* --- Header --- */}
        <header className="border-b-2 border-gray-900 pb-2 mb-2">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold uppercase tracking-tight leading-none">{d.name}</h1>
              <p className="text-lg font-medium text-gray-600 mt-1">{d.title}</p>
            </div>
          </div>
          
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 font-medium">
            <a href={`mailto:${COMMON_CONTACT.email}`} className="flex items-center gap-1 hover:text-black">
              <Mail size={12} /> {COMMON_CONTACT.email}
            </a>
            <span className="flex items-center gap-1">
              <Phone size={12} /> {COMMON_CONTACT.tel}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={12} /> {COMMON_CONTACT.location}
            </span>
            <Link href={COMMON_CONTACT.githubUrl} className="flex items-center gap-1 hover:text-black" target="_blank">
              <Github size={12} /> github.com/{COMMON_CONTACT.github}
            </Link>
            <div className="flex items-center gap-1 hover:text-black">
              <Link href={COMMON_CONTACT.portfolioUrl} className="flex items-center gap-1 hover:text-black" target="_blank">
                <Globe size={12} /> 
              </Link>
              portfolio: {COMMON_CONTACT.portfolio}
            </div>
            <div className="flex items-center gap-1 hover:text-black">
              <Link href={COMMON_CONTACT.portfolioUrl} >
                <Globe size={12} /> 
              </Link>
              resume: {COMMON_CONTACT.resumeUrl}
            </div>
          </div>
        </header>

        {/* --- Summary --- */}
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase border-b border-gray-300 mb-1 text-gray-900 tracking-wider font-sans">{d.experienceTitle === "Work Experience" ? "Professional Summary" : "สรุปทักษะและความเชี่ยวชาญ"}</h2>
          <p className="text-xs leading-snug text-gray-700 text-justify">
            {d.summary}
          </p>
        </section>

        {/* --- Technical Skills --- */}
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase border-b border-gray-300 mb-1 text-gray-900 tracking-wider font-sans">{d.skillsTitle}</h2>
          <div className="grid grid-cols-[100px_1fr] gap-y-0.5 text-xs leading-tight">
            <span className="font-bold text-gray-800">{lang === 'en' ? 'Languages:' : 'ภาษาโปรแกรม:'}</span>
            <span className="text-gray-700">{SKILLS.languages.join(", ")}</span>
            <span className="font-bold text-gray-800">{lang === 'en' ? 'Frameworks:' : 'เฟรมเวิร์ก:'}</span>
            <span className="text-gray-700">{SKILLS.frameworks.join(", ")}</span>
            <span className="font-bold text-gray-800">{lang === 'en' ? 'Infrastructure:' : 'โครงสร้างพื้นฐาน:'}</span>
            <span className="text-gray-700">{SKILLS.infrastructure.join(", ")}</span>
            <span className="font-bold text-gray-800">{lang === 'en' ? 'Tools:' : 'เครื่องมืออื่นๆ:'}</span>
            <span className="text-gray-700">{SKILLS.tools.join(", ")}</span>
          </div>
        </section>

        {/* --- Experience --- */}
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase border-b border-gray-300 mb-2 text-gray-900 tracking-wider font-sans">{d.experienceTitle}</h2>
          {d.experience.map((exp, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-sm font-bold text-gray-900 leading-none">{exp.role}</h3>
                <span className="text-xs font-medium text-gray-500 whitespace-nowrap ml-2">{exp.period}</span>
              </div>
              <p className="text-xs font-semibold text-gray-700 italic mb-0.5">{exp.company}</p>
              <ul className="list-disc list-outside ml-3 text-xs text-gray-700 space-y-0.5 leading-snug text-justify">
                {exp.points.map((point, i) => (
                  <li key={i} className="pl-1" dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* --- Projects --- */}
        <section className="mb-3">
          <h2 className="text-xs font-bold uppercase border-b border-gray-300 mb-2 text-gray-900 tracking-wider font-sans">{d.projectTitle}</h2>
          <div className="space-y-2">
            {d.projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-sm font-bold text-gray-900 leading-none">{project.title}</h3>
                  <span className="text-[10px] font-mono text-gray-500 bg-gray-50 px-1 rounded border border-gray-100 print:border-none print:p-0">
                    {project.tech}
                  </span>
                </div>
                <ul className="list-disc list-outside ml-3 text-xs text-gray-700 space-y-0.5 leading-snug text-justify">
                  {project.points.map((point, i) => (
                    <li key={i} className="pl-1" dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --- Education --- */}
        <section>
          <h2 className="text-xs font-bold uppercase border-b border-gray-300 mb-1 text-gray-900 tracking-wider font-sans">{d.educationTitle}</h2>
          <div className="flex justify-between items-baseline text-xs">
            <div>
              <span className="font-bold text-gray-900 block leading-tight">{d.education.degree}</span>
              <span className="text-gray-700">{d.education.university}</span>
            </div>
            <span className="text-gray-500 font-medium whitespace-nowrap ml-2">{d.education.year}</span>
          </div>
        </section>

      </div>
    </main>
  );
}