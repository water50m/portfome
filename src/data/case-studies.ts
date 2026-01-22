// data/case-studies.ts

export const caseStudies = [
  {
    slug: "home-cloud-server",
    title: "From Legacy Laptop to Private Cloud",
    description: "Building a resilient photo backup server using Debian & Immich on constrained hardware.",
    techStack: ["Debian Linux", "Docker", "Immich", "Network Bridging", "MOSH"],
    
    content: {
      background: `**Project Origin:**\nโปรเจกต์นี้เริ่มต้นจากปัญหา "พื้นที่เก็บรูปเต็ม" ของคุณแม่ครับ... (เนื้อหาเดิม)`,
      
      // ปรับ challenges เป็นโครงสร้างใหม่ทั้งหมด
      challenges: [
        {
          title: "Phase 1: Hardware Resurrection",
          subProblems: [
            {
              title: "Physical Damage",
              description: "Notebook เก่าเก็บไว้นาน ปุ่มกดเสียหลายปุ่ม โดยเฉพาะปุ่ม **F2** ทำให้ไม่สามารถกดเข้า BIOS Setup ได้ตามปกติ",
               // ใส่ path รูปถ้ามี หรือ null
            },
            {
              title: "Boot Sequence Lock",
              description: "ไม่สามารถตั้งค่าให้ Boot จาก USB Drive ได้เพราะติดหน้า BIOS ทำให้ติดตั้ง OS ไม่ได้ในตอนแรก",
              image: null
            }
          ],
          solution: "แก้ปัญหาด้วยการต่อ **External Keyboard** และสุ่มกดปุ่ม Function Key อื่น (F12) จนเจอ Boot Menu ลัด ทำให้สามารถติดตั้ง Debian ได้สำเร็จ",
          learnings: ["การแก้ปัญหา Hardware เฉพาะหน้า", "ความสำคัญของ Boot Menu Key ใน Laptop รุ่นเก่า"]
        },
        {
          title: "Phase 2: The 10kb/s Bottleneck",
          subProblems: [
            {
              title: "Unusable Speed",
              description: "ความเร็ว Download package อยู่ที่ **9-15 kb/s** เท่านั้น (ช้ากว่าที่ควรจะเป็นอย่างมาก) ทำให้ติดตั้ง Package ไม่ได้",
            },
            {
              title: "Driver Confusion",
              description: "ตรวจสอบด้วย `lspci` พบว่า Driver ทำงานปกติ ไม่ใช่ปัญหา Hardware เสีย แต่เกิดจากความไม่เข้ากันของ ISP Network กับ WiFi Card รุ่นเก่า",
              image: "/images/lspci-check.png" // [รูปภาพที่ 4]
            }
          ],
          solution: "ทำ **Network Bridging** โดยใช้ Laptop Windows รับสัญญาณเน็ตแล้วแชร์ผ่านสาย LAN/WiFi ให้เครื่อง Linux แทน (Speed เพิ่มเป็น 150kb/s)",
          learnings: ["การใช้เครื่องมือ Network Diagnosis (lspci, ping)", "เทคนิค Network Bridging แก้ปัญหา Driver/ISP Compatibility"]
        },
        {
          title: "Phase 3: The SSH Deadlock",
          subProblems: [
             {
              title: "Input Lag (Latency)",
              description: "เมื่อ SSH ผ่าน Mobile Network พบ Delay การพิมพ์สูงมาก (>10 วินาที) และ WiFi เข้าโหมด Sleep เมื่อหยุดพิมพ์",
              
            },
            {
              title: "CPU Spike Disconnects",
              description: "เมื่อ Immich รัน AI Indexing CPU พุ่ง 100% ทำให้ SSH Session หลุดทันที และการ Upload รูปภาพหยุดชะงัก",
              
            }
          ],
          solution: "พยายามแก้ด้วยการใช้ **MOSH (Mobile Shell)** เพื่อลด Latency (UDP) แต่สุดท้ายพบว่าเป็นข้อจำกัดของ Hardware WiFi 2.4GHz ที่ไม่รองรับ Workload ระดับนี้",
          learnings: ["ข้อจำกัดของ Real-world Hardware", "รู้จัก MOSH Protocol", "การจัดการ Linux Process Priority"]
        },
        {
          title: "Phase 4: The Verification (Router Testing)",
          subProblems: [
            {
              title: "Root Cause Ambiguity",
              description: "ความไม่แน่ใจว่าปัญหาความช้าเกิดจาก Server Config, Hardware Limit หรือ Network กันแน่ จำเป็นต้องพิสูจน์เพื่อตัดข้อสงสัย",
              image: "/images/phase4-doubt.jpg"
            }
          ],
          solution: "ทำการทดสอบแบบ Isolation โดยย้ายกลับมาใช้ Network ของมหาวิทยาลัย (Router) เพื่อเชื่อมต่อ Server และมือถือผ่านวง LAN/WiFi ที่เสถียร แทนการใช้ Mobile Hotspot",
          outcome: "Confirmed. อาการหน่วง (Latency) และปัญหา Upload ช้าหายไปทันที ทุกอย่างทำงานได้ลื่นไหล ยืนยันได้ว่าปัญหาทั้งหมดเกิดจากข้อจำกัดของ Mobile Network",
          learning: "ยืนยันสมมติฐานเรื่อง Network Bottleneck และเข้าใจความสำคัญของ Bandwidth/Stability ในระบบ Self-Hosting",
          image: "/images/phase4-success.jpg"
        },
        {
          title: "Phase 5: The Relapse (Dorm WiFi)",
          subProblems: [
            {
              title: "Recurring Latency & Upload Failures",
              description: "เมื่อนำกลับมาทดสอบที่ห้องพักโดยใช้ WiFi หอพัก (ไม่สามารถต่อ LAN ได้) อาการหน่วงและอัปโหลดไม่ได้กลับมาทันทีเหมือนตอนใช้ Mobile Net",
              image: "/images/dorm-wifi-fail.jpg"
            },
            {
              title: "Hardware vs Network Ambiguity",
              description: "เกิดข้อสมมติฐานใหม่: ปัญหาอาจเกิดจาก WiFi Card ของ Server รับสัญญาณไม่ดี หรือ Internet หอพักช้าเกินไป (ตัดประเด็นเรื่องมือถือออกไปได้แล้ว)",
              image: "/images/wifi-card-suspect.jpg"
            }
          ],
          solution: "ยอมรับข้อจำกัด ณ ปัจจุบัน (ไม่สามารถเปลี่ยน WiFi Card หรือเน็ตหอได้ทันที) และโฟกัสที่เป้าหมายหลักคือ 'ทำให้ระบบอัปโหลดทำงานได้' จึงตัดสินใจย้ายสถานที่อีกครั้ง",
          outcome: "Failed. สภาพแวดล้อมที่หอพักไม่เอื้ออำนวย แต่ได้ข้อสรุปที่แคบลงว่าปัญหาอยู่ที่การเชื่อมต่อไร้สาย (WiFi/Mobile) หรือความเร็วเน็ต",
          learning: "บางครั้งการแก้ปัญหา Root Cause (เช่น เปลี่ยน WiFi Card) อาจทำไม่ได้ทันที ต้องเลือกวิธี Workaround (ย้ายสถานที่) เพื่อให้งานเดินหน้าต่อได้",
          image: "/images/dorm-setup.jpg"
        },
        {
          title: "Phase 6: The Project Room Migration",
          subProblems: [
            {
              title: "Need for Stability",
              description: "ต้องการ Environment ที่เสถียรที่สุดเพื่อยืนยันว่า Server ทำงานได้จริง และเพื่อให้การอัปโหลดข้อมูลจำนวนมากเสร็จสมบูรณ์",
              image: "/images/project-room.jpg"
            }
          ],
          solution: "ย้าย Server ไปติดตั้งที่ห้องโปรเจคของคณะ (สำหรับนิสิตปี 4) และเชื่อมต่อผ่านสาย LAN โดยตรงกับ Router ของคณะ",
          outcome: "In Progress... (รอผลการทดสอบจากการต่อ LAN ที่ห้องโปรเจค)",
          learning: "การมี Dedicated Environment หรือห้องทำงานที่เหมาะสม ช่วยลดตัวแปรที่ไม่จำเป็นในการทำระบบ",
          image: "/images/lan-connection.jpg"
        },
        {
          title: "Phase 7: The Captive Portal Trap",
          subProblems: [
            {
              title: "The Connectivity Illusion",
              description: "Ping 8.8.8.8 ผ่าน (ICMP Layer 3) แต่ไม่สามารถ install package หรือเชื่อมต่อ Tailscale ได้ (TCP Layer 4 Fail)",
              image: "/images/ping-ok-tcp-fail.jpg"
            },
            {
              title: "Connection Reset Error",
              description: "เมื่อตรวจสอบลึกด้วยคำสั่ง `curl -I http://www.google.com` ได้รับ error `Connection reset by peer` บ่งบอกว่าการเชื่อมต่อถูกตัดหรือแทรกแซง",
              image: "/images/curl-error.jpg"
            }
          ],
          solution: "ใช้ Web Browser บนเครื่อง (หรืออุปกรณ์อื่นในวงเดียวกัน) เปิดหน้าเว็บเพื่อตรวจสอบ จนพบหน้า Login ของมหาวิทยาลัย (Captive Portal)",
          outcome: "Root Cause Identified. พบว่า Server ติดหน้า Authentication ของมหาวิทยาลัย ทำให้ Traffic ปกติ (TCP) ถูก Redirect หรือ Block จนกว่าจะมีการ Login",
          learning: "เรียนรู้ความแตกต่างระหว่าง ICMP (Ping) และ TCP (Web/App) และเข้าใจว่าใน Managed Network การ Ping ได้ ไม่ได้การันตีว่าเราเข้าถึง Internet ได้จริงหากติด Authentication Gateway",
          image: "/images/captive-portal-login.jpg"
        },
        {
          title: "Phase 8: The Captive Portal Trap",
          subProblems: [
            {
              title: "The Connectivity Illusion",
              description: "Ping 8.8.8.8 ผ่าน (ICMP Layer 3) แต่ไม่สามารถ install package หรือเชื่อมต่อ Tailscale ได้ (TCP Layer 4 Fail)",
              image: "/images/ping-ok-tcp-fail.jpg"
            },
            {
              title: "Connection Reset Error",
              description: "เมื่อตรวจสอบลึกด้วยคำสั่ง `curl -I http://www.google.com` ได้รับ error `Connection reset by peer` บ่งบอกว่าการเชื่อมต่อถูกตัดหรือแทรกแซง",
              image: "/images/curl-error.jpg"
            }
          ],
          solution: "ใช้ Web Browser บนเครื่อง (หรืออุปกรณ์อื่นในวงเดียวกัน) เปิดหน้าเว็บเพื่อตรวจสอบ จนพบหน้า Login ของมหาวิทยาลัย (Captive Portal)",
          outcome: "Root Cause Identified. พบว่า Server ติดหน้า Authentication ของมหาวิทยาลัย ทำให้ Traffic ปกติ (TCP) ถูก Redirect หรือ Block จนกว่าจะมีการ Login",
          learning: "เรียนรู้ความแตกต่างระหว่าง ICMP (Ping) และ TCP (Web/App) และเข้าใจว่าใน Managed Network การ Ping ได้ ไม่ได้การันตีว่าเราเข้าถึง Internet ได้จริงหากติด Authentication Gateway",
          image: "/images/captive-portal-login.jpg"
        },
        {
          title: "Phase 8: The Gateway to the World (Cloudflare & Domain)",
          subProblems: [
            {
              title: "Temporary Access Limitation",
              description: "การใช้ `cloudflared tunnel --url` สร้าง Random URL ใช้งานได้จริง แต่ไม่ถาวร ต้องเปิด Terminal ค้างไว้ และ URL เปลี่ยนทุกครั้งที่รันใหม่ ไม่เหมาะกับการใช้งานระยะยาว",
              image: "/images/terminal-random-url.jpg"
            },
            {
              title: "The Identity Crisis",
              description: "ไม่มี Domain Name ของตัวเอง ทำให้ระบบดูไม่น่าเชื่อถือและจำยาก เปรียบเสมือนมีบ้านแต่ไม่มีเลขที่บ้านถาวร",
              image: "/images/domain-search.jpg"
            }
          ],
          solution: "ตัดสินใจซื้อ Domain Name ราคาประหยัด และเชื่อมต่อกับ Cloudflare Tunnel เพื่อระบุที่อยู่ถาวรให้กับ Server",
          outcome: "Success. Server มีชื่อเรียกที่แน่นอน (Domain Name) สามารถเข้าถึงจากที่ไหนก็ได้ในโลก และมีความปลอดภัยสูงเพราะผ่าน Cloudflare Proxy",
          learning: "เข้าใจโครงสร้าง Internet Governance (ICANN, TLDs, Registrars) และเข้าใจหน้าที่ของ Nameservers (กุญแจ 2 ดอก) ที่ทำหน้าที่บอกว่าใครเป็นคนจัดการ Traffic ของโดเมนนี้",
          image: "/images/cloudflare-tunnel-diagram.jpg"
        },
        {
          title: "Phase 9: The Permanent Link (Production Setup)",
          subProblems: [
            {
              title: "Dependency on Active Session",
              description: "วิธีการเดิมต้องเปิด Terminal ค้างไว้ หากไฟดับหรือเผลอปิดหน้าต่าง Connection จะหลุดทันที ไม่สามารถใช้งานจริงในระยะยาวได้",
              image: "/images/terminal-session.jpg"
            }
          ],
          solution: "Config Cloudflare Tunnel ให้ผูกกับ Domain Name ถาวร และตั้งค่า Routing ภายใน (Ingress Rules) ให้ชี้ไปยัง Docker Container ของ Web Application โดยตรง",
          outcome: "Stable Service. ระบบทำงานได้ตลอดเวลา (24/7) โดยไม่ต้อง Login เข้าไปสั่งการ URL เป็นชื่อ Domain ที่จำง่าย และมีความปลอดภัย",
          learning: "เข้าใจหลักการของ Reverse Proxy / Tunneling ในระดับ Production ที่สามารถ Map Public Domain เข้ากับ Internal Docker Service ได้อย่างสมบูรณ์",
          image: "/images/cloudflare-dashboard-config.jpg"
        }
              ],
      
      conclusion: "แม้โปรเจกต์จะยังไม่สมบูรณ์ 100% ในสภาพแวดล้อม Mobile Network แต่ระบบสามารถทำงานได้ดีเยี่ยมเมื่อกลับมาใช้ Network ที่เสถียร (Dorm WiFi) ถือว่าบรรลุเป้าหมายการเรียนรู้ Server Administration ครับ",
      
      learnings: [
        "**Technical Resilience:** เรียนรู้การ Debug ตั้งแต่ Layer 1 (Hardware) จนถึง Layer 7 (Application)",
        "**Networking:** เข้าใจเรื่อง Bridging, SSH Tunneling และข้อจำกัดของ Wireless Network",
        "**Resource Management:** การรัน Modern App (Immich) บน Legacy Hardware ต้องแลกมาด้วยการจูน Performance อย่างละเอียด"
      ]
    }
  }
];