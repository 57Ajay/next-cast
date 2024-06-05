'use client';
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from '@/constants/index';
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const LeftSidebar=()=> {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
          <Image src="/icons/logo.svg" alt="logo" width={27} height={27} className="rounded-full"/>
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">NeXtCast </h1>
        </Link>
        {sidebarLinks.map(({route, label, imgURL}: {route: string, label: string, imgURL: string})=>{
          const isActive = pathName === route || pathName.startsWith(`${route}/`);

          return <Link href={route} key={label}
          className={cn("flex gap-3 items-center cursor-pointer max-lg:px-4 justify-center lg:justify-start", {"bg-nav-focus border-r-4 border-orange-1": isActive})}
          >
            <Image src={imgURL} alt={label} width={24} height={24} className="rounded-full"/>
            <p>{label}</p>
          </Link>
        })}
      </nav>
    </section>
  )
}

export default LeftSidebar;