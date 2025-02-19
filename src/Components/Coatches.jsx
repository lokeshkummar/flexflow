
const Coatches = () => {
  return (
    <div className='h-screen mt-10 mb-28 mx-32'>
      <h3 className='uppercase text-end text-6xl pb-10 font-bold text-green-500'>Our <span className='text-white'>Workout Coatches.</span></h3>

      <div className="flex h-full w-full items-center justify-center">
        <div className="grid h-full w-full gap-4  p-2 grid-cols-3 grid-rows-2 rounded-lg shadow-md">

          <div
            className="col-span-1 row-span-1 bg-gray-200 rounded-lg shadow-md flex items-center justify-center overflow-hidden"
          >
            <img src="https://images.pexels.com/photos/13197535/pexels-photo-13197535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>

          <div
            className="col-span-1 row-span-1 rounded-lg shadow-md flex flex-col items-center justify-center"
          >
            <h3 className='text-5xl font-extrabold bg-gradient-to-b from-green-400 via-green-500 to-green-700 text-transparent bg-clip-text'>Have 150+</h3>
            <p className='text-center text-2xl font-semibold text-white leading-tight pt-3 pb-8'>Professional Trainer and <br /> type of exercises.</p>
            <button>
              <a className='px-8 py-3 uppercase border-2 border-white rounded-full text-white bordre-white hover:bg-neutral-800 ease-in-out duration-200' href="">See More</a>
            </button>
          </div>

          <div
            className="col-span-1 row-span-1 bg-gray-200 rounded-lg shadow-md flex items-center justify-center overflow-hidden"
          >
            <img src="https://images.pexels.com/photos/30672394/pexels-photo-30672394/free-photo-of-man-exercising-with-dumbbells-in-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>

          <div
            className="col-span-1 row-span-1 bg-gray-200 rounded-lg shadow-md flex items-center justify-center overflow-hidden "
          >
            <img src="https://images.pexels.com/photos/5769133/pexels-photo-5769133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>

          <div
            className="col-span-1 row-span-1 bg-gray-200 rounded-lg shadow-md flex items-center justify-center overflow-hidden"
          >
            <img src="https://images.pexels.com/photos/29780130/pexels-photo-29780130/free-photo-of-man-lifting-barbell-in-gym-for-strength-training.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>

          <div
            className="col-span-1 row-span-1 bg-gray-200 rounded-lg shadow-md flex items-center justify-center overflow-hidden"
          >
            <img src="https://images.pexels.com/photos/4164758/pexels-photo-4164758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Coatches