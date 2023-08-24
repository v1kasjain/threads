"use client";

import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="costom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((slink) => {
          const isActive = (pathname.includes(slink.route) && slink.route.length > 1) || pathname === slink.route;
          return (
            <Link href={slink.route} key={slink.label} className={`leftsidebar_link ${isActive && "bg-primary-500"}`}>
              <Image src={slink.imgURL} alt={slink.label} width={24} height={24} />
              <p className="text-light-1 max-lg:hidden">{slink.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton signOutCallback={()=>{
            router.push('/sign-in')
          }}>
            <div className="flex cursor-pointer gap-4 p-4">
              <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSidebar;
