import { Button, Separator } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url(/Banner.png)] bg-cover bg-center bg-no-repeat text-white  flex justify-between flex-col items-center  gap-5 h-[70vh]">
      <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-3xl sm:text-4xl md:text-7xl">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="md:text-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex gap-2">
    <Link href={'/destinations'}>      <Button className="uppercase bg-cyan-500  ">
            Explore Now
          </Button></Link>

     <Link href={'/destinations'} >
          <Button className="uppercase  bg-white/50 ">
            View Destination
          </Button>
     </Link>
        </div>
      </div>

      <div className=" bg-white/30 flex flex-wrap justify-center gap-5 w-full items-center">
        <div className="p-1">
          <h3 className="text-sm">Location</h3>
          <p className="text-xs">Address, City or Zip</p>
        </div>

         <Separator variant="tertiary" orientation="vertical" />

        <div className="p-1">
          <h3 className="text-sm">Date/Duration</h3>
          <p className="text-xs">Anytime/3 Days</p>
        </div>

           <Separator variant="tertiary" orientation="vertical" />

        <div className="p-1">
          <h3 className="text-sm">Budget</h3>
          <p className="text-xs">$0-$3000</p>
        </div>

           <Separator variant="tertiary" orientation="vertical" />

        <div className="p-1">
          <h3 className="text-sm">People</h3>
          <p className="text-xs">5-10</p>
        </div>

<Separator variant="tertiary" orientation="vertical"/>

        <div className="hidden md:block bg-cyan-500 py-2 px-4">
          <h3>Search</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;