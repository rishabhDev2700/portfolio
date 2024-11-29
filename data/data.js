import web from '@/assets/p-web-sm.jpg'
import mobile from '@/assets/p-mobile-sm.jpg'
import learn from '@/assets/p-learn-sm.jpg'
import kratecover from "@/assets/krate.png"
import projektcover from "@/assets/projekt.png"

import html from "@/assets/skills/html.png"
import css from "@/assets/skills/css-3.png"
import js from "@/assets/skills/js.png"
import node from "@/assets/skills/node-js.png"
import react from "@/assets/skills/react.png"
import next from "@/assets/skills/nextjs.png"
import python from "@/assets/skills/python.png"
import django from "@/assets/skills/django.png"
import docker from "@/assets/skills/docker.png"
import linux from "@/assets/skills/linux.png"
import mongo from "@/assets/skills/mongodb.png"
import postgresql from "@/assets/skills/postgresql.png"
import tailwind from "@/assets/skills/tailwindcss.png"
import ignite from "@/assets/projects/Ignite.png"
import go from "@/assets/skills/go.png"

export const projectsData = [
  { title: "Projekt", description: "A streamlined project management tool for team building, task creation, assignment, and efficient collaboration, designed to simplify workflows and boost productivity.", color: "#b27aff", image: projektcover, slug: "projekt" },
  { title: "Krate", description: "Online store enabling seamless online shopping with features like product browsing, secure payments, and admin management, built for a user-friendly experience.", color: "#a1a1a1", image: kratecover, slug: "krate" },
  { title: "Ignite Property Services", description: "Specializing in power washing, fleet washing, and precise line painting to keep your spaces clean, professional, and well-maintained.", color: "#78c2ff", image: ignite, slug: "ignite-property-services" },
  // { title: "", description: "", color: "", image:  },
];

export const servicesData = [
  {
    title: "Web development", slug: "web-development", description: "Responsive, user-friendly websites and scalable web applications tailored to your needs, ensuring seamless functionality and modern design.", color: "#9cf7df", image: web
  },
  { title: "Mobile development", slug: "mobile-development", description: "Intuitive, high-performance mobile apps with sleek designs, tailored to provide a seamless user experience on iOS and Android platforms", color: "#ffdab3", image: mobile },
  { title: "Learn to Code", slug: "learn", description: "Practical, hands-on programming lessons, guiding learners to build strong coding foundations and solve real-world problems effectively.", color: "#f5f242", image: learn },
  // { title: "", description: "", color: "", image: "" },
];


export const skills = [
  { name: "HTML", image: html },
  { name: "CSS3", image: css },
  { name: "Javascript", image: js },
  { name: "NodeJS", image: node },
  { name: "ReactJS", image: react },
  { name: "NexttJS", image: next },
  { name: "Python", image: python },
  { name: "Django", image: django },
  { name: "Docker", image: docker },
  { name: "PostgreSQL", image: postgresql },
  { name: "MongoDB", image: mongo },
  { name: "TailwindCSS", image: tailwind },
  { name: "Linux", image: linux },
  { name: "Go", image: go }

]

import image20 from '@/assets/projects/project-2-0.png'
import image21 from '@/assets/projects/project-2-1.png'
import image22 from '@/assets/projects/project-2-2.png'
import image10 from '@/assets/projects/project-1-0.png'
import image11 from '@/assets/projects/project-1-1.png'
import image12 from '@/assets/projects/project-1-2.png'
import image13 from '@/assets/projects/project-1-3.png'
import image30 from '@/assets/projects/project-3-0.png'
import image31 from '@/assets/projects/project-3-1.png'
import image32 from '@/assets/projects/project-3-2.png'
export const kratess = [image20, image21, image22]
export const projekt = [image10, image11, image12, image13]
export const ignites = [image30, image31, image32]