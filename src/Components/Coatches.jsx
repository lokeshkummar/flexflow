import TiltedCard from "./TitledCard";

const Coatches = () => {
  return (
    <div className='h-auto mx-5 sm:mx-10 md:mx-20 lg:mx-32'>
      <h3 className='uppercase md:text-center sm:text-end text-2xl pl-5 md:pl-0 sm:text-5xl md:text-6xl pb-10 font-bold text-green-500'>
        Our <span className='text-white'>Workout Coaches.</span>
      </h3>

      <div className="flex w-full items-center justify-center">
        <div className="grid w-full gap-5 p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-rows-auto rounded-lg shadow-md">
          {/* Image and Text Blocks */}

          <TiltedCard

            imageSrc="https://images.pexels.com/photos/13197535/pexels-photo-13197535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Coach 4" className="w-full h-full object-cover"

            altText="coatch 1"

            captionText="Yoga Trainer"

            containerHeight="320px"

            containerWidth="320px"

            imageHeight="320px"

            imageWidth="320px"

            rotateAmplitude={12}

            scaleOnHover={1.1}

            showMobileWarning={false}

            showTooltip={true}

            displayOverlayContent={true}

            overlayContent={

              <p className="tilted-card-demo-text">

                More 700 hr

              </p>

            }

          />

          <div className="rounded-2xl shadow-md flex flex-col items-center justify-center p-4 h-80 border border-neutral-700 hover:scale-105 ease-in-out duration-300">
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

          <TiltedCard

            imageSrc="https://images.pexels.com/photos/30672394/pexels-photo-30672394/free-photo-of-man-exercising-with-dumbbells-in-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Coach 4" className="w-full h-full object-cover"

            altText="coatch 2"

            captionText="Fitness Trainer"

            containerHeight="320px"

            containerWidth="320px"

            imageHeight="320px"

            imageWidth="320px"

            rotateAmplitude={12}

            scaleOnHover={1.1}

            showMobileWarning={false}

            showTooltip={true}

            displayOverlayContent={true}

            overlayContent={

              <p className="tilted-card-demo-text">

                More 100 hr

              </p>

            }

          />

          <TiltedCard

            imageSrc="https://images.pexels.com/photos/5769133/pexels-photo-5769133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Coach 4" className="w-full h-full object-cover"

            altText="coatch 3"

            captionText="Fitness Trainer"

            containerHeight="320px"

            containerWidth="320px"

            imageHeight="320px"

            imageWidth="320px"

            rotateAmplitude={12}

            scaleOnHover={1.1}

            showMobileWarning={false}

            showTooltip={true}

            displayOverlayContent={true}

            overlayContent={

              <p className="tilted-card-demo-text">

                More 1120 hr

              </p>

            }

          />

          <TiltedCard

            imageSrc="https://images.pexels.com/photos/29780130/pexels-photo-29780130/free-photo-of-man-lifting-barbell-in-gym-for-strength-training.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Coach 4" className="w-full h-full object-cover"

            altText="coatch 4"

            captionText="Box Jump Trainer"

            containerHeight="320px"

            containerWidth="320px"

            imageHeight="320px"

            imageWidth="320px"

            rotateAmplitude={12}

            scaleOnHover={1.1}

            showMobileWarning={false}

            showTooltip={true}

            displayOverlayContent={true}

            overlayContent={

              <p className="tilted-card-demo-text">

                More 500 hr

              </p>

            }

          />

          <TiltedCard

            imageSrc="https://images.pexels.com/photos/4164758/pexels-photo-4164758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            altText="coatch 5"

            captionText="Fitness Trainer"

            containerHeight="320px"

            containerWidth="320px"

            imageHeight="320px"

            imageWidth="320px"

            rotateAmplitude={12}

            scaleOnHover={1.1}

            showMobileWarning={false}

            showTooltip={true}

            displayOverlayContent={true}

            overlayContent={

              <p className="tilted-card-demo-text">

                More 800 hr

              </p>

            }

          />
        </div>
      </div>
    </div>
  )
}

export default Coatches;
