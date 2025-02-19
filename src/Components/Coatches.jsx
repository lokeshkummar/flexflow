const Coatches = () => {
  return (
    <div className='h-auto mx-5 sm:mx-10 md:mx-20 lg:mx-32'>
      <h3 className='uppercase md:text-center sm:text-end text-2xl pl-5 md:pl-0 sm:text-5xl md:text-6xl pb-10 font-bold text-green-500'>
        Our <span className='text-white'>Workout Coaches.</span>
      </h3>

      <div className="flex w-full items-center justify-center">
        <div className="grid w-full gap-4 p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-rows-auto rounded-lg shadow-md">
          {/* Image and Text Blocks */}
          <div className="bg-gray-200 rounded-2xl shadow-md flex items-center justify-center overflow-hidden h-80">
            <img src="https://images.pexels.com/photos/13197535/pexels-photo-13197535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Coach 1" className="w-full h-full object-cover" />
          </div>

          <div className="rounded-2xl shadow-md flex flex-col items-center justify-center p-4 h-80 border border-neutral-700 ">
            <h3 className='text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-green-400 via-green-500 to-green-700 text-transparent bg-clip-text'>
              Have 150+
            </h3>
            <p className='text-center text-2xl sm:text-xl md:text-2xl font-semibold text-white leading-tight pt-3 pb-8'>
              Professional Trainer and type of exercises.
            </p>
            <button>
              <a className='px-6 border sm:px-8 py-3 uppercase rounded-full text-white hover:bg-neutral-800 transition duration-200' href="#">
                See More
              </a>
            </button>
          </div>

          <div className="bg-gray-200 rounded-2xl shadow-md flex items-center justify-center overflow-hidden h-80">
            <img src="https://images.pexels.com/photos/30672394/pexels-photo-30672394/free-photo-of-man-exercising-with-dumbbells-in-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Coach 2" className="w-full h-full object-cover" />
          </div>

          <div className="bg-gray-200 rounded-2xl shadow-md flex items-center justify-center overflow-hidden h-80">
            <img src="https://images.pexels.com/photos/5769133/pexels-photo-5769133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Coach 3" className="w-full h-full object-cover" />
          </div>

          <div className="bg-gray-200 rounded-2xl shadow-md flex items-center justify-center overflow-hidden h-80">
            <img src="https://images.pexels.com/photos/29780130/pexels-photo-29780130/free-photo-of-man-lifting-barbell-in-gym-for-strength-training.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Coach 4" className="w-full h-full object-cover" />
          </div>

          <div className="bg-gray-200 rounded-2xl shadow-md flex items-center justify-center overflow-hidden h-80">
            <img src="https://images.pexels.com/photos/4164758/pexels-photo-4164758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Coach 5" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coatches;
