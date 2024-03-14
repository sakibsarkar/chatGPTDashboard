"use client";
import { useContext } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { StateContext } from "@/providers/ContextProvider";

const Header = () => {

    const { showSidebar, setShowSideBar } = useContext(StateContext)

    const handleToggle = () => {
        return setShowSideBar(!showSidebar)
    }

    return (
        <header className="w-full">
            <div className="w-full h-[62px] flex justify-between sm:justify-start items-center text-white p-[8px]">
                <button className="sm:hidden text-[25px]" onClick={handleToggle}><HiMenuAlt1 /></button>
                <h1 className="px-[8px] py-[12px] hover:bg-[#8c8c8c46] rounded-lg cursor-pointer">ChatGPT 3.5</h1>
            </div>
        </header>
    );
};

export default Header;