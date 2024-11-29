import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { kratess } from "@/data/data"
import Image from "next/image"
import Link from "next/link"
function KratePage() {

  return (
    <article className='text-center'>
      <h1 className='text-5xl'>Krate</h1>
      <Carousel className="w-3/5 mx-auto block my-8">
        <CarouselContent className="w-full">
          {kratess.map((s, i) => <CarouselItem key={i}><Image className="w-full mx-auto" src={s} loading="lazy" alt={`screenshot-${i}`} /></CarouselItem>)}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Card className="dark:bg-neutral-900 dark:text-white p-6 rounded-lg shadow-md mx-2 my-8 lg:w-3/5 lg:mx-auto">
        <h2 className="text-2xl font-semibold mb-4">E-commerce Website</h2>
        <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
          This e-commerce platform is built with <span>Django</span> for robust backend development, styled with <span>TailwindCSS</span>, and uses <span>PostgreSQL</span> for reliable database management. It features a seamless order placement system, secure online payments powered by <span>Razorpay</span>, and an intuitive admin Card for efficient store management. The combination of these tools ensures a modern, user-friendly shopping experience.
        </p>
        <Link href="http://krate.fuzzydevs.com" target="_blank"><Button className="mt-8 hover:bg-teal-600" variant="secondary"><div>Click to visit</div><svg className="ml-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738" fill="currentColor"></path></svg>
        </Button></Link>
      </Card>


    </article>
  )
}

export default KratePage