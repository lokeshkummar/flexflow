import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { motion, AnimatePresence } from "motion/react"
import { HiOutlineXCircle } from "react-icons/hi2";
import { Link, NavLink } from "react-router";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Header = () => {

    const [isOpen, setisOpen] = useState(false)
    const togglePopover = () => {
        setisOpen(!isOpen)
    }
    console.log(togglePopover);


    return (
        <header className="absolute py-5 z-40 w-full">
            <div className="w-full mx-auto max-w-screen-xl sm:py-0 sm:px-6 px-2">
                <div className="flex h-16 items-center justify-between rounded-full bg-black px-1">
                    <div className="md:flex md:items-center md:gap-12 ">
                        <Link to='/' className="pl-5 text-3xl md:text-xl font-bold bg-gradient-to-r from-white via-green-600 to-green-500 text-transparent bg-clip-text">
                            FlexFlow
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className=" flex items-center gap-10 text-sm text-semibold">
                                <NavLink className={({ isActive }) => `font-bold uppercase transition hover:text-green-500 ${isActive ? "text-green-500" : "text-neutral-500"}`} to='/'>
                                    Home
                                </NavLink>
                                <NavLink className={({ isActive }) => `font-bold uppercase transition hover:text-green-500 ${isActive ? "text-green-500" : "text-neutral-500"}`} to='/about'>
                                    About Us
                                </NavLink>
                                <NavLink className={({ isActive }) => `font-bold uppercase transition hover:text-green-500 ${isActive ? "text-green-500" : "text-neutral-500"}`} to='/blogs'>
                                    Blogs
                                </NavLink>
                                <NavLink className={({ isActive }) => `font-bold uppercase transition hover:text-green-500 ${isActive ? "text-green-500" : "text-neutral-500"}`} to='/contact'>
                                    Contact Us
                                </NavLink>

                            </ul>
                        </nav>
                    </div>

                    <div className="flex gap-1 items-center sm:pr-5">
                        <div className="">
                            <ul className='flex gap-1 items-center'>
                                <SignedOut>
                                    <Link to="/sign-in" className="px-3 hover:scale-105 ease-in-out duration-200 py-1.5 rounded-md bg-linear-to-r from-green-500 via-green-500 to-green-700 text-sm font-bold text-white">Sign In</Link>
                                    <Link to="/sign-up" className="px-3 hover:scale-105 ease-in-out duration-200 py-1.5 rounded-md bg-neutral-700 font-bold text-sm text-green-500">Sign Up</Link>
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                            </ul>
                        </div>

                        <div className="md:hidden flex items-center">
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
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className='fixed right-0 top-0 z-50 pb-5 h-full w-full bg-[#b9b9b924] backdrop-blur-xl text-green-500 flex flex-col '>
                            <HiOutlineXCircle className='absolute right-5 mt-5 text-6xl active:scale-75 ease-linear duration-200' onClick={togglePopover} />
                            <div className='h-full uppercase w-full flex flex-col gap-7 justify-center items-center text-2xl font-bold'>
                                <Link to='/' className="text-green-500" href="">Home</Link>
                                <Link to='/about' className="text-green-500" href="">About Us</Link>
                                <Link to='/blogs' className="text-green-500" href="">Blogs</Link>
                                <Link to='/contact' className="text-green-500" href="">Contact</Link>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </header>

    )
}

export default Header