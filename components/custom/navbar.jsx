import { Menu, SquareMenu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { ModeToggle } from "../toggler";

export function Navbar() {
  return (
    <div className="px-8 py-4 sticky top-0  shadow-md shadow-black/5 lg:text-2xl backdrop-blur-md  dark:bg-black/30 z-50">
      <header className="flex justify-between items-center lg:w-2/3 lg:mx-auto">
        <svg
          className="animate-spin"
          width="20px"
          height="20px"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.877075 7.49985C0.877075 3.84216 3.84222 0.877014 7.49991 0.877014C11.1576 0.877014 14.1227 3.84216 14.1227 7.49985C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49985ZM3.78135 3.21565C4.68298 2.43239 5.83429 1.92904 7.09998 1.84089V6.53429L3.78135 3.21565ZM3.21567 3.78134C2.43242 4.68298 1.92909 5.83428 1.84095 7.09997H6.5343L3.21567 3.78134ZM6.5343 7.89997H1.84097C1.92916 9.16562 2.43253 10.3169 3.21579 11.2185L6.5343 7.89997ZM3.78149 11.7842C4.6831 12.5673 5.83435 13.0707 7.09998 13.1588V8.46566L3.78149 11.7842ZM7.89998 8.46566V13.1588C9.16559 13.0706 10.3168 12.5673 11.2184 11.7841L7.89998 8.46566ZM11.7841 11.2184C12.5673 10.3168 13.0707 9.16558 13.1588 7.89997H8.46567L11.7841 11.2184ZM8.46567 7.09997H13.1589C13.0707 5.83432 12.5674 4.68305 11.7842 3.78143L8.46567 7.09997ZM11.2185 3.21573C10.3169 2.43246 9.16565 1.92909 7.89998 1.8409V6.53429L11.2185 3.21573Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
        <div className="text-xl flex items-center lg:text-4xl">
          <Link href="/"> Rishabh Bahukhandi</Link>
        </div>
        <Sheet>
          <SheetTrigger className="lg:hidden self-end">
            <Menu />
          </SheetTrigger>
          <SheetContent aria-describedby="Navigation links">
            <SheetHeader>
              <SheetTitle>Hello!</SheetTitle>
              <Separator />
              <div className="flex flex-col text-lg ">
                <Link className="p-4" href="/projects">
                  Work and Projects
                </Link>
                <Link className="p-4" href="/services">
                  Services
                </Link>
                <Link className="p-4 flex justify-center items-center" href="https://rishabhdev.hashnode.dev/" target="_blank">
                  Blog<svg className="ml-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738" fill="currentColor"></path></svg>
                </Link>
                <Link
                  className="p-4"
                  href="/contact"
                >
                  Contact
                </Link>
                <ModeToggle />
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <nav className="hidden lg:flex lg:justify-between lg:w-1/2 text-sm lg:items-center">
          <Link
            className="border-b-2 border-transparent hover:border-violet-700 duration-200"
            href="/projects"
          >
            Work and Projects
          </Link>
          <Link
            className="border-b-2 border-transparent hover:border-violet-700 duration-200"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="border-b-2 border-transparent hover:border-violet-700 duration-200"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="border-b-2 border-transparent hover:border-violet-700 duration-200 flex items-center justify-center text-center"
            href="https://rishabhdev.hashnode.dev/"
            target="_blank"
          >
            Blog
            <svg className="ml-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738" fill="currentColor"></path></svg>
          </Link>
          <ModeToggle />
        </nav>
      </header>
    </div>
  );
}
