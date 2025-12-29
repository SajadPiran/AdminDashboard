import { useMemo, useState } from "react";
import clsx from "clsx";

const ITEM_WIDTH = 224; // 208 + gap(16)
type Tip = {
    id: number;
    title: string;
    icon: string;
    avatar: string;
    badge?: "new" | "hot";
    readTime: string;
};
const tips: Tip[] = [
    {
        id: 1,
        title: "Early access",
        icon: "icons/calendar.svg",
        avatar: "avatars/avatar-1.jpg",
        badge: "new",
        readTime: "3 mins read",
    },
    {
        id: 2,
        title: "Access use guidelines",
        icon: "icons/income.svg",
        avatar: "avatars/avatar-2.png",
        badge: "hot",
        readTime: "3 mins read",
    },
    {
        id: 3,
        title: "Exclusive downloads",
        icon: "icons/download.svg",
        avatar: "avatars/avatar-3.png",
        badge: "new",
        readTime: "3 mins read",
    },
    {
        id: 4,
        title: "Life & work updates",
        icon: "icons/success.svg",
        avatar: "avatars/avatar-4.png",
        badge: "new",
        readTime: "3 mins read",
    },
    {
        id: 5,
        title: "Early access",
        icon: "icons/calendar.svg",
        avatar: "avatars/avatar-1.jpg",
        badge: "new",
        readTime: "3 mins read",
    },
    {
        id: 6,
        title: "Access use guidelines",
        icon: "icons/income.svg",
        avatar: "avatars/avatar-2.png",
        badge: "hot",
        readTime: "3 mins read",
    },
    {
        id: 7,
        title: "Exclusive downloads",
        icon: "icons/download.svg",
        avatar: "avatars/avatar-3.png",
        badge: "new",
        readTime: "3 mins read",
    },
    {
        id: 8,
        title: "Life & work updates",
        icon: "icons/success.svg",
        avatar: "avatars/avatar-4.png",
        badge: "new",
        readTime: "3 mins read",
    },
];

function ProTips() {
    const [index, setIndex] = useState(0);

    const lastIndex = tips.length - 1;
    const canPrev = index > 0;
    const canNext = index < lastIndex;

    const sliderStyle = useMemo(
        () => ( {transform: `translateX(-${index * (ITEM_WIDTH)}px)`} ),
        [index]
    );

    const slideNext = () => {
        if (canNext) setIndex((i) => i + 1);
    };

    const slidePrev = () => {
        if (canPrev) setIndex((i) => i - 1);
    };

    return (
        <section className="w-full flex flex-col gap-4 bg-white dark:bg-surface-2 p-6 md:px-8 rounded-4xl">
            <header className="w-full flex items-center justify-between gap-18">
                <h2 className="text-[20px] font-semibold dark:text-white">Pro tips</h2>

                <div className="flex items-center gap-1">
                    <button type="button" onClick={slidePrev} disabled={!canPrev}
                        className={
                            clsx('w-12 h-12 flex justify-center items-center rounded-full transition' ,
                            {'border-2 button--active cursor-pointer': canPrev , 'opacity-40 cursor-not-allowed' : !canPrev})
                        } >
                        <svg className="w-6 h-6 rotate-90">
                            <use href="#arrow-2" />
                        </svg>
                    </button>

                    <button type="button" onClick={slideNext} disabled={!canNext}
                        className={
                            clsx('w-12 h-12 flex justify-center items-center rounded-full transition' ,
                            {'border-2 button--active cursor-pointer': canNext , 'opacity-40 cursor-not-allowed' : !canNext})
                        } >
                        <svg className="w-6 h-6 -rotate-90">
                            <use href="#arrow-2" />
                        </svg>
                    </button>
                </div>
            </header>

            <div className="w-full xl:max-w-[calc(100%-100px)] overflow-hidden relative fade-slider">
                <ul className="flex gap-4 transition-transform duration-300 ease-in-out" style={sliderStyle}>
                    {tips.map((tip) => (
                        <li key={tip.id}>
                            <article key={tip.id} className="w-52 h-60 flex shrink-0 flex-col bg-[rgba(249,249,249,1)] dark:bg-[rgba(34,34,34,1)] p-5 border border-[rgba(123,123,123,0.1)] rounded-4xl">
                                <img src={tip.icon} alt="" className="w-16 h-16 mb-auto"/>

                                <h3 className="font-semibold dark:text-white hide-text">{tip.title}</h3>
                                <div className="flex items-center justify-between gap-2 mt-2">
                                    <div className="flex items-center gap-2">
                                        <img src={tip.avatar} alt="" className="w-5 h-5 rounded-full"/>
                                        <time className="text-xs text-teritary">{tip.readTime}</time>
                                    </div>
                                    {tip.badge && (
                                        <span className={clsx('text-xs' , {'new-badge' : 'new' == tip.badge , 'hot-badge' : 'hot' == tip.badge })}>{tip.badge}</span>
                                    )}
                                </div>

                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default ProTips;
