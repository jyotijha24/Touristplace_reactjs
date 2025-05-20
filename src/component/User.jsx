function User({name,img,desc})
{
    return (
        <>
        <div className=" w-96  mt-5 px-2  py-2 bg-white flex gap-6 mx-auto justify-between items-center   rounded-xl">
           <div className="flex gap-4 items-center ">
            <img className="h-12 w-12 object-cover rounded-full" src={img}></img>
            <div >
            <p className="text-sm">{name}</p>
            <p className="text-md">{desc}</p>
            </div> 
            </div> 
           
                <button className="">Follow</button>
          
            
           
            
            
        </div>
        
        </>
    )
}
export default User;