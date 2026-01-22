"use client"; // สำคัญมากสำหรับ Next.js App Router

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidChartProps {
  code: string;
}

const MermaidChart: React.FC<MermaidChartProps> = ({ code }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  // 1. รอให้ Component Mount ก่อน (แก้ปัญหา Hydration Error)
  useEffect(() => {
    setHasMounted(true);
    mermaid.initialize({
      startOnLoad: false,
      theme: "default", // หรือ 'dark', 'forest', 'neutral'
      securityLevel: "loose",
    });
  }, []);

  // 2. Render กราฟเมื่อ code เปลี่ยน
  useEffect(() => {
    if (hasMounted && ref.current) {
      const renderChart = async () => {
        try {
          // สร้าง ID แบบสุ่มเพื่อให้ render หลายกราฟในหน้าเดียวได้
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          
          // สั่ง Mermaid ให้วาด SVG
          const { svg } = await mermaid.render(id, code);
          
          // นำ SVG ไปแปะใน div
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        } catch (error) {
          console.error("Mermaid Render Error:", error);
          if (ref.current) {
            ref.current.innerHTML = "<p style='color:red'>Invalid Syntax</p>";
          }
        }
      };

      renderChart();
    }
  }, [code, hasMounted]);

  if (!hasMounted) return <div className="animate-pulse bg-gray-200 h-40 w-full rounded">Loading Diagram...</div>;

  return (
    <div 
      ref={ref} 
      className="w-full flex justify-center overflow-x-auto p-4 bg-white rounded-lg shadow-sm"
    />
  );
};

export default MermaidChart;