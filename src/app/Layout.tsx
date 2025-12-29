import type {ReactNode} from "react";
import Header from "../components/Header.tsx";
import Aside from "../components/Aside.tsx";
import clsx from "clsx";

function Layout( {children , style } : { children : ReactNode , style ?: string } ) {
    return (
        <main className="w-full flex justify-center flex-row-reverse gap-8 padding-x my-8">
            <section className="container flex flex-col gap-5">
                <Header/>
                <div className={clsx('w-full grid grid-cols-1 gap-5' , style)}>
                    {children}
                </div>
            </section>
            <Aside/>
        </main>
    )
}
export default Layout;