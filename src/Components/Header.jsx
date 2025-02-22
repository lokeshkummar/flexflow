import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { motion } from "motion/react"
import { HiOutlineXCircle } from "react-icons/hi2";

const Header = () => {

    const [isOpen, setisOpen] = useState(false)
    const togglePopover = () => {
        setisOpen(!isOpen)
    }
    console.log(togglePopover);


    return (
        <header className="">
            <div className="mx-auto max-w-screen-xl py-3 sm:py-0 sm:px-6 ">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <h2 className="pl-5 text-3xl md:text-xl font-bold bg-gradient-to-r from-white via-green-600 to-green-500 text-transparent bg-clip-text">
                            FlexFlow
                        </h2>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-10 text-sm text-semibold">
                                <li>
                                    <a className="text-neutral-500 font-bold uppercase transition hover:text-neutral-400" href="#"> Home </a>
                                </li>

                                <li>
                                    <a className="text-neutral-500 font-bold uppercase transition hover:text-neutral-400" href="#"> Programme </a>
                                </li>

                                <li>
                                    <a className="text-neutral-500 font-bold uppercase transition hover:text-neutral-400" href="#"> Blog </a>
                                </li>

                                <li>
                                    <a className="text-neutral-500 font-bold uppercase transition hover:text-neutral-400" href="#"> Contact </a>
                                </li>

                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center">
                        <div className="sm:flex sm:gap-4 hidden md:block">
                            <a
                                className="px-5 py-2.5 text-sm text-neutral-500 hover:text-neutral-400 uppercase font-bold"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                        <div className="block md:hidden">
                            <button
                                onClick={togglePopover}
                                className="rounded-sm pr-3"
                            >
                                <CgMenuRightAlt className="active:scale-70 duration-300 text-green-500" size={40} />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className='fixed right-0 top-0 z-50 pb-5 h-full w-full bg-[#b9b9b924] backdrop-blur-xl text-green-500 flex flex-col '>
                        <HiOutlineXCircle className='absolute right-5 mt-5 text-6xl active:scale-75 ease-linear duration-200' onClick={togglePopover} />
                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className='h-full w-full flex flex-col gap-7 justify-center items-center text-2xl font-bold'>
                            <a className="text-green-500" href="">Home</a>
                            <a className="text-green-500" href="">Programme</a>
                            <a className="text-green-500" href="">Blog</a>
                            <a className="text-green-500" href="">Contact</a>
                        </motion.div>
                    </motion.div>
                )
            }
        </header>

    )
}

export default Header