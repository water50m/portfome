import Hero from "@/components/Hero";
import SkillOrbit from "@/components/SkillOrbit";
import ProjectCard from "@/components/projectCard";
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/resume');
  return (
    <div>

      {/* <Hero />
      <SkillOrbit />
      <ProjectCard /> */}
      
    </div>
  );
}