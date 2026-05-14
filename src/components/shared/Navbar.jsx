import Image from "next/image";
import Logo from "@/assets/Wanderlast.png";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { Avatar, Button } from "@heroui/react";
import AllNavlinks from "../ui/AllNavlinks";
import AuthLinks from "../ui/AuthLinks";
import MyNavlink from "../ui/MyNavlink";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutBtn from "../client-components/SignOutBtn";
import { MobileMenu } from "../client-components/MobileMenu";
const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session);

  const user = session?.user;

  return (
    <nav className="flex justify-between items-center p-5">
      <ul className="hidden md:flex items-center gap-7 font-medium ">
        <AllNavlinks />
      </ul>

      <div>
        <Image src={Logo} alt="Wanderlust Logo" width={150} height={50} />
      </div>

  <div className="flex items-center gap-2.5">

   {session?.user?  <Avatar>
        <Avatar.Image src={user?.image} referrerPolicy="no-referrer"/>
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>:''}


<div className="md:hidden">
  <MobileMenu/>
</div>
        <ul className="hidden md:flex items-center gap-5 font-medium ">
    
        {session?.user ? <SignOutBtn /> : <AuthLinks />}
      </ul>
  </div>
    </nav>
  );
};

export default Navbar;
