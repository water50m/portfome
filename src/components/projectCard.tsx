"use client";
import {Card} from "flowbite-react";
import { gitIgnoreFile } from "flowbite-react/cli/consts";

export default function ProjectCard() {
    const projectList = [  
    {name: "Database internship at MedSci",
     description: "A website that stores internship information for students in the Faculty of Medical Sciences and shows internship locations on a map.",
     imageUrl: "/images/medsciWeb.png",
     gitHub: ""
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
                    <a className="text-gray-600 dark:text-gray-400 mt-2">
                       {project.gitHub}
                    </a>
                    </div>

                </div>
                </Card>
                ))
        }
       
      </section>

    );
}
