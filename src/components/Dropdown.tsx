import {useRef} from "react";
import clsx from "clsx";

type DropdownItem = {
    title : string
}
type DropdownProps = {
    items : Array<DropdownItem>,
    onChange ?: (item : DropdownItem) => void,
}

function Dropdown( {items , onChange} : DropdownProps ){

    const dropdownRef = useRef<HTMLDivElement>(null);
    const showDropdown = () => {
        if(dropdownRef.current){
            const dropdownHeight = dropdownRef.current.scrollHeight;
            if(dropdownRef.current.style.height){
                dropdownRef.current.removeAttribute('style');
            }else{
                dropdownRef.current.style.height = `${dropdownHeight}px`;
            }
        }
    }

    return (
        <div className="w-full max-w-[160px] flex py-3.5 px-5 border border-[rgba(226,226,226,1)] dark:border-[rgba(40,40,40,1)] rounded-full relative cursor-pointer" onClick={showDropdown}>

            {/* Title */}
            <button className="w-full flex items-center justify-between cursor-pointer">
                <p className="text-sm text-teritary">{items[0].title}</p>
                <svg className="w-6 h-6"><use href="#arrow"></use></svg>
            </button>

            {/* Dropdown */}
            <div className="w-full flex flex-col h-0 bg-[rgba(249,249,249,1)] dark:bg-surface-2 rounded-2xl overflow-hidden absolute right-0 top-16 z-10 shadow-xl" data-type="dropdown" ref={dropdownRef}>
                <ul>
                    {items.map( (item , index) => (
                        <li key={item.title} className={clsx('w-full p-4 text-sm font-medium dark:text-white'
                            , { 'border-b border-b-[rgba(226,226,226,1)] dark:border-b-[rgba(40,40,40,1)]' : items.length -1 > index } )}
                            onClick={() => { if(onChange) onChange(item)} }
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}
export type {DropdownProps , DropdownItem};
export default Dropdown;