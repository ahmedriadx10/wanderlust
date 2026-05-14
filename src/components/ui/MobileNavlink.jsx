'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavlink = ({href,children}) => {
  
  const path=usePathname()


  return (
    <Link href={href} className={`${path===href?'text-(--primaryBlue) font-semibold':''}`}>
{children}
    </Link>
  );
};

export default MobileNavlink;