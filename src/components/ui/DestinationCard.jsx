
import Image from "next/image";
import Link from "next/link";
import { IoCalendarNumber, IoLocationSharp } from "react-icons/io5";

const DestinationCard = ({destination}) => {
  const {description,imageURL,departureDate,duration,price,category,country,destinationName,_id}=destination

  

  return (
    <div>

      {/* card img here */}

<div className="h-50 w-full relative">
  <Image src={imageURL} alt={destinationName} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
</div>

<div className="p-2.5 flex flex-col gap-2">

<div>
  <p className="text-(--primaryText) flex items-center gap-0.5"><IoLocationSharp />{country}</p>
</div>

<div className="flex justify-between items-center">
  <h3 className="font-medium text-2xl">{destinationName}</h3>
  <p><span className="font-bold">${price}</span>/person</p>
</div>

<div>
  <p className="text-(--primaryText) font-medium "><IoCalendarNumber />{duration}</p>
</div>

<div>
  <Link href={`/destinations/details/${_id}`} className="text-(--primaryBlue) hover:underline ">
    View Details
</Link>
</div>
</div>

    </div>
  );
};

export default DestinationCard;