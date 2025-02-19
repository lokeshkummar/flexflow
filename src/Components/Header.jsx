
const Header = () => {
    return (
        <header className="">
            <div className="mx-auto max-w-screen-xl sm:px-6 ">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <h2 className="pl-5 text-xl font-bold bg-gradient-to-r from-white via-green-600 to-green-500 text-transparent bg-clip-text">
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
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="px-5 py-2.5 text-sm text-neutral-500 hover:text-neutral-400 uppercase font-bold"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                        <div className="block md:hidden">
                            <button
                                className="rounded-sm p-2 text-neutral-600 transition hover:text-neutral-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header