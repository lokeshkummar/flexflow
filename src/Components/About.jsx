import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controlsText = useAnimation();
  const controlsImages = useAnimation();
  const [refText, inViewText] = useInView({ threshold: 0.3, triggerOnce: true });
  const [refImages, inViewImages] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inViewText) {
      controlsText.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      });
    }
    if (inViewImages) {
      controlsImages.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, staggerChildren: 0.2 }
      });
    }
  }, [controlsText, controlsImages, inViewText, inViewImages]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-green-500 to-black px-4 md:px-8 lg:px-16 py-16 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-green-400 rounded-full opacity-50 blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-black rounded-full opacity-50 blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto mt-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content Side */}
          <motion.div 
            ref={refText}
            initial="hidden"
            animate={controlsText}
            variants={textVariants}
            className="lg:w-1/2 space-y-4 z-10"
          >
            <h2 className="text-6xl md:text-5xl font-bold font-mono text-white">About Us</h2>
            <h3 className="text-xl md:text-4xl font-semibold text-white font-mono">
              A New Way Of Training For Fitness Enthusiasts.
            </h3>
            
            <div className="space-y-3 text-white/70 text-sm font-mono">
              <p>
                At FlexFlow Gym, we've reimagined what a fitness experience should be, combining cutting-edge equipment with personalized coaching and a supportive community atmosphere.
              </p>
              
              <p>
                Founded in 2020, our mission has been to create a welcoming environment where people of all fitness levels can thrive and achieve their personal goals without intimidation.
              </p>
              
              <p>
                With state-of-the-art facilities and expert trainers dedicated to your progress, we focus on sustainable fitness journeys rather than quick fixes or temporary results.
              </p>
            </div>
          </motion.div>
          
          {/* Image Gallery Side */}
          <motion.div 
            ref={refImages}
            animate={controlsImages}
            variants={imageVariants}
            className="lg:w-1/2 grid grid-cols-3 gap-3 h-96 z-10"
          >
            <motion.div
              variants={imageVariants} 
              className="col-span-1 h-full rounded-xl overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/20340491/pexels-photo-20340491/free-photo-of-blonde-woman-with-kettlebell-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Gym equipment" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              variants={imageVariants}
              className="col-span-1 h-full space-y-3"
            >
              <div className="h-1/3 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8436767/pexels-photo-8436767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Group fitness class" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-2/3 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Personal training" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              variants={imageVariants}
              className="col-span-1 h-full rounded-xl overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/13106586/pexels-photo-13106586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Gym facilities" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;