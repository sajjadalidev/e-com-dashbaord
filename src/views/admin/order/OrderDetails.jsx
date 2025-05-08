const OrderDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="flex justify-between items-center">
          <h1>Order Details</h1>
          <select
            // onChange={(e) => setParPage(parseInt(e.target.value))}
            className="px-4 pt-2 hover:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value={"pending"}>Pending</option>
            <option value={"10"}>10</option>
            <option value={"20"}>20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
