'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavlink = ({href,children}) => {
const path=usePathname()


  return (
    <Link href={href} className={`${path===href?'text-(--primaryBlue) border-b border-b-(--primaryBlue)':''} hover:text-(--primaryBlue) transition-colors`}>
      {children}
    </Link>
  );
};

export default MyNavlink;