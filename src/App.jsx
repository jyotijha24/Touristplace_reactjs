import TouristPlace from "./component/TouristPlace";

const touristPlaces = [
  {
    placeName: "Goa",
    desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
    img: "https://images.unsplash.com/photo-1682743710558-b338ba285925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
    whenToVisit: "Winter",
    ratings: 4.5,
    price: 15000
  },
  {
    placeName: "Manali",
    desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
    img: "https://images.unsplash.com/photo-1712388429936-2abc7144083f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D",
    whenToVisit: "Summer",
    ratings: 4.7,
    price: 10000
  },
  {
    placeName: "Kerala",
    desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
    img: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S2VyYWxhfGVufDB8fDB8fHww",
    whenToVisit: "Winter",
    ratings: 4.8,
    price: 20000
  },
  {
    placeName: "Jaipur",
    desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFqYXN0aGFufGVufDB8fDB8fHww",
    whenToVisit: "Winter",
    ratings: 4.6,
    price: 12000
  }
];

function App()
{
    return (
        <>
        <div className="font-bold text-3xl text-center mt-4 p-4  bg-amber-100">Tourist places to visit</div>
        <div className="flex mx-auto mt-5 gap-2 border-blue-800 bg-blue-300 justify-between ">
       {
        
        touristPlaces.map((place)=>{return <TouristPlace  placename={place.placeName} img={place.img} rating={place.ratings} desc={place.desc} whenToVisit={place.whenToVisit} price={place.price} />})
       }
       </div>
        </>
    )
}
export default App;