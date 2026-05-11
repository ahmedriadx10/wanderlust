import { destinationsGet } from "@/app/lib/data";
import DestinationCard from "@/components/ui/DestinationCard";

const Destinations =async () => {
  
  const destinations=await destinationsGet()

  console.log(destinations)
  

  return (
    <section className="max-w-7xl mx-auto w-[90%]">
<div className="space-y-5">
  <h4 className="text-5xl font-bold ">Explore All Destinations</h4>
  <p className="text-(--primaryText) text-xl ">Find your perfect travel experience from our curated collection</p>

  {/* here the filter and sort structure will appear */}

  <p className="text-(--primaryText) text-xl">Showing {destinations.length} destinations</p>
</div>


{/* all destinations card here */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">

{destinations.map(destination=><DestinationCard key={destination._id} destination={destination} />)}

</div>

    </section>
  );
};

export default Destinations;
