function Card({img,desc,name,type,price,rating})// here either we can do props or destructure format like desc or img
{
    return(
        <>
        
        <div className="w-72 border-1 border-gray-300 rounded-2xl px-2 py-2 mb-2 mt-4  " onClick={()=>
            {alert(`${name} is ordered`)}}>
            <div className="relative" >
        <img className="border-0 rounded-xl mt-2 mb-2 w-72 h-44 items-center " src={img}></img>
        {
        rating>4.1?<p className="bg-green-100 absolute text-green-700 font-bold rounded-2xl px-2 py-[1.5px] bottom-1 left-2 text-sm">Best Seller</p> :""
       }
        </div>
        <div className="flex justify-between items-center">
        <p className="mt-2 font-semibold">{name}</p>
        <span className={type =='veg' ? 'h-2 w-2 rounded-full bg-green-600': 'h-2 w-2 rounded-full bg-red-500'}></span>
        </div>
        <p className="mt-1">{desc}</p>
        <div className="flex justify-between ">
            <p className="font-bold text-blue-700"> rs {price}</p>
            {
                price>200 ? <p className="text-red-700 ">Free Delivery</p>:<p className="text-red-600">Additinal 49rs will apply</p>
            }
        </div>
         </div>   
        </>
    )
}
export default Card;