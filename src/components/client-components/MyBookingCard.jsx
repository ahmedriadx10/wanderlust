import { Eye } from "@gravity-ui/icons";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { SiReacthookform } from "react-icons/si";
import { CancelBooking } from "./CancelBooking";

const MyBookingCard = ({ booking }) => {
  const {
    _id,
    userId,
    imageURL,
    price,
    departureDate,
    destinationId,
    destinationName,
    country
  } = booking;

  console.log(imageURL)

  return <div className="flex  flex-col md:flex-row gap-5 items-center border border-zinc-200 p-5">

<div className="relative w-full md:w-100 h-56 border">
  <Image src={imageURL} alt={destinationName} className="object-cover"  fill/>
</div>
{/* booking details */}
<div className="flex flex-col gap-3">
<Chip  className="bg-green-200 text-green-600 max-w-max">{country}</Chip>

<h4 className="font-bold text-4xl">{destinationName}</h4>
<div className="flex gap-1.5 items-center text-(--primaryText)"><FaCalendar/><span>Departure:</span><span>{departureDate}</span></div>

<div className="flex gap-1.5 items-center text-(--primaryText)">
  <SiReacthookform /> <p>Booking ID: {_id}</p>
</div>

<div className="flex justify-between items-center">
  <h5 className="text-(--primaryBlue) font-bold text-3xl">${price}</h5>
  <div className="flex items-center gap-4">
  <CancelBooking booking={booking}/>
 <Link href={`/destinations/details/${destinationId}`}>   <Button className={'rounded-none bg-(--primaryBlue) '}><Eye/>View</Button></Link>
  </div>
</div>
</div>

  </div>;
};

export default MyBookingCard;
