import { NavLink } from "react-router-dom"
import user from  '../../assets/user.png'
export default function Navbar() {

  const links=<>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/career'>Career</NavLink>
  </>
  return (
    <div>
      <h2 className="text-2xl">navbar</h2>
      <div className=" flex bg-base-100">
  <div className=" flex flex-1 justify-center gap-8 font-bold">
   {links}
  </div>
 <div className=" flex mr-16 gap-4">

 <div>
 <img src={user} alt=""  className=" w-10"/>
  </div> 
   <button className=" py-2 px-10 bg-gray-700 rounded-sm text-white">Log in</button>
 </div>
</div>
    </div>
  )
}
