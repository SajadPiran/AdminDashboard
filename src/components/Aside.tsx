import {Link} from "react-router-dom";
import useTheme from "../hooks/useTheme.tsx";

function Aside(){

    const [theme , toggleTheme] = useTheme();
    const currentUrl = window.location.pathname;
    const links : Array< { url : string , icon : string } > = [
        { url : '/' , icon : 'dashboard' },
    ];

    return(
        <aside className="h-[calc(100dvh-50px)] hidden lg:flex flex-col items-start gap-6 px-[3px] sticky top-4 overflow-y-scroll group hover:w-[300px]" id="sidebar">
            <img src="icons/logo.png" alt="" loading="lazy" className="w-12 h-12"/>
            <nav className="w-full">
                <ul className="w-full flex flex-col gap-4">
                    {links.map( ( link , index) => (
                        <li key={`nav-link-${index}`} className={`w-fit group-hover:w-full p-3 rounded-xl cursor-pointer${currentUrl === link.url ? ' aside--active' : ''}`}>
                            <Link to={`${link.url}`} className="w-full flex items-center">
                                <svg className="w-6 h-6"><use href={`#${link.icon}`}></use></svg>
                                <p className="hidden text-sm font-semibold dark:text-white group-hover:block group-hover:pl-4">Dashboard</p>
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>
            <button type="button" className="min-h-28 flex flex-col justify-center items-center gap-4 rounded-full bg-white dark:bg-dark-black p-3 overflow-hidden cursor-pointer mt-auto" onClick={toggleTheme}>
                <div className={`p-2.5 rounded-full${'dark' === theme ? ' bg-primary-white dark:bg-[rgba(54,54,54,1)]' : ''}`}>
                    <svg className="w-4 h-4 dark:stroke-white"> <use href="#moon"></use> </svg>
                </div>
                <div className={`p-2.5 rounded-full${'light' === theme ? ' bg-primary-white dark:bg-[rgba(54,54,54,1)]' : ''}`}>
                    <svg className="w-4 h-4"> <use href="#sun"></use> </svg>
                </div>
            </button>
        </aside>
    )
}
export default Aside;