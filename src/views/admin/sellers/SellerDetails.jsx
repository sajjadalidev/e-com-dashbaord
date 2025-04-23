const SellerDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Seller Details</h1>
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="w-full flex flex-wrap text-[#d0d2d6]">
          <div className="w-3/12 flex flex-col justify-center items-center py-3">
            <img
              src="https://picsum.photos/200"
              alt="seller-profile"
              className="mb-12 w-full h-[230px]"
            />
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Basic Info</h2>
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[#9e97e9] rounded-md">
                  <div className="flex gap-2 font-bold text-[#000]">
                    <span>Name:</span>
                    <span>Ali Amjad</span>
                  </div>
                  <div className="flex gap-2 font-bold text-[#000]">
                    <span>Email:</span>
                    <span>abc@gmail.com</span>
                  </div>
                  <div className="flex gap-2 font-bold text-[#000]">
                    <span>Role:</span>
                    <span>Seller</span>
                  </div>
                  <div className="flex gap-2 font-bold text-[#000]">
                    <span>Status:</span>
                    <span>Active</span>
                  </div>
                  <div className="flex gap-2 font-bold text-[#000]">
                    <span>Payment Status:</span>
                    <span>Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Address</h2>
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[#9e97e9] rounded-md">
                  <div className="flex gap-2 font-bold text-[#000]">
                    <span>Shop Name:</span>
                    <span>Ali Amjad</span>
                  </div>
                  <div className="flex gap-2 font-bold text-[#000]">
                    <span>Division:</span>
                    <span>Ali Amjad</span>
                  </div>
                  <div className="flex gap-2 font-bold text-[#000]">
                    <span>District:</span>
                    <span>Ali Amjad</span>
                  </div>
                  <div className="flex gap-2 font-bold text-[#000]">
                    <span>State:</span>
                    <span>Ali Amjad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form action="">
            <div className="flex gap-4 py-3">
              <select
                //   onChange={(e) => setParPage(parseInt(e.target.value))}
                name=""
                id=""
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
              >
                <option value={""}>---Selelt Status---</option>
                <option value={"active"}>Active</option>
                <option value={"deactive"}>Deactive</option>
              </select>
              <button className="bg-red-500 w-[170px] rounded-md text-white text-lg px-7 py-2 hover:shadow-md hover:shadow-red-500/40">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
