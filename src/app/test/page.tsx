
"use client";

import { Card } from "flowbite-react"; 
import GalaxyBg from "@/components/galaxy_bg";
import { redirect } from 'next/navigation';

export default function Component() {
  redirect('/resume');
  return (
    
      <GalaxyBg />

    
  );
}
