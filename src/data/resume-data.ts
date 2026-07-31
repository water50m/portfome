// data/resume-data.ts

export const resumeData = {
  personalInfo: {
    name: "PARINYA MACHAOPA",
    title: "Web Developer | SEO & Marketing Analytics",
    email: "pmachaopa1@gmail.com",
    phone: "+668151150",
    location: "phitsanulok, Thailand", // หรือจังหวัดของคุณ
    linkedin: "🔴 [linkedin.com/in/yourprofile]",
    github: "github.com/water50m",
    portfolio: "🔴 [your-portfolio-url.com]",
  },
  summary: "Full-Stack Web Developer and Computer Engineering student interested in building business-focused websites and landing pages that are clear, responsive, and measurable. Experienced with Next.js, TypeScript, UX/UI implementation, technical SEO, event tracking, and consent-aware GA4, Facebook Pixel, and TikTok Pixel integrations. Interested in developing further in Ads Optimize and Web Designer roles by connecting web experiences with data and conversion insights.",

  skills: [

    {
      category: "Infrastructure & DevOps",
      items: ["Docker", "Docker Compose", "Linux (Debian)", "GitHub"],
    },
    {
      category: "Web Development",
      items: ["Next.js", "React", "TypeScript", "HTML/CSS", "Node.js", "Tailwind CSS"],
    },
    {
      category: "SEO & Marketing Analytics",
      items: ["Technical SEO", "JSON-LD", "GA4", "Facebook Pixel", "TikTok Pixel", "Event Tracking", "PDPA Consent"],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MySQL", "SQL Server", "Supabase"],
    },
    {
      category: "Networking & Security",
      items: ["Cloudflare DNS", "Tailscale (VPN)", "UFW Firewall", "SSH"],
    },
    // {
    //   category: "AI & Computer Vision",
    //   items: ["Python", "OpenCV", "YOLO", "Image Processing"],
    // },
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
      title: "BUZZ iPhone E-commerce & Marketing Analytics Platform",
      link: "",
      github: "",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "SEO", "GA4", "Facebook Pixel", "TikTok Pixel"],
      highlight: true,
      description: [
        "Built a business-focused e-commerce storefront and admin dashboard with product catalog, promotions, cart, order flow, and content management features.",
        "Implemented technical and local SEO foundations including SSR, dynamic metadata, sitemap/robots, and JSON-LD for Product, Offer, LocalBusiness, and BreadcrumbList.",
        "Integrated consent-aware **GA4, Facebook Pixel, and TikTok Pixel** tracking for ViewContent, AddToCart, InitiateCheckout, and Lead events to support future ad optimization.",
        "Designed first-party funnel analytics for visitor/session attribution, product impressions, CTR, and gallery engagement while respecting PDPA consent requirements."
      ],
    },
    {
      title: "Medical Science Internship Mapping System",
      link: "",
      github: "",
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
      title: "Faculty Personnel & Budget Management System (FPA)",
      link: "",
      github: "",
      tech: ["PHP", "MySQL", "LDAP", "UI/UX Design"],
      highlight: true,
      description: [
        "Architected and developed a comprehensive Budget Management and Personnel Information System from scratch for the university faculty.",
        "Designed the full relational database schema using **MySQL** and implemented the core business logic and backend with **PHP**.",
        "Integrated secure university-level authentication by implementing **LDAP login flows** for faculty staff members.",
        "Designed the user interface and user experience, including the implementation of **PDPA-compliant UI modals** to ensure data privacy."
      ],
      img: "images/FPAsys_img.jpg"
    },
    {
      title: "Enterprise-Grade Home Lab Infrastructure",
      link: "/project/home-cloud-server",
      github: "",
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
      title: "English Vocabulary Card Game Platform",
      link: "",
      github: "",
      tech: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Chart.js", "JWT", "Docker"],
      highlight: true,
      description: [
        "Developed a full-stack vocabulary learning platform using **Next.js App Router**, **TypeScript**, and **PostgreSQL**.",
        "Implemented multiple quiz modes including multiple choice, typing, timed quiz, and think-and-reveal to support different learning styles.",
        "Built a progress tracking system with XP, streaks, mastery status, dashboard statistics, and spaced repetition logic.",
        "Created admin tools for managing vocabulary, users, story cards, and CSV-based word imports with real-time progress feedback.",
        "Designed a responsive themed UI with **Tailwind CSS**, CSS variables, and **Framer Motion** animations."
      ],
      img: "images/ecg_total.jpg"
    },
    {
      title: "Personal Task and Daily Checklist Management Platform",
      link: "",
      github: "",
      tech: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Tailwind CSS 4", "Docker"],
      highlight: false,
      description: [
        "Developed a full-stack productivity web app using **Next.js 16**, **TypeScript**, and **PostgreSQL** to manage tasks, daily checklists, appointments, and calendar events.",
        "Implemented **PIN-based authentication**, recurring checklist rules, categories, tags, subtasks, appointment scheduling, and dashboard analytics.",
        "Designed a responsive Thai-language interface with progress charts, filters, modals, calendar views, and Docker-ready production deployment.",
      ],
      img: "images/tdl_total.jpg"
    },
    {
      title: "Epic Card Battle RPG",
      link: "",
      github: "https://github.com/water50m/Thunder-project",
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
      img: "images/ui-robot.png",
    },
    {
      title: "AI Computer Vision System",
      github: "",
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
