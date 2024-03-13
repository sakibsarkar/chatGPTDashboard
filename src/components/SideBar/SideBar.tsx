import Link from "next/link";
import { FaPenToSquare } from "react-icons/fa6";
import { chatTitles } from "@/utils/mock/chatTitles";

const SideBar = () => {
    return (
        <div className="sm:max-w-[260px] p-[15px] h-screen bg-[#171717] text-white ">
            <nav className="h-full">
                <div className="flex flex-col items-center justify-between w-full h-full gap-[25px]">

                    {/* side bar top section */}
                    <div className="flex items-center justify-between w-full py-[8px] px-[4px] hover:bg-[#bebebe6a] rounded-lg">

                        <div className="flex justify-center items-center gap-[5px]">
                            <div className="w-[28px] h-[28px] overflow-hidden rounded-full bg-slate-300">
                            </div>
                            <h2>New chat</h2>
                        </div>

                        <FaPenToSquare />
                    </div>

                    {/* chat history section */}
                    <div className="w-full h-full flex flex-col gap-[10px] overflow-y-auto smoothBar">
                        {
                            chatTitles.map((chat, i) => <Link
                                key={i}
                                href={"/"}
                                className="w-full text-[14px] px-[8px] py-[8px] hover:bg-[#8b8b8ba2] rounded-lg"
                            >
                                {chat}
                            </Link>)
                        }
                    </div>


                    {/* sidebar bottom section */}

                    <div className="flex flex-col w-full">

                        {/* 1 */}
                        <div className="flex gap-[10px] items-center justify-start px-[12px] py-[8px]">
                            <div className="w-[28px] h-[28px] rounded-full bg-slate-300"></div>
                            <div>
                                <h3 className="text-[14px]">Uprage Plan</h3>
                                <p className="text-[#484848] text-[12px]">Get chat gpt  4.0, Dall.e and ...</p>

                            </div>
                        </div>

                        {/* 2 */}
                        <div className="flex gap-[10px] items-center justify-start px-[12px] py-[8px]">
                            <div className="w-[28px] h-[28px] rounded-full bg-slate-300"></div>

                            <h3 className="text-[14px]">Chat gpt user</h3>


                        </div>

                    </div>

                </div>
            </nav >
        </div >
    );
};

export default SideBar;