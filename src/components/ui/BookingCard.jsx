'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsCheckCircleFill, BsShieldCheck } from "react-icons/bs";
import { MdHeadsetMic } from "react-icons/md";

const BookingCard = ({destination}) => {
const {data}=authClient.useSession()

const user=data?.user
const [date,setDate]=useState(null)


const {price,_id,country,imageURL
,destinationName
,}=destination


const handleBooking=async()=>{


if(!date){
toast.error('Please add booking date')

}

const bookingData={
userId:user?.id,
userName:user?.name,
userEmail:user?.email,
destinationName,
price,
destinationId:_id,
country,
imageURL,
departureDate:new Date(date).toDateString()
}

const req=await fetch('http://localhost:5000/bookings',{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(bookingData)
})


const res=await req.json()

console.log(res)
}






return (
    <>
        <div>
          <Card className="p-4 shadow border-none">
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-xs">Starting from</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-cyan-500">
                    ${price}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">
                    per person
                  </span>
                </div>
              </div>

              <div className="bg-gray-100 py-5 px-2.5 font-semibold rounded-lg">
                <DateField
                  className="min-w-[256px]"
                  name="date"
                 onChange={setDate}
                >
                  <Label>Date</Label>
                  <DateField.Group >
                    <DateField.Input   onChange={(e)=>{setDate(e.target.value)}}>
                      {(segment) => <DateField.Segment segment={segment} />}
                    </DateField.Input>
                  </DateField.Group>
                </DateField>
              </div>

              <Button
                color="primary"
                size="lg"
                className="w-full bg-(--primaryBlue) font-bold shadow-lg shadow-cyan-100"
            onPress={handleBooking}  >
                Book Now
              </Button>

              <div className="space-y-3 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <BsCheckCircleFill className="text-green-500" />
                  <span>Free cancellation up to 7 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <BsShieldCheck className="text-green-500" />
                  <span>Travel insurance included</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdHeadsetMic className="text-green-500" />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
          </Card>
        </div>  
    </>
  );
};

export default BookingCard;