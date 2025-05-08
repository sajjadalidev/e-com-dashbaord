import { useState } from "react";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import Pagination from "../../components/Pagination";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#6a5fdf] rounded-md">
        <h1 className="text-[#d0d2d6] font-semibold text-lg">Category</h1>
        <button
          onClick={() => setShow(!show)}
          className="bg-red-500 shadow-lg hover:shadow-red-500/40 px-4 py-2 cursor-pointer rounded-sm text-sm text-white"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
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
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-[#d0d2b6] uppercase">
                <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
                  <tr>
                    <th scope="col" className="py-3 pl-4">
                      No
                    </th>
                    <th scope="col" className="py-3 pl-4">
                      Image
                    </th>
                    <th scope="col" className="py-3 pl-4">
                      Name
                    </th>
                    <th scope="col" className="py-3 pl-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <tr key={i}>
                      <td className="py-1 px-4 font-medium whitespace-nowrap">
                        {item}
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap">
                        <img
                          className="w-[45px] h-[45px]"
                          src="https://picsum.photos/200"
                          alt="category"
                        />
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap">
                        Tshirt
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap">
                        <div className="flex justify-start items-center gap-4">
                          <Link className="hover:shadow-lg hover:shadow-yellow-500/50 p-[6px] bg-yellow-500 rounded">
                            <FaEdit className="inline-block mr-1" />
                          </Link>
                          <Link className="hover:shadow-lg hover:shadow-red-500/50 p-[6px] bg-red-500 rounded">
                            <FaTrash className="inline-block mr-1" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-full flex justify-end  bottom-4 right-4">
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
        <div
          className={`w-[320px]  lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-[9999] top-0 transition-all duration-500`}
        >
          <div className="w-full pl-5">
            <div className="bg-[#6a5fdf] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-[#d0d2d6]">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-[#d0d2d6] font-semibold text-xl mb-4 w-full text-center">
                  Add Category
                </h1>
                <div
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="block lg:hidden"
                >
                  <IoMdCloseCircle />
                </div>
              </div>
              <form action="">
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="name">Category Name</label>
                  <input
                    type="text"
                    name="category_name"
                    placeholder="Category Name"
                    id="name"
                    className="px-4 py-2 focus:border-indigo-500 bg-white outline-none border border-slate-700 rounded-md text-[#030811] "
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-red-500 w-full border-[#d0d2d6]"
                  >
                    <span>
                      <FaImage />
                    </span>
                    <span>Select Image</span>
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="hidden"
                  />
                </div>
                <div>
                  <button className="bg-red-500 w-full hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2">
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
