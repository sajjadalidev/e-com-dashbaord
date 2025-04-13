import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaList } from "react-icons/fa";

const ChatSeller = () => {
  const [show, setShow] = useState(false);
  const sellerId = 65;
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full px-4 py-4 bg-[#6a5fdf] rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div
            className={`w-[280px] h-full absolute z-10 ${
              show ? "-left-[16px]" : "-left-[336px]"
            } md:left-0 md:relative transition-all`}
          >
            <div className="w-full h-[calc(100vh-177px)] bg-[#9e97e9] md:bg-transparent overflow-y-auto">
              <div className="flex justify-between text-xl items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                <h2>Sellers</h2>
                <span
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="block cursor-pointer md:hidden"
                >
                  <IoMdClose />
                </span>
              </div>
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-md cursor-pointer ${
                    item === 1 ? `bg-[#8288ed]` : ""
                  } `}
                >
                  <div className="relative">
                    <img
                      className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                      src="/images/admin.png"
                      alt="alt-seller"
                    />
                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                  </div>
                  <div className=" flex justify-center items-start flex-col w-full">
                    <div className="flex justify-between items-center w-full">
                      <h2 className="text-base font-semibold">Sajjad Ali</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[calc(100%)-200px] md:pl-4">
            <div className="flex justify-between items-center w-full">
              {sellerId && (
                <div className=" flex justify-start items-center gap-3">
                  <div className="relative">
                    <img
                      className="w-[38px] h-[38px] border-green-500 border-2 max-w-[38px] p-[2px] rounded-full"
                      src="/images/admin.png"
                      alt="alt-seller"
                    />
                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                  </div>
                </div>
              )}

              <div
                onClick={() => {
                  setShow(!show);
                }}
                className="w-[35px] flex md:hidden h-[35px] rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center text-white"
              >
                <span>
                  <FaList />
                </span>
              </div>
            </div>

            <div className="py-4">
              <div className="bg-[#475569] h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        className="rounded-full max-w-[38px] w-[38px] h-[38px] border-2 border-white p-[3px]"
                        src="/images/admin.png"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                      <span>How are you?</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-full bg-red-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                      <span>How are you?</span>
                    </div>
                    <div>
                      <img
                        className="rounded-full max-w-[38px] w-[38px] h-[38px] border-2 border-white p-[3px]"
                        src="/images/admin.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        className="rounded-full max-w-[38px] w-[38px] h-[38px] border-2 border-white p-[3px]"
                        src="/images/admin.png"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                      <span>I need some help?</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className=" flex gap-3">
              <input
                type="text"
                placeholder="Write your message"
                className="w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] cursor-pointer focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6]"
              />
              <button className="shadow-lg bg-[#06b6d4] hover:shadow-cyan-500/50 font-semibold w-[75px] h-[35px] rounded-md items-center">
                {" "}
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSeller;
