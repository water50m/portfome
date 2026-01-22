import React from 'react';
import { 
  Server, Cpu, Monitor, Network, Layers, Activity, Database, 
  Camera, Video, ImageIcon, Zap, Code, ShieldCheck, Scale, ArrowLeft 
} from 'lucide-react';
import Link from 'next/link';
import MermaidChart from '@/components/MermaidChart';

export default function ArchitectureDoc() {
  
  // ================= DATA SECTION =================

  // 1. Mermaid Diagram Code
  const diagramCode = `graph TD
    %% Layer 1: Hardware
    subgraph Hardware [🤖 Robot / ESP32]
        Lidar[LiDAR Sensor]
        Odom[Odometry / IMU]
        MCU[Microcontroller]
    end

    %% Layer 2: Backend (Python Middleware)
    subgraph Backend [🐍 Python Server @ Port 8000]
        PyGateway["Data Gateway\n(UDP/Serial Receiver)"]
        WSServer["WebSocket Server\n(FastAPI / Uvicorn)"]
    end

    %% Layer 3: Frontend (React)
    subgraph Frontend [💻 React Dashboard]
        WSClient["WebSocket Client\n(useRobot Hook)"]
        Visualization["Map Visualization\n(Canvas API)"]
    end

    %% Data Flow
    Lidar -->|"Raw Data"| MCU
    Odom -->|"Telemetry"| MCU
    MCU -->|"Network Stream (UDP/TCP)"| PyGateway
    PyGateway -->|"Process & Format"| WSServer
    WSServer <-->|"WebSocket Stream (JSON)"| WSClient
    WSClient -->|"Render Frame"| Visualization
    
    classDef default fill:#f9f9f9,stroke:#333,stroke-width:2px;
    `;

  // 2. Project Images (Placeholder)
  const projectImages = [
    {
      src: "/images/ui-robot-1.png", 
      title: "Main dashboard",
      description: "แลดงข้อมูลและ log"
    },
    {
      src: "/images/ui-robot-2.png", 
      title: "Map Display ",
      description: "แสดงเส้นทางการเคลื่อนที่และ การแสกนหาสิ่งกีดขวาง"
    }
  ];

  const verticalVideoPath = "/videos/ui-robot-3.mp4"; 

  // ================= RENDERING SECTION =================

  return (
    <div className="min-h-screen bg-slate-50  px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
              {/* Header Bar: แยกออกมาเพื่อให้จัด layout ง่าย */}
              <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/60 supports-[backdrop-filter]:bg-white/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                  
                  {/* ปุ่ม Back แต่งให้ดูเป็นปุ่ม Capsule สวยๆ */}
                  <Link 
                    href="/" 
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-slate-600 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:text-blue-600 hover:border-blue-200 transition-all duration-300"
                  >
                    {/* ลูกศรขยับถอยหลังเมื่อ Hover */}
                    <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
                    <span>Back to Portfolio</span>
                  </Link>

                </div>
              </header>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            System Architecture
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Real-time Autonomous Mobile Robot (AMR) Dashboard & Visualization
          </p>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            Pattern: Three-Tier Architecture
          </div>
        </div>

        {/* 1. Layer Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Layer 1: Hardware */}
           <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-red-50 p-6 border-b border-red-100 flex items-center gap-3">
              <div className="p-3 bg-red-100 rounded-lg text-red-600"><Cpu size={24} /></div>
              <div><h3 className="text-lg font-bold text-slate-900">Layer 1: Hardware</h3><p className="text-sm text-red-600 font-mono">Robot / ESP32</p></div>
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li>LiDAR Sensor Input</li><li>Odometry / IMU Processing</li><li>Network Stream (UDP/TCP) Output</li>
              </ul>
            </div>
          </div>
          {/* Layer 2: Backend */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-50 p-6 border-b border-green-100 flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg text-green-600"><Server size={24} /></div>
              <div><h3 className="text-lg font-bold text-slate-900">Layer 2: Backend</h3><p className="text-sm text-green-600 font-mono">Python @ Port 8000</p></div>
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li><strong>Data Gateway:</strong> รับ UDP/Serial</li><li><strong>WebSocket Server:</strong> ส่ง JSON</li><li>Process & Format Data</li>
              </ul>
            </div>
          </div>
          {/* Layer 3: Frontend */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-50 p-6 border-b border-blue-100 flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600"><Monitor size={24} /></div>
              <div><h3 className="text-lg font-bold text-slate-900">Layer 3: Frontend</h3><p className="text-sm text-blue-600 font-mono">React Dashboard</p></div>
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li><strong>WebSocket Client:</strong> useRobot Hook</li><li>Render Map & Telemetry</li><li>Interactive UI (Zoom/Pan)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Diagram Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden relative">
          <div className="bg-slate-800 px-6 py-4 flex items-center justify-between border-b border-slate-700">
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <Network size={20} className="text-blue-400" /> Data Flow Diagram
            </h3>
            <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">Live Render</span>
          </div>
          <div className="p-8 overflow-x-auto flex justify-center bg-slate-50">
             <MermaidChart code={diagramCode} />
          </div>
        </div>

        {/* 3. Project Gallery */}
        <div className="space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                <Camera className="text-slate-900" size={28} />
                <h2 className="text-3xl font-extrabold text-slate-900">Project Gallery</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projectImages.map((img, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-100">
                            <div className="aspect-video bg-slate-200 relative overflow-hidden">
                                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                                <div className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-md shadow-sm">
                                    <ImageIcon size={16} className="text-slate-700" />
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-lg text-slate-900 mb-1">{img.title}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">{img.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-800 flex flex-col">
                    <div className="bg-slate-800/50 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
                        <Video size={18} className="text-pink-400" />
                        <h4 className="font-bold text-white text-sm">Live Demo</h4>
                    </div>
                    <div className="flex-1 bg-black flex items-center justify-center p-4 relative">
                        <div className="relative rounded-[2rem] overflow-hidden border-4 border-slate-700 shadow-2xl max-w-[280px] w-full mx-auto aspect-[9/16]">
                            <video src={verticalVideoPath} className="w-full h-full object-cover" controls autoPlay loop muted playsInline />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ✅ 4. Key Technical Decisions (Detailed Version) */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <h2 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <Layers className="text-blue-600" size={32} /> 
            Key Technical Decisions
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Decision 1: Python Middleware */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-amber-100 text-amber-600 rounded-lg">
                            <Activity size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Python Gateway Middleware</h3>
                    </div>
                    
                    <div className="space-y-3">
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">The Challenge</span>
                            <p className="text-sm text-slate-600 mt-1">
                                ESP32 มี Memory จำกัด หากเชื่อมต่อกับ Web Browser โดยตรงหลายเครื่องพร้อมกัน อาจทำให้ระบบล่ม (Crash) หรือเกิด Latency สูงในการควบคุมหุ่นยนต์
                            </p>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Our Solution</span>
                            <p className="text-sm text-slate-600 mt-1">
                                ใช้ <strong>Python (FastAPI)</strong> เป็นคนกลาง (Middleware) รับข้อมูลจากหุ่นผ่าน UDP (เร็วที่สุด) แล้วกระจายต่อให้ Clients ผ่าน WebSocket
                            </p>
                        </div>
                        <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-green-600 text-sm font-semibold">
                            <ShieldCheck size={16} /> Stable Connection & Scalability
                        </div>
                    </div>
                </div>
            </div>

            {/* Decision 2: UDP Protocol */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-indigo-100 text-indigo-600 rounded-lg">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">UDP Stream for Telemetry</h3>
                    </div>
                    
                    <div className="space-y-3">
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">The Challenge</span>
                            <p className="text-sm text-slate-600 mt-1">
                                ข้อมูล LiDAR มีปริมาณมหาศาล (Point Cloud) การใช้ TCP ที่มีการเช็คความถูกต้อง (ACK) จะทำให้เกิด Overhead และ Delay สะสม
                            </p>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Our Solution</span>
                            <p className="text-sm text-slate-600 mt-1">
                                ใช้ <strong>UDP Protocol</strong> แบบ Fire-and-forget สำหรับข้อมูล Sensor ซึ่งยอมรับการสูญหายบาง Packet ได้ แลกกับความเร็วระดับ Real-time
                            </p>
                        </div>
                        <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-green-600 text-sm font-semibold">
                            <Zap size={16} /> Low Latency & High Throughput
                        </div>
                    </div>
                </div>
            </div>

            {/* Decision 3: Hybrid Rendering */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-pink-100 text-pink-600 rounded-lg">
                            <Monitor size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Hybrid Rendering Strategy</h3>
                    </div>
                    
                    <div className="space-y-3">
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">The Challenge</span>
                            <p className="text-sm text-slate-600 mt-1">
                                การวาดจุด LiDAR นับพันด้วย DOM ช้ามาก แต่การวาดหุ่นยนต์ด้วย Canvas ก็ทำให้ภาพแตกเวลาซูม (Pixelated)
                            </p>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Our Solution</span>
                            <p className="text-sm text-slate-600 mt-1">
                                ผสมผสานเทคโนโลยี: ใช้ <strong>Canvas API</strong> วาด Map/LiDAR (ประสิทธิภาพสูง) + ใช้ <strong>DOM Elements</strong> วาดตัวหุ่น (คมชัดทุกระยะซูม)
                            </p>
                        </div>
                        <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-green-600 text-sm font-semibold">
                            <Scale size={16} /> Balanced Performance & Visual Fidelity
                        </div>
                    </div>
                </div>
            </div>

            {/* Decision 4: Custom Hooks */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-cyan-100 text-cyan-600 rounded-lg">
                            <Code size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Modular State Management</h3>
                    </div>
                    
                    <div className="space-y-3">
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">The Challenge</span>
                            <p className="text-sm text-slate-600 mt-1">
                                Logic การคำนวณพิกัด (Transform) และการจัดการ WebSocket ซับซ้อนมาก หากรวมไว้ใน Component เดียวจะแก้ไขยาก
                            </p>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Our Solution</span>
                            <p className="text-sm text-slate-600 mt-1">
                                แยก Logic ออกเป็น <strong>Custom Hooks</strong> (`useRobot`, `useMapInteractive`) ทำให้ UI Code สะอาดและสามารถนำ Logic ไปใช้ซ้ำได้
                            </p>
                        </div>
                        <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-green-600 text-sm font-semibold">
                            <Database size={16} /> Clean Architecture & Reusability
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}