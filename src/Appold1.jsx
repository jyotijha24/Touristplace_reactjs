import User from "./component/User";
const users = [
  {
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    name: "Rohan Sharma",
    desc: "Frontend Developer"
  },
  {
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    name: "Priya Mehta",
    desc: "UI/UX Designer"
  },
  {
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    name: "Aman Verma",
    desc: "Fullstack Engineer"
  },
  {
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    name: "Kritika Singh",
    desc: "Mobile App Developer"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1664199486587-37f325d15182?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfDB8MHx8fDA%3D",
    name: "Arjun Desai",
    desc: "Backend Developer"
  },
  {
    img: "https://images.unsplash.com/photo-1690191770090-c183f3b76531?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHVzZXJ8ZW58MHwwfDB8fHww",
    name: "Neha Kapoor",
    desc: "React Developer"
  },
  {
    img: "https://images.unsplash.com/photo-1659352789320-42b2d5de5599?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lkYXJ0aCUyMG1hbGhvdHJhfGVufDB8MHwwfHx8MA%3D%3D",
    name: "Siddharth Joshi",
    desc: "Software Tester"
  }
];

function Appold1()
{
    return(
        <>
        {users.map((user)=>{ return <User name={user.name} desc={user.desc} img={user.img}/>})}
        </>
    )
}
export default Appold1;