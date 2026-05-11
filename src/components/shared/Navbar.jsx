import Image from "next/image";
import Logo from '@/assets/Wanderlast.png'
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { Button } from "@heroui/react";
import AllNavlinks from "../ui/AllNavlinks";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5">

<ul className="flex items-center gap-7 font-medium ">
<AllNavlinks/>
</ul>

      <div>
        <Image src={Logo} alt="Wanderlust Logo" width={200} height={100}/>
      </div>

<ul className="flex items-center gap-5 font-medium ">
<li className=""><Link href={'/profile'}><Button variant="ghost" className={' flex items-center'}><FaUser />Profile</Button></Link></li>
<li className=""><Link href={'/login'}><Button variant="ghost" className={' flex items-center'}>Login</Button></Link></li>
<li className=""><Link href={'/signup'}><Button variant="ghost" className={' flex items-center'}>Sign Up</Button></Link></li>
</ul>


    </nav>
  );
};

export default Navbar;