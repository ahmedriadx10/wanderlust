export const destinationsGet=async()=>{

  const res=await fetch('http://localhost:5000/destinations');

  return res.json();


}


export const destinationsGetById=async(id)=>{

  const res=await fetch(`http://localhost:5000/destinations/${id}`);

  return res.json();

}
