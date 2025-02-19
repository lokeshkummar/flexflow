
const OurPrograms = () => {
  return (
    <div className='min-h-96 w-full px-32 py-20'>
      <h2 className='text-center uppercase text-5xl font-bold text-white'>Our <span className='text-green-500'>special</span> program.</h2>
      <ul className='flex justify-center gap-24 items-center text-neutral-500 py-5 text-sm font-bold uppercase '>
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