const PromtBox = () => {
    return (
        <div className="w-full flex flex-col gap-[8px] items-center justify-center pb-[8px]">
            <div className="w-[90vw] md:w-[766px] border-[1.5px] border-[#5d5d5d] py-[10px] px-[12px] rounded-lg">
                <textarea name="" placeholder="Message Chatgpt..." className="bg-transparent outline-none resize-none w-full h-full text-white" style={{ height: "25px" }} />
            </div>
            <p className="text-[#b4b4b4] text-[12px]">ChatGPT can make mistakes. Consider checking important information.</p>
        </div>
    );
};

export default PromtBox;