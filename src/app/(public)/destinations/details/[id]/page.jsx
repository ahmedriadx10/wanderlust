
import { destinationsGetById } from "@/lib/data";

import { Button, Card, Input, Chip, DateField, Label } from "@heroui/react";
import {
  HiLocationMarker,
  HiOutlineClock,
  HiOutlineCalendar,
} from "react-icons/hi";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import {
  MdOutlineModeEdit,
  MdOutlineDeleteOutline,
  MdHeadsetMic,
} from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { BsCheckCircleFill, BsShieldCheck } from "react-icons/bs";
import Image from "next/image";
import { EditModal } from "@/components/ui/EditModal";
import { DeleteModal } from "@/components/ui/DeleteModal";
import BookingCard from "@/components/ui/BookingCard";


const DestinationDetailsPage = async ({ params }) => {

  const { id } = await params;

  const destination = await destinationsGetById(id);

  const {
    description,
    imageURL,
    departureDate,
    duration,
    price,
    category,
    country,
    destinationName,
    _id,
  } = destination;



  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-5 font-sans">
      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-6">
        <Button variant="light" className="text-gray-500 font-medium">
          Back to Destinations
        </Button>
        <div className="flex gap-2">
          <EditModal destination={destination} />
          <DeleteModal destination={destination} />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-100 w-full mb-5">
        <Image
          fill
          src={imageURL}
          alt={destinationName}
          className=" object-cover rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
        {/* Left Side: Details */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-1 text-gray-400 text-sm mb-2">
            <HiLocationMarker /> <span>{country}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{destinationName}</h1>

          <div className="flex gap-6 mb-8 items-center">
            <div className="flex items-center gap-1">
              <AiFillStar className="text-green-500 text-xl" />
              <span className="font-bold">4.9</span>
              <span className="text-gray-400 text-sm">(234 reviews)</span>
            </div>
            <Chip variant="flat" color="default">
              {duration}
            </Chip>
          </div>

          <section className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Overview</h3>
              <p className="text-gray-500 leading-relaxed">{description}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Luxury beachfront accommodation",
                  "Traditional Balinese spa treatment",
                  "Sunrise trek to Mount Batur",
                  "Visit Uluwatu Temple at sunset",
                  "Private beach dinner experience",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <BsCheckCircleFill className="text-green-500 shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Right Side: Booking Card */}
    <BookingCard destination={destination}/>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
