import Layout from "../../app/Layout.tsx";
import Overview from "./components/Overview.tsx";
import ProductView from "./components/ProductView.tsx";
import ProTips from "./components/ProTips.tsx";
import PopularProducts from "./components/PopularProducts.tsx";
import Comments from "./components/Comments.tsx";
import {Link} from "react-router-dom";

function Home(){

    return (
        <>
            <Layout style="dashboard">
                <div className="w-full flex flex-col gap-3">
                    <Overview/>
                    <ProductView/>
                    <ProTips/>
                    <section className="w-full flex flex-col gap-5 bg-white dark:bg-surface-2 p-6 md:px-8 rounded-4xl">
                        <header>
                            <h2 className="font-semibold dark:text-white text-[20px]">Get more customers</h2>
                        </header>
                        <p className="text-sm text-teritary">Fifty percent of new customers explore products because the author shares their work on social media.Start earning now! 🔥</p>
                        <footer className="mt-1">
                            <ul className="w-full flex flex-wrap items-center gap-3">
                                <li className="border border-[rgba(226,226,226,1)] dark:border-[rgba(40,40,40,1)] rounded-4xl py-3 px-6">
                                    <a>
                                        <svg className="w-6 h-6"> <use href="#x"></use> </svg>
                                    </a>
                                </li>
                                <li className="border border-[rgba(226,226,226,1)] dark:border-[rgba(40,40,40,1)] rounded-4xl py-3 px-6">
                                    <a>
                                        <svg className="w-6 h-6"> <use href="#facebook"></use> </svg>
                                    </a>
                                </li>
                                <li className="border border-[rgba(226,226,226,1)] dark:border-[rgba(40,40,40,1)] rounded-4xl py-3 px-6">
                                    <a>
                                        <svg className="w-6 h-6"> <use href="#instagram"></use> </svg>
                                    </a>
                                </li>
                                <li className="border border-[rgba(226,226,226,1)] dark:border-[rgba(40,40,40,1)] rounded-4xl py-3 px-6">
                                    <a>
                                        <svg className="w-6 h-6"> <use href="#threads"></use> </svg>
                                    </a>
                                </li>
                            </ul>
                        </footer>
                    </section>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <PopularProducts/>
                    <Comments/>
                    <section className="w-full flex flex-col gap-5 bg-white dark:bg-surface-2 p-6 md:px-8 rounded-4xl">
                        <header>
                            <h2 className="text-[20px] font-semibold dark:text-white">Refund requests</h2>
                        </header>
                        <div className="flex items-center gap-4">
                            <img src="icons/bag.svg" alt="" loading="lazy" className="w-16 h-16"/>
                            <p className="text-sm tracking-tight text-teritary leading-7">You have <span className="text-black dark:text-white font-semibold">52 open refund requests</span> to action. This includes <span className="text-black dark:text-white font-semibold">8 new requests</span>. 👀</p>
                        </div>

                        <Link to="#" className="border border-[rgba(226,226,226,1)] dark:border-[rgba(40,40,40,1)] rounded-4xl py-4 text-sm text-center font-semibold text-teritary my-1">View all</Link>

                    </section>
                </div>
            </Layout>
        </>
    )
}
export default Home;