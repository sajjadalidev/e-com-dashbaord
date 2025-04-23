import { useState } from "react";
import { LuCircleArrowDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setParPage(parseInt(e.target.value))}
            className="px-4 pt-2 hover:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value={"5"}>5</option>
            <option value={"10"}>10</option>
            <option value={"20"}>20</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
          />
        </div>

        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left">
            <div className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">Order Id</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action</div>
                <div className="py-3 w-[8%] font-bold">
                  <LuCircleArrowDown />
                </div>
              </div>
            </div>
            <div className=" text-[#d0d2d6]">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34567
                </div>
                <div className="py-3 w-[13%] font-medium">$456</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link to={`/admin/dashboard/orders/details/${1}`}>View</Link>
                </div>
                <div className="py-3 w-[8%] font-medium">
                  <LuCircleArrowDown />
                </div>
              </div>
            </div>
            <div className=" text-[#d0d2d6]">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34567
                </div>
                <div className="py-3 w-[13%] font-medium">$456</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium"></div>
                <div className="py-3 w-[8%] font-medium"></div>
              </div>
            </div>
            <div className=" text-[#d0d2d6]">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34567
                </div>
                <div className="py-3 w-[13%] font-medium">$456</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link to={`/admin/dashboard/orders/details/${1}`}>View</Link>
                </div>
                <div className="py-3 w-[8%] font-medium">
                  <LuCircleArrowDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            totalItem={50}
            parPage={parPage}
            setPageNumber={setCurrentPage}
            pageNumber={currentPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
