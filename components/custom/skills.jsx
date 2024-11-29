"use client"
import { skills } from '@/data/data'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import Badge from './badge'
import TypingAnimation from '../ui/typing-animation'

export default function Skills() {
    const containerref = useRef(null)
    return (
        <main className='lg:w-1/2 lg:mx-auto'>
            <h2 className="my-8 text-5xl text-center font-black text-violet-600">Skills</h2>
            <motion.div ref={containerref} className='grid grid-cols-2 lg:grid-cols-4 p-8 place-items-center h-full w-full'>
                {skills.map((s, i) => <Badge drag key={i} container={containerref} name={s.name} image={s.image} />)}
            </motion.div>
            <TypingAnimation className='text-3xl text-center font-bold mt-8 mb-16 text-pink-700 animate-pulse' text="and a lot more!" duration={100} />
        </main>
    )
}
