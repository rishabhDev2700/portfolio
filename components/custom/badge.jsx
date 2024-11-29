"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function Badge({ containerref, name, image, drag }) {
    return (
        <motion.div drag={drag} dragConstraints={containerref} className='w-44 p-4 rounded-full flex flex-col justify-center items-center hover:scale-110 duration-200 cursor-move' >
            <Image src={image} alt={name} className='-z-10' loading='lazy' />
            <h2>{name}</h2>
        </motion.div>
    )
}
