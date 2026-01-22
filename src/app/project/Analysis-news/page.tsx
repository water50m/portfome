import MermaidChart from "@/components/MermaidChart";
import { Server, Workflow, Lightbulb, GitBranch, Database, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link"

export default function ArchitecturePage() {
  
  // --- 1. System Architecture Diagram ---
  const systemArchCode = `
    graph TD
    subgraph Scheduler [🕒 GitHub Actions]
        NewsBot["News Bot\n21:00 BKK"]
        VerifyBot["Verify Bot\n06:00 BKK"]
    end

    subgraph Core [🧠 Core Logic]
        Filter[Smart Relevance Filter]
        Analysis[AI Analysis Engine]
    end

    subgraph Services [☁️ External APIs]
        Alpha[Alpha Vantage]
        Twitter["Twitter/X API"]
        LLM["Multi-Provider LLM\n(Gemini/GPT-4)"]
        Line[LINE Notify]
    end

    subgraph DB [💾 Persistence]
        Supabase[(Supabase DB)]
    end

    NewsBot --> Alpha
    NewsBot --> Twitter
    Alpha & Twitter --> Filter
    Filter -->|Top 10 Context| Analysis
    Analysis <-->|Feedback Loop| Supabase
    Analysis <-->|Reasoning| LLM
    Analysis -->|Alert| Line
    VerifyBot -->|Check Price| Alpha
    VerifyBot -->|Update Accuracy| Supabase
  `;

  // --- 2. Process Flowchart ---
  const processFlowCode = `
    flowchart TD
    
    %% Nodes
    Start((Start 21:00)) --> Fetch[Fetch 50 News Items]
    Fetch --> PythonFilter{Relevance Score > 0.6?}
    
    PythonFilter -- No --> Discard[🗑️ Discard]
    PythonFilter -- Yes --> Ranking[📊 Rank by Score]
    
    Ranking --> Select[Select Top 10 Items]
    Select --> Batch[📦 Batch Context Pack]

    %% 👇 ส่วนที่เพิ่มมา: Feedback Loop 👇
    History[(📚 Past Mistakes\nfrom Supabase)] -.->|Inject into Context| Batch
    %% 👆 --------------------------- 👆
    
    Batch --> AI_Analyze["🤖 AI Analysis\n(Predict Direction & Impact)"]
    
    AI_Analyze --> Decision{Impact Score > 5?}
    
    Decision -- No --> Log[Log: Low Impact]
    Decision -- Yes --> SaveDB[(💾 Save Prediction)]
    
    SaveDB --> Notify[📲 Send LINE Alert]
    
    Notify --> End((End))
    Log --> End

    %% Styling (Optional: ทำให้ DB ดูเด่นขึ้น)
    style History fill:#fff,stroke:#f59e0b,stroke-width:2px,stroke-dasharray: 5 5
    style SaveDB fill:#fff,stroke:#f59e0b,stroke-width:2px
  `;

  // --- 3. Key Technical Decisions (Data) ---
  const technicalDecisions = [
    {
      title: "Multi-Provider LLM Abstraction",
      icon: <GitBranch className="w-5 h-5 text-purple-600" />,
      problem: "Vendor lock-in and API cost fluctuations.",
      solution: "Implemented a generic 'AI Service' interface that allows hot-swapping between Gemini (Free), GPT-4 (Smart), and Claude via .env config.",
      impact: "Zero downtime during API outages and optimized costs for dev vs. prod environments."
    },
    {
      title: "Serverless via GitHub Actions",
      icon: <Server className="w-5 h-5 text-blue-600" />,
      problem: "High cost of renting a 24/7 VPS for a bot that runs only twice a day.",
      solution: "Utilized GitHub Actions Cron Jobs ('on: schedule') to spin up ephemeral runners.",
      impact: "Hosting cost reduced to $0 while maintaining 100% reliability."
    },
    {
      title: "Smart Relevance Filtering",
      icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
      problem: "Sending raw news feeds to LLMs consumes massive tokens and dilutes context.",
      solution: "Engineered a Python-based pre-filter using Alpha Vantage's 'relevance_score' to discard noise before AI processing.",
      impact: "Reduced Token usage by 80% and increased prediction accuracy by focusing only on high-impact news."
    },
    {
      title: "Feedback Loop Database",
      icon: <Database className="w-5 h-5 text-amber-600" />,
      problem: "AI models hallucinate or repeat past mistakes without memory.",
      solution: "Integrated Supabase (PostgreSQL) to store every prediction and verify it 24h later. Past errors are injected into the next prompt.",
      impact: "Created a self-improving system where the bot learns from its own historical accuracy."
    }
  ];

    return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* ปรับเป็น max-w-7xl เพื่อให้กว้างพอสำหรับวาง 2 กราฟคู่กัน */}
        <div className="max-w-7xl mx-auto space-y-12">

        {/* ---------------- Header & Back Button ---------------- */}
        <div className="border-b border-slate-200 pb-8 space-y-6">
        
            {/* 1. ปุ่ม Back ไว้บนสุด แยกออกมาให้ชัดเจน */}
            <div>
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors group"
                >
                    <div className="p-2 bg-white rounded-full border border-slate-200 shadow-sm group-hover:border-blue-200 group-hover:shadow-md transition-all">
                    <ArrowLeft size={16} />
                    </div>
                    Back to Portfolio
                </Link>
            </div>

            {/* 2. หัวข้อและคำอธิบาย "กองรวมกัน" ชิดซ้าย (อ่านง่ายกว่ามาก) */}
            <div className="max-w-3xl"> {/* จำกัดความกว้างไม่ให้ตัวหนังสือยาวเกินไป */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                    System Architecture
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Technical deep dive into the <strong>AI Stock Analyst</strong> features, orchestration, logic flows, and key architectural decisions behind the system.
                </p>
            </div>

        </div>

        {/* ---------------- DIAGRAMS GRID (แสดงคู่กัน) ---------------- */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">

            {/* Section 1: Process Flowchart */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
            <div className="p-5 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
                <div className="p-2 bg-emerald-100 rounded-lg shrink-0">
                <Workflow className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                <h2 className="text-lg font-bold text-slate-800">1. Intelligence Logic Flow</h2>
                <p className="text-xs text-slate-500">Decision Making Process</p>
                </div>
            </div>
            <div className="p-4 overflow-hidden flex-grow">
                <MermaidChart code={processFlowCode} />
            </div>
            </section>

            
            {/* Section 2: System Architecture */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
            <div className="p-5 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
                <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                <Server className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                <h2 className="text-lg font-bold text-slate-800">2. High-Level Architecture</h2>
                <p className="text-xs text-slate-500">Infrastructure & Data Flow</p>
                </div>
            </div>
            <div className="p-4 overflow-hidden flex-grow">
                {/* ใส่ class ให้กราฟแสดงผลเต็มพื้นที่ */}
                <MermaidChart code={systemArchCode} />
            </div>
            </section>

            

        </div>

        {/* ---------------- Section 3: Key Technical Decisions ---------------- */}
        <section>
            <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-amber-100 rounded-lg"><Lightbulb className="w-6 h-6 text-amber-600" /></div>
            <div>
                <h2 className="text-2xl font-bold text-slate-800">3. Key Technical Decisions</h2>
                <p className="text-sm text-slate-600">Architectural trade-offs & solutions.</p>
            </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
            {technicalDecisions.map((decision, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    {decision.icon}
                    </div>
                    <h3 className="font-bold text-slate-900">{decision.title}</h3>
                </div>
                
                <div className="space-y-3">
                    <div>
                    <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wide">The Challenge</span>
                    <p className="text-sm text-slate-600 mt-1">{decision.problem}</p>
                    </div>
                    <div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">Our Solution</span>
                    <p className="text-sm text-slate-800 mt-1 font-medium">{decision.solution}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 mt-3">
                    <p className="text-xs text-slate-400 italic">Impact: {decision.impact}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </section>

        </div>
    </div>
    );
}