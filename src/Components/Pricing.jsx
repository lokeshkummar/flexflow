
const Pricing = () => {
  return (
    <div className='md:my-20 mt-10 md:mt-0'>
      <h3 className='uppercase pl-5 md:pl-0 md:text-center text-2xl md:text-6xl md:py-10 font-bold text-green-500'>Join <span className='text-white'>Our Membership.</span></h3>
      <div className='w-full my-10 flex justify-center items-center flex-col md:flex-row gap-10 md:gap-20'>
        <div className='h-96 w-80 rounded-2xl bg-neutral-900 p-10 hover:scale-110 ease-in-out duration-300'>
          <div className='border-b border-neutral-600 pb-3'>
            <span className='text-md text-green-500'>Weekly Plan</span>
            <h2 className='text-white text-5xl font-bold'>$80</h2>
          </div>
          <div>
            <ul className='text-white pt-5 leading-relaxed'>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-green-500 rounded-full'></span> Free Consulting</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-green-500 rounded-full'></span> 3 Hour Personal Training</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-green-500 rounded-full'></span> Exercise Program</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-green-500 rounded-full'></span> Normal Workout</li>

            </ul>
          </div>
          <button className='mt-20 hover:scale-105 ease-in-out duration-300'>
            <a href="" className='px-6 py-3 rounded-full bg-green-500 text-white font-bold uppercase '>Join Now</a>
          </button>

        </div>

        <div className='h-96 w-80 scale-105 rounded-2xl bg-green-500 p-7 hover:scale-110 ease-in-out duration-300'>
        <div className='border-b border-neutral-600 pb-3'>
            <span className='text-md text-white'>Yearly Plan</span>
            <h2 className='text-white text-5xl font-bold'>$120</h2>
          </div>
          <div>
            <ul className='text-white pt-5 leading-relaxed'>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-white rounded-full'></span> Free Consulting</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-white rounded-full'></span> 3 Hour Personal Training</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-white rounded-full'></span> Exercise Program</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-white rounded-full'></span> Normal Workout</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-white rounded-full'></span> Highest Level Workout</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-white rounded-full'></span> Extra Care of Health</li>

            </ul>
          </div>
          <button className='mt-7 hover:scale-105 ease-in-out duration-300'>
            <a href="" className='px-6 py-3 rounded-full bg-white text-green-500 font-bold uppercase'>Join Now</a>
          </button>
        </div>

        <div className='h-96 w-80 rounded-2xl bg-neutral-900 p-10 hover:scale-110 ease-in-out duration-300'>
          <div className='border-b border-neutral-600 pb-3'>
            <span className='text-md text-green-500'>Yearly Plan</span>
            <h2 className='text-white text-5xl font-bold'>$320</h2>
          </div>
          <div>
            <ul className='text-white pt-5 leading-relaxed'>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-green-500 rounded-full'></span> Free Consulting</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-green-500 rounded-full'></span> 15 Hour Personal Training</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-green-500 rounded-full'></span> Personalised Exercise Program</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-green-500 rounded-full'></span> Normal Workout</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-green-500 rounded-full'></span> Pro Level Workout</li>
              <li className='flex gap-2 items-center'> <span className='h-2 w-2 bg-green-500 rounded-full'></span> Extra Care of Health</li>

            </ul>
          </div>
          <button className='mt-7 hover:scale-105 ease-in-out duration-300'>
            <a href="" className='px-6 py-3 rounded-full bg-green-500 text-white font-bold uppercase'>Join Now</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing