import Image from "next/image";
import Logo from '@/assets/Wanderlast.png'
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { Button } from "@heroui/react";
import AllNavlinks from "../ui/AllNavlinks";
import AuthLinks from "../ui/AuthLinks";
import MyNavlink from "../ui/MyNavlink";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutBtn from "../client-components/SignOutBtn";
const Navbar =async () => {

const session=await auth.api.getSession({

  headers:await headers()
}
)

console.log(session)

const user=session?.user



  return (
    <nav className="flex justify-between items-center p-5">

<ul className="flex items-center gap-7 font-medium ">
<AllNavlinks/>
</ul>

      <div>
        <Image src={Logo} alt="Wanderlust Logo" width={200} height={100}/>
      </div>

<ul className="flex items-center gap-5 font-medium ">
<li><MyNavlink href={'/profile'}><Button variant=""  className={' flex items-center'}><FaUser />Profile</Button></MyNavlink></li>
{session?.user?<SignOutBtn/>:<AuthLinks/>}
</ul>


    </nav>
  );
};

export default Navbar;