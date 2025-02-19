
const OurPrograms = () => {
  return (
    <div className='min-h-96 w-full md:px-32 md:py-20 -mt-24 md:-mt-0'>
      <h2 className='md:text-center pl-5 md:pl-0 uppercase text-2xl pt-5 md:pt-0 md:text-5xl font-bold text-white'>Our <span className='text-green-500'>special</span> program.</h2>
      <ul className='flex justify-center gap-10 md:gap-24 items-center text-neutral-500 py-5 text-xs md:text-sm font-bold uppercase overflow-scroll pl-10 md:pl-0 '>
        <li className='hover:text-neutral-400 cursor-pointer'>All</li>
        <li className='hover:text-neutral-400 cursor-pointer'>Signature class</li>
        <li className='hover:text-neutral-400 cursor-pointer'>Cardio</li>
        <li className='hover:text-neutral-400 cursor-pointer'>Cycling</li>
        <li className='hover:text-neutral-400 cursor-pointer'>Mind And Body</li>
      </ul>
      
    </div>
  )
}

export default OurPrograms