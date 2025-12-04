"use client";

import { useRef, createRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { keyframes } from "@emotion/react";
import { shadow } from "three/tsl";

// 1. CSS Keyframes สำหรับการขยาย/ย่อ (Pulsating Animation)
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

// 2. ข้อมูลสกิลและบับเบิลเปล่า
const skills = [

  {
    name: "MySkill",
    color: "#ffffff",
    shadow: "#ffffff",
    bg: "rgba(255, 255, 255, 0.2)",
    size: "100px",
    position: [0, 0, 2] // ตำแหน่งคงที่ (X, Y, Z)
  },
  {
    name: "Python",
    color: "#00f0ff", 
    shadow: "#00f0ff",
    bg: "rgba(0, 240, 255, 0.2)",
    size: "60px",
    position: [-2.5, 0.5, 0] // ตำแหน่งคงที่ (X, Y, Z)
  },
  {
    name: "Next.js",
    color: "#ff9900",
    shadow: "#ff9900",
    bg: "rgba(216, 221, 170, 0.2)",
    size: "50px",
    position: [1.5, -0.5, 0.5]
  },
  {
    name: "Jscript",
    color: "#ff00ff",
    shadow: "#ff00ff",
    bg: "rgba(255, 0, 255, 0.2)",
    size: "70px",
    position: [0.5, 1.5, -1]
  },
  {
    name: "PHP",
    color: "#38bdf8",
    shadow: "#38bdf8",
    bg: "rgba(56, 189, 248, 0.2)",
    size: "45px",
    position: [3, 0.5, 1]
  },
  {
    name: "SQL",
    color: "#b56dff",
    shadow: "#b56dff",
    bg: "rgba(181, 109, 255, 0.2)",
    size: "55px",
    position: [-1, -1.5, 0]
  }
];

// ข้อมูลสำหรับบับเบิลเปล่า
const emptyBubbles = [
    { size: "30px", color: "#00f0ff", shadow:"#00f0ff", position: [-4, 0.5, -1], delay: "1s" },
    { size: "40px", color: "#ffffff", shadow:"#ffffff", position: [2.5, 2.5, 1], delay: "2s" },
    { size: "25px", color: "#ff00ff", shadow:"#ff00ff", position: [-0.5, -3, 0.5], delay: "0.5s" },
    { size: "55px", color: "#38bdf8", shadow:"#38bdf8", position: [4, -1, -0.5], delay: "1.5s" },
];


// 3. คอมโพเนนต์สำหรับบับเบิลเปล่า (เพิ่มเข้ามาใหม่)
function EmptyBubbles() {
    return (
        <>
            {emptyBubbles.map((bubble, i) => (
                <Html key={`empty-${i}`} position={bubble.position as [number, number, number]} center>
                    <div style={{
                        width: bubble.size,
                        height: bubble.size,
                        borderRadius: "50%",
                        border: `2px solid ${bubble.color}50`, // ใช้ขอบ
                        boxShadow: `0 0 10px ${bubble.shadow}`,
                        // Animation Properties
                        animation: `${pulseAnimation} 4s infinite alternate`,
                        animationDelay: bubble.delay,
                        opacity: 0.8,
                    }} />
                </Html>
            ))}
        </>
    );
}

// 4. คอมโพเนนต์หลักสำหรับบับเบิลสกิล
function SkillBubbles() {
  // สร้าง Array ของ Ref สำหรับบับเบิลแต่ละก้อน
  const bubbleRefs = useRef<(THREE.Group | null)[]>([]);
  
  // ใช้ global clock ของ R3F
  const clock = useRef(new THREE.Clock());

  useFrame(() => {
    const elapsedTime = clock.current.getElapsedTime();

    bubbleRefs.current.forEach((ref, i) => {
      if (ref) {
        // สร้างการเคลื่อนที่ขึ้น/ลง (แกน Y) และเข้า/ออก (แกน Z) อย่างนุ่มนวล
        // โดยใช้ค่า i (index) เพื่อให้แต่ละบับเบิลเคลื่อนที่ไม่พร้อมกัน
        
        // การเคลื่อนที่ขึ้น/ลง (แกน Y)
        const floatY = Math.sin(elapsedTime * 0.5 + i) * 0.2; // 0.5 คือความเร็ว, 0.2 คือระยะการลอย
        
        // การเคลื่อนที่เข้า/ออก (แกน Z)
        const floatZ = Math.cos(elapsedTime * 0.3 + i * 2) * 0.3; // 0.3 คือความเร็ว, 0.3 คือระยะการลอย

        ref.position.y = skills[i].position[1] + floatY;
        ref.position.z = skills[i].position[2] + floatZ;
      }
    });
  });

  return (
    <group>
      {skills.map((skill, i) => (
        <group 
          key={i} 
          ref={el => (bubbleRefs.current[i] = el)}// ผูก Ref เข้ากับ group
          position={skill.position as [number, number, number]} // ใช้ตำแหน่งเริ่มต้นจาก data
        >
          <Html center>
            <div 
              className="skill-bubble"
              style={{
                // ... (Style CSS เดิมสำหรับ Pulsating) ...
                width: skill.size,
                height: skill.size,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: `${skill.name == "MySkill" ? "1.2rem" : "12px"}`,
                fontWeight: "bold",
                color: skill.color,
                backgroundColor: skill.bg,
                boxShadow: `0 0 15px 5px ${skill.shadow}, 0 0 30px 10px ${skill.shadow}50`,
                backdropFilter: "blur(2px)",
                animation: `${pulseAnimation} 3s infinite alternate`,
                animationDelay: `${i * 0.5}s`, 
              }}
            >
              {skill.name}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}


// 5. คอมโพเนนต์ MainGlowRing (นำมาจากคำตอบก่อนหน้า)
function MainGlowRing() {
    // ... (ใช้โค้ดเดิม) ...
    // เนื่องจากคุณต้องการหยุดการหมุนในส่วน Skills แต่ไม่พูดถึง MainGlowRing
    // ผมจะยังคงให้มันหมุนช้าๆ ต่อไปเพื่อความน่าสนใจ แต่สามารถลบ useFrame() ออกได้ถ้าไม่ต้องการ
    return null; // หรือใช้โค้ดเดิมที่คุณแก้แล้ว
}


export default function SkillOrbit() {
  return (
    <section className="h-[500px] flex flex-col items-center justify-start">


      <div className="w-[1000px] h-[600px] -mt-16">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          
          {/* MainGlowRing อาจถูกเอาออก หรือใช้แบบ 2D CSS แทน */}
          <MainGlowRing /> 
          
          {/* บับเบิลสกิลที่มี Pulsating Effect */}
          <SkillBubbles /> 
          
          {/* บับเบิลเปล่า */}
          <EmptyBubbles />
        </Canvas>
      </div>
    </section>
  );
}