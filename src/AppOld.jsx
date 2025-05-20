import Card from "./component/card";
const foodItems = [
  {
    name: "Paneer Butter Masala",
    desc: "Creamy tomato-based curry with soft paneer cubes",
    price: 220,
    type: "veg",
    img:"https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFuZWVyJTIwQnV0dGVyJTIwTWFzYWxhfGVufDB8MHwwfHx8MA%3D%3D",
    rating: 4.5
  },
  {
    name: "Chicken Biryani",
    desc: "Aromatic basmati rice cooked with spiced chicken",
    price: 280,
    type: "non-veg",
    img:"https://plus.unsplash.com/premium_photo-1694141251673-1758913ade48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlyeWFuaXxlbnwwfDB8MHx8fDA%3D",
    rating: 3.9
  },
  {
    name: "Masala Dosa",
    desc: "Crispy South Indian crepe with spicy potato filling",
    price: 120,
    type: "veg",
    img:"https://images.unsplash.com/photo-1743517894265-c86ab035adef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWFzYWxhJTIwRG9zYXxlbnwwfDB8MHx8fDA%3D",
    rating: 4.3
  },
  {
    name: "Mutton Rogan Josh",
    desc: "Kashmiri-style lamb curry with rich flavors",
    price: 320,
    type: "non-veg",
    img:"https://images.unsplash.com/photo-1608684363982-d2d470f0b4bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11dHRvbnxlbnwwfDB8MHx8fDA%3D",
    rating: 4.6
  },
  {
    name: "Veg Pulao",
    desc: "Fragrant rice cooked with vegetables and spices",
    price: 150,
    type: "veg",
    img:"https://media.istockphoto.com/id/2212838243/photo/indian-veg-biryani-veg-pulav-indian-vegetable-pulav-biriyani-vegetable-biriyani-served-in-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=ovB4HXD3t0fWoG3YUCc1QjO0SRzv5po2Vk6bc_e3lBE=",
    rating: 4.1
  }
  
];

function AppOld()
{
  return(
    <>
    <div className="flex justify-center gap-2">
    {
      foodItems.map((item)=><Card img={item.img} desc={item.desc} name={item.name} price={item.price} type={item.type} rating={item.rating}/>)
    }
    </div>  
    </>
  )
}
export default AppOld111;