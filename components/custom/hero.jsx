"use client"
import { motion } from 'framer-motion'
import Profile from "@/assets/profile.webp";
import Image from "next/image";
import { Separator } from "../ui/separator";
export function Hero() {
  return (
    <main className="text-center lg:grid lg:grid-cols-2 lg:w-1/2 lg:mx-auto items-center">
      <motion.div animate={{ opacity: [0, 100] }} transition={{ duration: 2 }}>
        <Image
          className="my-8 dark:mix-blend-difference"
          src={Profile}
          alt="Rishabh"
          priority
        />
      </motion.div>
      <div>
        <h1 className="text-5xl pt- pb-4">Rishabh Bahukhandi</h1>
        <Separator className="w-24 h-0.5 mx-auto bg-indigo-700" />
        <h2 className="text-xl py-4 text-purple-600">Full stack Developer</h2>
      </div>
    </main>
  );
}
