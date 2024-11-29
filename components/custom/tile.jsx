import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
export function Tile({ title, image, description, color, buttonText, type, slug }) {
  return <MagicCard className="m-2 w-4/5 lg:w-80  h-[32rem] hover:scale-105 duration-200 shadow-md flex flex-col justify-between items-start" gradientColor={color}>
    <Image src={image} alt="screenshot of app" className="min-h-[50%]  aspect-square object-cover" />
    <h2 className="p-1 text-2xl font-black">{title}</h2>
    <p className="p-1 text-sm text-slate-600 dark:text-slate-300">
      {description}
    </p>
    <div className="px-2 pt-2 ">
      <Link href={`/${type}/${slug}`}>
        <Button>{buttonText}</Button>
      </Link>
    </div>
  </MagicCard>
}