"use client";
import {Card} from "flowbite-react";
import { gitIgnoreFile } from "flowbite-react/cli/consts";

export default function ProjectCard() {
    const projectList = [  
    {name: "Database internship at MedSci",
     description: "A website that stores internship information for students in the Faculty of Medical Sciences and shows internship locations on a map.",
     imageUrl: "/images/medsciWeb.png",
     gitHub: "https://github.com/water50m/database_mesci",
     developmentStatus: "ใช้งานจริงแล้ว <= แก้ไขและพัฒนาเพิ่มเติมตาม requirement ของทางมหาวิทยาลัย"
    },    
    {name: "Analysis-News",
     description: "A project that uses AI to predict stocks using information from the news of that day and some indicators. The predictions are then sent to users close to the time the stock market opens.",
     imageUrl: "",
     gitHub: "https://github.com/water50m/Analysis-News",
     developmentStatus: "กำลังพัฒนา <= 1. ใช้ AI หลากหลายตัวในการวิเคราะห์ และตรวจสอบผลลัพของกันและกัน 2. มีงานวิจัยที่ให้ ai จากแต่ละเจ้าว แข่งกัน trade ต้องใช้เวลาค้นคว้างานวิจัยและปรับใช้กับโปรเจคนี้"
    }
    ]; 
  return (
    <section className="mx-4">
        {projectList.map((project, index) => (
             <Card key={index} className=" bg-white/60">
                <div className="grid grid-cols-[auto_1fr] gap-4">

                    {/* รูป — คอลัมน์นี้จะกว้างตามขนาดรูป */}
                    <img
                    src={project.imageUrl}
                    alt=""
                    className="w-40 rounded-lg object-cover"
                    />

                    {/* เนื้อหา — คอลัมน์นี้กินพื้นที่ที่เหลือทั้งหมด */}
                    <div className="flex flex-col justify-center">
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.name}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                       {project.description}
                    </p>
                    <a className="text-gray-600 dark:text-gray-400 mt-2" href={project.gitHub} target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </a>
                    </div>

                </div>
                </Card>
                ))
        }
       
      </section>

    );
}
