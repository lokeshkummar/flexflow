import { FaArrowRightLong } from "react-icons/fa6";

const OurPrograms = () => {
  return (
    <div className='min-h-96 w-full px-5 sm:px-10 md:px-32 -mt-20 mb-10 md:mt-20'>
      <h2 className='text-center uppercase text-[28px] sm:text-3xl md:text-5xl font-bold text-white'>Our <span className='text-green-500'>special</span> program.</h2>

      <ul className='flex flex-wrap justify-center gap-5 sm:gap-10 md:gap-24 items-center text-neutral-500 py-5 text-xs sm:text-sm font-bold uppercase overflow-auto'>
        <li className='hover:text-neutral-400 cursor-pointer flex flex-col justify-between'>All
          <span className='h-0.5 mt-1 w-6'></span>
        </li>
        <li className='hover:text-neutral-400 cursor-pointer'>Signature class</li>
        <li className='hover:text-neutral-400 cursor-pointer'>Cardio</li>
        <li className='hover:text-neutral-400 cursor-pointer'>Cycling</li>
        <li className='hover:text-neutral-400 cursor-pointer'>Mind And Body</li>
      </ul>

      <div className='h-auto w-full'>
        <div className='flex flex-col md:flex-row gap-5 mt-5'>
          {/* Left Section */}
          <div className='w-full md:w-1/2 flex flex-col sm:flex-row'>
            <div className='h-16 sm:h-full w-full sm:w-[15%] flex items-center justify-center bg-white text-black rounded-xl'>
              <h2 className="md:-rotate-90 text-xl md:text-3xl uppercase md:whitespace-nowrap flex justify-center gap-3 items-center font-semibold">Mind and Body <FaArrowRightLong className="text-3xl" /></h2>            </div>
            <div className='w-full sm:w-[85%] mt-1 md:mt-0 flex items-center justify-between gap-1'>
              <img className='h-64 rounded-xl sm:rounded-none sm:h-full w-1/2 pl-1' src='https://images.pexels.com/photos/14898427/pexels-photo-14898427.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt='' />
              <img className='h-64 rounded-xl sm:rounded-none sm:h-full w-1/2' src='https://images.pexels.com/photos/18502146/pexels-photo-18502146/free-photo-of-man-in-tank-top-holding-weight-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
            </div>
          </div>

          {/* Right Section */}
          <div className='w-full md:w-1/2 text-white flex flex-col pt-5 sm:pl-5 gap-5'>
            <h2 className='text-2xl sm:text-3xl uppercase text-white font-bold'>Signature Class</h2>
            <p className='text-md text-neutral-400 font-semibold'>Being physically and mentally fit is necessary to live a happy, long life. Exercise is one of the best ways to keep a person healthy. Hence, it is always best to find a workout routine no matter how busy you are.</p>

            <div className='flex gap-3 sm:gap-5'>
              {[
                "https://images.pexels.com/photos/14898427/pexels-photo-14898427.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
                "https://images.pexels.com/photos/18502146/pexels-photo-18502146/free-photo-of-man-in-tank-top-holding-weight-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "https://images.pexels.com/photos/14762173/pexels-photo-14762173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"].map((src, index) => (
                  <div key={index} className='h-14 w-14 rounded-full border-2 border-white overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-300'>
                    <img className='h-full w-full object-center' src={src} alt='' />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
