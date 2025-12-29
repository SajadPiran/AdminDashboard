import { useEffect, useState } from "react";

type Theme = 'light' | 'dark';
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

function useTheme() : [theme : Theme , toggleTheme : () => void] {
    const [theme, setTheme] = useState<Theme>( () : Theme =>  {
        if(null === localStorage.getItem('theme')) {
            return systemTheme ? 'dark' : 'light';
        }
        return localStorage.getItem('theme') as Theme;
    });

    useEffect( () => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark' , 'dark' === theme);
    }, [theme] );

    const toggleTheme = () => {
        setTheme( (prev) => (prev === "light" ? "dark" : "light") );
    };

    return [theme, toggleTheme];
}
export default useTheme;