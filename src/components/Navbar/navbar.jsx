import { NavLink } from "react-router-dom"

export default function Navbar() {

  const links=<>
    <NavLink to='/home'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/career'>Career</NavLink>
  </>
  return (
    <div>
      <h2 className="text-2xl">navbar</h2>
      <div className="navbar bg-base-100">
  <div className=" gap-8 font-bold">
   {links}
  </div>
 <div>
  <button className="btn ">Log in</button>
 </div>
</div>
    </div>
  )
}
