import { FaGoogle,FaGithub } from "react-icons/fa";
export default function Rightsidenav() {
  return (
    <div >
      <h1>Login with</h1>
      <div className=' flex items-center gap-1 border  hover:bg-inherit  rounded-md  mt-2  py-1.5 px-10 border-blue-400'>
        <FaGoogle className=" text-blue-500 "></FaGoogle>
       <span className='text-blue-600'> Login with Google</span>
      </div>

      <div className=' flex items-center gap-1 border  hover:bg-inherit  rounded-md  mt-2  py-1.5 px-10   border-black'>
        <FaGithub className=" text-black-500  "></FaGithub>
       <span className='text-black-600 font-medium'> Login with Google</span>
      </div>

       <h1 className=' font-bold text-gray-700 mt-3'>Find us on</h1>

       <div>
       <div className=' flex items-center gap-1 border  hover:bg-inherit  rounded-t-md  mt-2  py-5 px-10  border-gray-300'>
        <FaGoogle className="  "></FaGoogle>
       <span className='text-blue-600'> Login with Google</span>
      </div><div className=' flex items-center gap-1 border  hover:bg-inherit    py-5 px-10 border-x-gray-300'>
        <FaGoogle className=" text-blue-500 "></FaGoogle>
       <span className='text-blue-600'> Login with Google</span>
      </div>
       </div><div className=' flex items-center gap-1 border  hover:bg-inherit  rounded-b-md    py-5 px-10 border-gray-300'>
        <FaGoogle className=" text-blue-500 "></FaGoogle>
       <span className='text-blue-600'> Login with Google</span>
      </div>
    </div>
  )
}
