import { FaGoogle, FaGithub } from "react-icons/fa";

export default function Rightsidenav() {
  return (
    <div>
      <h1>Login with</h1>
      <div className=" flex items-center gap-1 border  hover:bg-inherit  rounded-md  mt-2  py-1.5 px-10 border-blue-400">
        <FaGoogle className=" text-blue-500 "></FaGoogle>
        <span className="text-blue-600"> Login with Google</span>
      </div>

      <div className=" flex items-center gap-1 border  hover:bg-inherit  rounded-md  mt-2  py-1.5 px-10   border-black">
        <FaGithub className=" text-black-500  "></FaGithub>
        <span className="text-black-600 font-medium"> Login with Google</span>
      </div>

      <h1 className=" font-bold text-gray-700 mt-3">Find us on</h1>

      <div>
        <div className=" flex items-center gap-1 border  hover:bg-inherit  rounded-t-md  mt-2  py-5 px-10  border-gray-300">
          <img src="/src/assets/Facebook.png" alt="" />
          <span className="text-blue-600"> Facebook</span>
        </div>
        <div className=" flex items-center gap-1 border  hover:bg-inherit    py-5 px-10 border-x-gray-300">
          <img src="/src/assets/Twitter.png" alt="" />
          <span className="text-blue-600">Twitter</span>
        </div>
        <div className=" flex items-center gap-1 border  hover:bg-inherit  rounded-b-md    py-5 px-10 border-gray-300">
          <img src="/src/assets/Instagram.png" alt="" />
          <span className="text-blue-600">Instagram</span>
        </div>
      </div>

      <div className=" bg-gray-200 mt-4 px-2">
        <h1>Q -Zone</h1>
        <div>
          <img src="/src/assets/qZone1.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/qZone2.png" alt="" />
        </div>
        <div className=' py-4'>
          <img src="/src/assets/qZone3.png" alt="" />
        </div>
      </div>
      <div
        className=" min-h-[420px] mt-5 relative"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/FmzPt9r/bg.png)",
        }}
      >
        <div className=' absolute   top-16 space-y-5'>
          <div className=' text-white text-4xl text-center font-semibold     '>Create an Amazing Newspaper</div>
          <div className='text-white text-xl   px-4  text-center'>
          Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
          </div>
           <div className=' flex justify-center '>
           <button className=' py-3 px-5 font-semibold bg-[#D72050] text-white'>Learn more</button>
           </div>
        </div>
      </div>
    </div>
  );
}
