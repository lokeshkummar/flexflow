import { MdArrowOutward } from "react-icons/md";
import heroImg from "../assets/hero_img.png"

const Hero = () => {
    return (
        <>
        <div className='h-screen w-full text-white'>
            <div className='relative w-full'>
                <h1 className='uppercase scale-y-150 md:text-[200px] text-[75px] mt-20 md:-mt-5  font-extrabold text-center text-neutral-300'>FlexFlow</h1>
            </div>
            <div className='h-full w-full absolute z-40 flex justify-center top-24 '>
                <div className='absolute flex flex-col gap-5 md:left-32 left-5 bottom-0 md:bottom-40'>
                    <p className='md:text-sm text-lg font-bold text-neutral-500 '>More Then 500 Fitness Group <br /> Classes Per Month, Find Now Friends <br /> Who Will Motivate Your Fitness Goals. </p>
                    <button className='flex justify-start'>
                        <a href='/' className=' uppercase px-8 font-bold text-md rounded-full py-3 bg-linear-to-r from-green-500 via-green-700 to-green-500 hover:scale-105 ease-linear duration-100 cursor-pointer ' >Free Pass</a>
                    </button>
                    <div className='flex gap-10'>
                        <div>
                            <h2 className='text-4xl font-extrabold'>20<span className='text-green-500'>+</span></h2>
                            <p className='uppercase text-white/70 font-semibold'>More Trainee</p>
                        </div>
                        <div>
                            <h2 className='text-4xl font-extrabold'>30<span className='text-green-500'>+</span></h2>
                            <p className='uppercase text-white/70 font-semibold'>Expert Trainer</p>
                        </div>
                    </div>
                </div>
                <img className=' h-[400px] md:h-[500px] w-[520px] md:mt-12 ' src={heroImg} alt="image" />
                <div className='hidden md:block absolute right-32 bottom-40 rounded-2xl h-52 w-60 border-2 bg-white hover:scale-105 ease-in-out duration-300'>
                    <div className='h-32 overflow-hidden object-cover rounded-2xl m-1 w-[97%]'>
                        <img src="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2016/09/Bodybuilder-Working-Out-His-Upper-Body-With-Cable-Crossover-Exercise.jpg?quality=86&strip=all" alt="" />
                        <span className='absolute right-2 bottom-20 px-4 py-1.5 bg-white text-black font-bold uppercase text-xs rounded-full' >Reminder</span>
                    </div>
                    <h3 className='text-black pl-2 font-bold uppercase text-lg'>Armour</h3>
                    <div className='w-full py-2 text-black/70 px-2 font-bold flex justify-between'>
                        <p>Tomorrow | 5:00 PM </p>
                        <MdArrowOutward className='font-bold bg-green-500 text-white rounded-full p-1 hover:scale-110 ease-linear duration-100 cursor-pointer' size={25} /> 
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute z-50 w-full flex justify-center -mt-[480px] md:-mt-14'>
            <div className='h-full w-[85%] py-8 md:py-5 rounded-xl bg-white flex justify-evenly items-center'>
                <img className='h-5 md:h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" alt="zara logo" />
                <img className='h-5 md:h-12' src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" alt="nike logo" />
                <img className='h-5 md:h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Reebok_2019_logo.svg/2560px-Reebok_2019_logo.svg.png" alt="reebok logo" />
                <img className='h-5 md:h-12' src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png" alt="puma logo" />
                <img className='h-5 md:h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/2560px-Under_armour_logo.svg.png" alt="under armour logo" />
            </div>
        </div>
        </>
    )
}

export default Hero