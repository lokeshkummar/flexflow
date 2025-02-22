import { FaArrowRightLong } from "react-icons/fa6";

const OurPrograms = () => {
  return (
    <div className='min-h-96 w-full md:px-32 -mt-24 md:mt-20'>
      <h2 className='md:text-center pl-5 md:pl-0 uppercase text-2xl pt-5 md:pt-0 md:text-5xl font-bold text-white'>Our <span className='text-green-500'>special</span> program.</h2>
      <ul className='flex justify-center gap-10 md:gap-24 items-center text-neutral-500 py-5 text-xs md:text-sm font-bold uppercase overflow-scroll pl-10 md:pl-0 '>
        <li className='hover:text-neutral-400 cursor-pointer flex flex-col justify-between'>All
          <span className="h-0.5 mt-1 w-6"></span>
        </li>
        <li className='hover:text-neutral-400 cursor-pointer'>Signature class</li>
        <li className='hover:text-neutral-400 cursor-pointer'>Cardio</li>
        <li className='hover:text-neutral-400 cursor-pointer'>Cycling</li>
        <li className='hover:text-neutral-400 cursor-pointer'>Mind And Body</li>
      </ul>
      <div className="h-80 w-full ">
        <div className="h-full w-full flex mt-5">
          <div className="h-full w-1/2 flex ">
            <div className="h-full w-[15%] flex items-center justify-center bg-white text-black rounded-xl ">
              <h2 className="-rotate-90 text-3xl uppercase whitespace-nowrap flex justify-center gap-3 items-center font-semibold">Mind and Body <FaArrowRightLong className="text-3xl" /></h2>
            </div>
            <div className="h-full w-[85%] flex items-center justify-between overflow-hidden gap-1 object-center">
              <img className="h-full w-1/2 pl-1" src="https://images.pexels.com/photos/14898427/pexels-photo-14898427.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
              <img className="h-full w-1/2" src="https://images.pexels.com/photos/18502146/pexels-photo-18502146/free-photo-of-man-in-tank-top-holding-weight-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>

          </div>
          <div className="h-full w-1/2 text-white flex flex-col pt-5 pl-10 gap-5">
            <h2 className="text-3xl uppercase text-white font-bold">Signature Class</h2>
            <p className="text-md text-neutral-400 font-semibold ">Being physically and mentally fit is necessary to live a happy, long life. Exercise is one of the best ways to keep a person healthy. Hence, it is always best to find a workout routine no matter how busy you are. With the workout. </p>
            <div className="h-14 w-60 mt-5 flex gap-5">
              <div className="h-14 w-14 rounded-full border-green-500 border-3 overflow-hidden object-center cursor-pointer hover:scale-110 ease-in-out duration-300 ">
                <img src="https://images.pexels.com/photos/18502146/pexels-photo-18502146/free-photo-of-man-in-tank-top-holding-weight-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

              </div>
              <div className="h-14 w-14 rounded-full border-white border-3 overflow-hidden object-center cursor-pointer hover:scale-110 ease-in-out duration-300 ">
                <img src="https://images.pexels.com/photos/14898427/pexels-photo-14898427.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />

              </div>
              <div className="h-14 w-14 rounded-full border-white border-3 overflow-hidden object-center cursor-pointer hover:scale-110 ease-in-out duration-300 ">
                <img src="https://images.pexels.com/photos/14762173/pexels-photo-14762173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default OurPrograms