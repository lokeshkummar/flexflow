import { TiTick } from "react-icons/ti";

const WhyChooseUs = () => {
  return (
    <div className='md:my-20 -mb-10 md:px-32'>
      <h2 className='text-2xl pl-5 md:pl-0 md:text-6xl font-bold text-white uppercase' >Why <span className='text-green-500'>should</span> people choose <br /> flexflow services </h2>
      <div className='h-[450px] w-full flex flex-col md:flex-row'>
        <div className='md:w-[60%] w-full pt-8 sm:pt-14 flex flex-col gap-5 md:pl-0 pl-5'>
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

          <button className='flex justify-start md:pl-0 pl-5'>
            <a href='/' className=' md:mt-5 uppercase px-8 font-bold text-md rounded-full py-3 bg-linear-to-r from-green-500 via-green-700 to-green-500 hover:scale-105 ease-linear duration-100 cursor-pointer text-white ' >Join Today</a>
          </button>

        </div>
        <div className='hidden md:block md:w-[40%] overflow-hidden object-center '>
          <img className="scale-110" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dhKlXej4pe0mBK4Y-3U3uQ.jpeg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs