import { chatsConvo } from "@/utils/chatConvo";

const page = () => {
    return (
        <div className="w-full h-full overflow-y-auto smoothBar flex items-start justify-center text-white">
            <div className="w-[90vw] md:w-[728px] flex flex-col items-start justify-start gap-[30px]">
                {
                    chatsConvo.map((chat, i) => <div
                        key={i + "chat"}
                        className="flex justify-start items-start gap-[15px]"
                    >
                        <div className="min-w-[30px] h-[30px] rounded-full bg-neutral-300"></div>

                        <div className="flex flex-col items-start justify-start gap-[5px]">
                            <h2 className="text-[18px] font-[700]">{chat.sender} </h2>
                            <p className="text-[#d7d3d3]">{chat.message}</p>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default page;