import MyNavlink from "./MyNavlink";

const AllNavlinks = () => {
  return (
    <>
     <li><MyNavlink href={'/'}>Home</MyNavlink></li> 
     <li><MyNavlink href={'/destinations'}>Destinations</MyNavlink></li> 
     <li><MyNavlink href={'/my-bookings'}>My Bookings</MyNavlink></li> 

     <li><MyNavlink href={'/new-destination'}>New Destination</MyNavlink></li> 
    </>
  );
};

export default AllNavlinks;