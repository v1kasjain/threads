"use client";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function Bottombar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((slink) => {
          const isActive = (pathname.includes(slink.route) && slink.route.length > 1) || pathname === slink.route;
          return (
            <Link href={slink.route} key={slink.label} className={`bottombar_link ${isActive && "bg-primary-500"}`}>
              <Image src={slink.imgURL} alt={slink.label} width={24} height={24} />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">{slink.label.split(/\s+/)[0]}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
