// data/resume-data.ts

export const resumeData = {
  personalInfo: {
    name: "PARINYA MACHAOPA",
    title: "AI Engineer & Full Stack Developer",
    email: "pmachaopa1@gmail.com",
    phone: "+668151150",
    location: "phitsanulok, Thailand", // หรือจังหวัดของคุณ
    linkedin: "🔴 [linkedin.com/in/yourprofile]",
    github: "github.com/water50m",
    portfolio: "🔴 [your-portfolio-url.com]",
  },
  summary:
    "Full-Stack AI Engineer & Infrastructure Specialist Innovative Developer with expertise in AI Solutions (Computer Vision & LLMs) and Real-time Data Visualization. Experienced in engineering high-performance web systems, from rendering complex LiDAR/AMR dashboards to orchestrating automated trading workflows using Multi-Provider LLMs. Deeply skilled in deploying secure, enterprise-grade infrastructure on Linux environments, optimizing server performance, and solving complex network challenges.",
  
  skills: [
    
    {
      category: "Infrastructure & DevOps",
      items: ["Docker", "Docker Compose", "Linux (Debian)", "GitHub"],
    },
    {
      category: "Web Development",
      items: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    },
    {
      category: "Networking & Security",
      items: ["Cloudflare DNS", "Tailscale (VPN)", "UFW Firewall", "SSH"],
    },
    {
      category: "AI & Computer Vision",
      items: ["Python", "OpenCV", "YOLO", "Image Processing"],
    },
  ],

  experience: [
    {
      company: "🔴 [Current Company / Freelance]",
      role: "🔴 [Your Job Title]",
      period: "2023 - Present",
      description: [
        "Developed and maintained web applications using **Next.js** and **TypeScript**.",
        "Implemented AI features for [Describe Feature] resulting in [Benefit].",
        "Managed cloud server configurations and deployment pipelines.",
      ],
    },
    // เพิ่มประสบการณ์งานเก่าที่นี่
  ],

  projects: [
    {
      title: "Enterprise-Grade Home Lab Infrastructure",
      link:"/project/home-cloud-server",
      github:"",
      tech: ["Docker", "Tailscale", "Cloudflare", "Next.js", "Linux"],
      highlight: true, // ตัวนี้จะเด่นเป็นพิเศษ
      description: [
        "Designed a private cloud system to host microservices like **Immich** and **Web Dashboards**.",
        "Secured remote access using **Tailscale Mesh VPN** avoiding public port exposure.",
        "Solved complex **Host Validation** and **DNS Rebinding** issues in Next.js environments.",
        "Configured **UFW Firewall** and **Cloudflare** for robust security.",
      ],
    },
    {
        title: "Epic Card Battle RPG",
        link:"",
        github:"https://github.com/water50m/Thunder-project",
        tech: ["TNext.js 14 (App Router)", "TypeScript", "Tailwind CSS"],
        highlight: false,
        description: [
            "Developed a scalable Turn-based Strategy game using **Next.js 14** and **TypeScript**, ensuring strict type safety and code maintainability.",
            "Architected a modular codebase by decoupling complex game logic (Battle System, Enemy AI) from UI components using Custom React Hooks.",
            "Designed a centralized static data layer (/data/db) for game balance management and utilized API Routes for data persistence.",
            "Implemented complex state management for character customization, equipment loadouts, and card deck building without external game engines."
        ],
        img: "images/thunder_project.png"
    },
    {
        title: "Medical Science Internship Mapping System",
        link:"",
        github:"https://github.com/water50m/database_mesci",
        tech: ["PHP", "MySQL", "JavaScript", "Leaflet.js", "HTML5/CSS3", "Apache Web Server"],
        highlight: false,
        description: [
            "Developed a full-stack CRUD application using **PHP** and **MySQL** to manage internship records.",
            "Integrated **Leaflet.js** to visualize internship locations on an interactive map for strategic planning.",
            "Implemented search and filtering tools to query data by location, major, and academic year.",
        ],
        img: "images/medsciWeb.png"
    },
    {
      title: "AI-Powered Stock Sentiment & Prediction Bot",
      link: "/project/Analysis-news", 
      github: "https://github.com/water50m/Analysis-News",
      tech: ["Python", "GitHub Actions", "Gemini / OpenAI", "Supabase", "Line API"],
      highlight: true,
      developmentStatus: "🚧 Under Development: กำลังพัฒนาระบบตรวจสอบความแม่นยำ (Verify Bot) และเชื่อมต่อ Database เพื่อทำ Feedback Loop",
      description: [
        "Developed an automated trading assistant that analyzes market news using **Multi-Provider LLMs** (Gemini, GPT-4, Claude) to predict price trends.",
        "Engineered a **Smart Relevance Filter** to process high-volume news batches, prioritizing high-impact events and reducing AI token costs.",
        "Implemented a **Feedback Loop System** on **Supabase** to track prediction accuracy and automatically feed past mistakes back into the context window.",
        "Orchestrated fully automated workflows via **GitHub Actions (Cron)** for pre-market analysis and post-market verification.",
      ],
      // 👇 เพิ่มส่วนนี้เข้าไปครับ (ใช้ Backticks ` `)
      mermaidCode: `
        graph TD
        subgraph Scheduler [🕒 GitHub Actions]
            NewsBot[News Bot\n21:00]
            VerifyBot[Verify Bot\n06:00]
        end

        subgraph Core [🧠 Core Logic]
            Filter[Smart Relevance Filter]
            Analysis[AI Engine]
        end

        subgraph Services
            Alpha[Alpha Vantage]
            Gemini[Google Gemini]
            Line[LINE Notify]
        end

        subgraph DB [💾 Storage]
            Supabase[(Supabase DB)]
        end

        NewsBot --> Alpha
        Alpha --> Filter
        Filter --> Analysis
        Analysis <-->|Feedback Loop| Supabase
        Analysis <-->|Reasoning| Gemini
        Analysis -->|Alert| Line
        VerifyBot -->|Check Result| Supabase
      `,
    },
    {
      title: "Real-time AMR Dashboard & LiDAR Visualizer",
      link: "/project/Robot-visualizer",
      github: "https://github.com/water50m/UI-robot-control", 
      tech: ["React", "TypeScript", "HTML5 Canvas", "Tailwind CSS", "WebSocket"],
      highlight: true,
      developmentStatus: "🚀 Active: ปรับปรุงระบบ Render Performance และเพิ่มฟีเจอร์ Path Tracking",
      description: [
        "Engineered a high-performance **Real-time Map Visualizer** for Autonomous Mobile Robots (AMR) using **React** and **HTML5 Canvas**.",
        "Implemented complex **Coordinate System Transformations** (World-to-Screen) to handle zooming, panning, and rotation with pixel-perfect accuracy.",
        "Optimized rendering performance by decoupling **Logic Layers** (Hooks) from **Presentation Layers** (Canvas/DOM), ensuring smooth 60fps animations.",
        "Developed a **Custom Event Bus** system to manage global state actions like map clearing and resetting without prop-drilling complexity.",
      ],
      img:"images/ui-robot.png",
    },
    {
      title: "AI Computer Vision System",
      github:"",
      tech: ["Python", "OpenCV", "PyTorch"],
      highlight: false,
      description: [
        "Developed a cloth detection model using synthetic data generation.",
        "Integrated AI inference with a real-time web interface.",
      ],
    }
  ],
  
  education: {
    degree: "Bachelor of Engineering in Computer Engineering",
    university: "Naresuan university",
    // year: "🔴 [Year]",
  }
};