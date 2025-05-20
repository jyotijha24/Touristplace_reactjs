
function TouristPlace ({placename,img,rating,desc,whenToVisit,price})
{
    return (
        <>
        {
                <div className="w-80   gap-2 p-8 rounded-xl m-4 bg-blue-200 border-blue-500 border-2">
                <img className=" rounded-xl w-64 h-52  object-cover text-center transition-transform duration-300 hover:scale-110  " src={img}></img>
                <p className="mt-2 font-bold">{placename}</p>
                <p className="font-bold">Rating - {rating}</p>
                <p className="font-bold"> price - {price} { price>15000 ? <span  className="text-red-600">Expensive</span>: <span className="text-green-600">Cheaper</span>} </p>
                
                <p className="text-sm text-blue-800">{desc}</p>
               {whenToVisit =="Winter" ? <p className=" bg-amber-100 font-semibold mt-2 text-blue-400 p-1 rounded-lg ">Best Time to visit - Winter </p> :<p className=" bg-amber-100 font-semibold mt-2 p-1 rounded-lg text-red-400 ">Best Time to visit - Summer </p>}

            </div>
            
            
        }
        </>
    )

}
export default TouristPlace ;