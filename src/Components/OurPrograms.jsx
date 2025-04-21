import { useState } from "react";

const OurPrograms = () => {
  const Images = {
    boxjumping: {
      title: "Box Jumping",
      description:
        "Box jumping is a powerful plyometric exercise that boosts leg strength, agility, and explosive power. It’s perfect for improving athletic performance and building lower-body endurance.",
      images: [
        "https://images.pexels.com/photos/19254710/pexels-photo-19254710/free-photo-of-a-man-exercising-at-the-gym.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7675414/pexels-photo-7675414.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    cardio: {
      title: "Cardio",
      description:
        "Cardio workouts elevate your heart rate, burn fat, and improve stamina. Whether you’re running, cycling, or dancing, cardio gets your blood pumping and boosts overall health.",
      images: [
        "https://images.pexels.com/photos/4662354/pexels-photo-4662354.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/11175793/pexels-photo-11175793.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    cycling: {
      title: "Cycling",
      description:
        "Indoor or outdoor, cycling is a low-impact way to build strength and endurance. It tones your legs, improves cardiovascular health, and burns calories while being kind on the joints.",
      images: [
        "https://images.pexels.com/photos/13799195/pexels-photo-13799195.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/31457940/pexels-photo-31457940/free-photo-of-professional-cyclist-competing-in-adelaide-race.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    mindandbody: {
      title: "Mind and Body",
      description:
        "Blend movement and mindfulness with exercises that relax your mind and strengthen your body. Yoga, stretching, and breathing techniques help reduce stress and boost flexibility.",
      images: [
        "https://images.pexels.com/photos/6931889/pexels-photo-6931889.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7500028/pexels-photo-7500028.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    signatureclass: {
      title: "Signature Class",
      description:
        "Being physically and mentally fit is necessary to live a happy, long life. Exercise is one of the best ways to keep a person healthy. Hence, it is always best to find a workout routine no matter how busy you are.",
      images: [
        "https://images.pexels.com/photos/14898427/pexels-photo-14898427.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/18502146/pexels-photo-18502146/free-photo-of-man-in-tank-top-holding-weight-at-gym.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
    },
  };

  const [activeKey, setActiveKey] = useState("signatureclass");
  const [loaded, setLoaded] = useState({});
  const current = Images[activeKey];

  const handleTabClick = (key) => {
    setActiveKey(key);
    setLoaded({});
  };

  const handleImageLoad = (index) => {
    setLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const programKeys = {
    "Signature class": "signatureclass",
    Cardio: "cardio",
    Cycling: "cycling",
    "Mind And Body": "mindandbody",
    "Box Jumping": "boxjumping",
  };

  return (
    <div className='min-h-96 w-full px-5 sm:px-10 md:px-32 mb-10 -mt-10 md:mt-38'>
      <h2 className='text-center uppercase text-[28px] sm:text-3xl md:text-5xl font-bold text-white'>
        Our <span className='text-green-500'>special</span> program.
      </h2>

      <ul className='flex flex-wrap justify-center gap-5 sm:gap-10 md:gap-24 items-center text-neutral-500 py-5 text-xs sm:text-sm font-bold uppercase overflow-auto'>
        {Object.keys(programKeys).map((key) => (
          <li
            key={key}
            onClick={() => handleTabClick(programKeys[key])}
            className={`cursor-pointer flex flex-col justify-between hover:text-green-500 ${
              activeKey === programKeys[key] ? "text-green-500" : "text-white"
            }`}
          >
            {key}
            <span
              className={`h-0.5 mt-1 w-5 mx-auto ${
                activeKey === programKeys[key] ? "bg-green-500" : ""
              }`}
            ></span>
          </li>
        ))}
      </ul>

      <div className='h-auto w-full'>
        <div className='flex flex-col md:flex-row gap-5 mt-5'>
          {/* Left Section */}
          <div className='w-full md:w-1/2 flex flex-col sm:flex-row'>
            <div className='h-16 sm:h-full w-full sm:w-[15%] flex items-center justify-center mb-0.5 sm:mr-0.5 bg-white text-black rounded-xl'>
              <h2 className='md:-rotate-90 text-xl md:text-3xl uppercase md:whitespace-nowrap flex justify-center gap-3 items-center font-mono font-bold'>
                {current.title}
              </h2>
            </div>
            <div className='w-full sm:w-[85%] mt-1 md:mt-0 flex items-center justify-between gap-0.5'>
              {current.images.slice(0, 2).map((src, i) => (
                <img
                  key={i}
                  className={`h-64 rounded-xl sm:h-full w-1/2 pl-1 object-cover transition duration-300 ease-in-out ${
                    loaded[i] ? "blur-0" : "blur-md"
                  }`}
                  src={src}
                  alt={`${current.title}-${i}`}
                  loading='lazy'
                  onLoad={() => handleImageLoad(i)}
                />
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className='w-full md:w-1/2 text-white flex flex-col pt-5 sm:pl-5 gap-5'>
            <h2 className='text-2xl sm:text-3xl uppercase font-bold'>
              {current.title}
            </h2>
            <p className='text-md text-neutral-400 font-semibold font-mono '>
              {current.description}
            </p>

            <div className='flex gap-3 sm:gap-5'>
              {current.images.map((src, index) => (
                <div
                  key={index}
                  className='h-14 w-14 rounded-full border-2 border-white overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-300'
                >
                  <img
                    className={`h-full w-full object-cover transition duration-300 ease-in-out ${
                      loaded[index] ? "blur-0" : "blur-sm"
                    }`}
                    src={src}
                    alt={`${current.title}-thumb-${index}`}
                    loading='lazy'
                    onLoad={() => handleImageLoad(index)}
                  />
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
