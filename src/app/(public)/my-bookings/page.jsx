import MyBookingCard from "@/components/client-components/MyBookingCard";
import EmpthyBooking from "@/components/ui/EmpthyBooking";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookings =async () => {

  const session=await auth.api.getSession({
    headers:await headers()
  })



 const user=session?.user
console.log(user)
const res=await fetch(`http://localhost:5000/bookings/${user?.id}`)
const bookingsData=await res.json()

console.log('bookingsData',bookingsData)


  return (
    <section className="max-w-7xl mx-auto w-[90%] py-20">
<div className="space-y-4">
  <h2 className="text-5xl">My Bookings</h2>
  <p className="text-xl text-(--primaryText)">Manage and view your upcoming travel plans</p>
</div>


<div className="py-10 space-y-5">

{bookingsData.length===0?<EmpthyBooking/>: bookingsData.map(booking=><MyBookingCard key={booking._id} booking={booking} />) }

</div>




    </section>
  );
};

export default MyBookings;