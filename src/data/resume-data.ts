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
    "Innovative Developer specializing in **AI Computer Vision** and **System Infrastructure**. Experienced in building end-to-end solutions, from training AI models to deploying scalable web applications on **Linux-based Home Labs**. Passionate about self-hosting, optimizing server performance, and solving complex network challenges.",
  
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
      link:"",
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
        github:"",
        tech: ["TNext.js 14 (App Router)", "TypeScript", "Tailwind CSS"],
        highlight: false,
        description: [
            "Developed a scalable Turn-based Strategy game using Next.js 14 and TypeScript, ensuring strict type safety and code maintainability.",
            "Architected a modular codebase by decoupling complex game logic (Battle System, Enemy AI) from UI components using Custom React Hooks.",
            "Designed a centralized static data layer (/data/db) for game balance management and utilized API Routes for data persistence.",
            "Implemented complex state management for character customization, equipment loadouts, and card deck building without external game engines."
        ]
    },
    {
        title: "Medical Science Internship Mapping System",
        link:"",
        github:"",
        tech: ["PHP", "MySQL", "JavaScript", "Leaflet.js", "HTML5/CSS3", "Apache Web Server"],
        highlight: false,
        description: [
            "Developed a Full-stack web application to manage internship data using PHP and MySQL for robust backend CRUD operations.",
            "Implemented an interactive mapping system using Leaflet.js to visualize internship locations, facilitating better strategic planning for student placement.",
            "Designed filtering and search functionality allowing users to query data by location, major, and academic year.",
        ]
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