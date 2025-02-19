import { TiTick } from "react-icons/ti";

const WhyChooseUs = () => {
  return (
    <div className='my-20 px-32'>
      <h2 className='text-6xl font-bold text-white uppercase' >Why <span className='text-green-500'>should</span> people choose <br /> flexflow services </h2>
      <div className='h-[450px]  w-full flex'>
        <div className='w-[60%] pt-14 flex flex-col gap-5'>
          <div>
            <div className='flex items-center gap-3'>
              <span className='bg-green-500 text-white h-5 w-5 rounded-full'><TiTick size={20} /></span>
              <h2 className='text-white uppercase text-xl font-bold'>Personal Training</h2>
            </div>
            <p className='pl-8 pt-2 text-neutral-500 font-semibold text-sm '>Being physically and mentally fit is necessary to live <br /> happy, long life. Exercise is one of the best.</p>

          </div>


          <div>
            <div className='flex items-center gap-3'>
              <span className='bg-green-500 text-white h-5 w-5 rounded-full'><TiTick size={20} /></span>
              <h2 className='text-white uppercase text-xl font-bold'>Expert Trainer</h2>
            </div>
            <p className='pl-8 pt-2 text-neutral-500 font-semibold text-sm '>Being physically and mentally fit is necessary to live <br /> happy, long life. Exercise is one of the best.</p>
          </div>


          <div>
            <div className='flex items-center gap-3'>
              <span className='bg-green-500 text-white h-5 w-5 rounded-full'><TiTick size={20} /></span>
              <h2 className='text-white uppercase text-xl font-bold'>Flexible Timing</h2>
            </div>
            <p className='pl-8 pt-2 text-neutral-500 font-semibold text-sm '>Being physically and mentally fit is necessary to live <br /> happy, long life. Exercise is one of the best.</p>
          </div>

          <button className='flex justify-start'>
            <a href='/' className=' mt-5 uppercase px-8 font-bold text-md rounded-full py-3 bg-linear-to-r from-green-500 via-green-700 to-green-500 hover:scale-105 ease-linear duration-100 cursor-pointer text-white ' >Join Today</a>
          </button>

        </div>
        <div className='w-[40%] overflow-hidden object-center '>
          <img className="scale-110" src="https://images.pexels.com/photos/29825224/pexels-photo-29825224/free-photo-of-muscular-man-lifting-weights-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs