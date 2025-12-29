import useTheme from "../hooks/useTheme.tsx";

function Header(){

    const [theme , toggleTheme] = useTheme();

    return (
        <section className="w-full flex items-center justify-between">

            <img src="icons/logo.png" alt="" loading="lazy" className="lg:hidden w-12 h-12"/>
            <h1 className="hidden lg:block text-3xl font-semibold dark:text-white">Dashboard</h1>

            {/* Buttons */}
            <div className="flex items-center gap-3">

                <button type="button" className="hidden lg:flex text-sm font-semibold text-white dark:text-black justify-center items-center rounded-full bg-black dark:bg-white py-4 px-7 overflow-hidden cursor-pointer">
                    Create
                </button>
                <button type="button" className="w-12 h-12 flex justify-center items-center rounded-full bg-white dark:bg-dark-black p-3 overflow-hidden cursor-pointer">
                    <svg className="w-full h-full"> <use href="#bell"></use> </svg>
                </button>
                <button type="button" className="w-12 h-12 flex justify-center items-center rounded-full bg-white dark:bg-dark-black p-3 overflow-hidden cursor-pointer">
                    <svg className="w-full h-full"> <use href="#message"></use> </svg>
                </button>
                <button type="button" className="flex lg:hidden justify-center items-center gap-4 rounded-full bg-white dark:bg-dark-black p-3 overflow-hidden cursor-pointer" onClick={toggleTheme}>
                    <div className={`p-1 rounded-full${'dark' === theme ? ' bg-primary-white dark:bg-[rgba(54,54,54,1)]' : ''}`}>
                        <svg className="w-4 h-4 dark:stroke-white"> <use href="#moon"></use> </svg>
                    </div>
                    <div className={`p-1 rounded-full${'light' === theme ? ' bg-primary-white dark:bg-[rgba(54,54,54,1)]' : ''}`}>
                        <svg className="w-4 h-4"> <use href="#sun"></use> </svg>
                    </div>
                </button>

                {/* Profile */}
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white dark:bg-[rgba(25,25,25,1)] p-1 overflow-hidden cursor-pointer">
                    <img src="images/users/25303b0e813ca6782c1e81ba6950364bd2acba7b.jpg" alt="" className="w-full h-full" loading="lazy"/>
                </div>

            </div>

        </section>
    )
}
export default Header;