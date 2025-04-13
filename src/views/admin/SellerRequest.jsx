import { useState } from "react";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const SellerRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  //   const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Seller Request</h1>
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
                <div className="py-3 w-[25%] font-bold">No</div>
                <div className="py-3 w-[18%] font-bold">Name</div>
                <div className="py-3 w-[18%] font-bold">Email</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Status</div>
                <div className="py-3 w-[18%] font-bold">Action</div>
              </div>
            </div>
            {[1, 2, 3, 4, 5].map((item) => (
              <div className=" text-[#d0d2d6]">
                <div className="flex justify-between items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                    {item}
                  </div>
                  <div className="py-3 w-[18%] font-medium">Sajjad Ali</div>
                  <div className="py-3 w-[18%] font-medium">abc@gmail.com</div>
                  <div className="py-3 w-[18%] font-medium">Active</div>
                  <div className="py-3 w-[18%] font-medium">Deactive</div>
                  <div className="py-3 w-[18%] font-medium">
                    <Link
                      // className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
                      to={`/admin/dashboard/seller/detail/${item}`}
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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

export default SellerRequest;
