import { useState } from "react";
import { IoMdCloseCircle, IoMdImages } from "react-icons/io";
import { Link } from "react-router-dom";

function AddProduct() {
  const [state, setState] = useState({
    name: "",
    price: "",
    discount: "",
    brand: "",
    stock: "",
    category: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const [images, setImages] = useState([]);
  const [imagesShow, setImagesShow] = useState([]);

  const fileHandler = (e) => {
    const { files } = e.target;
    const length = files.length;
    if (length > 1) {
      setImages((prev) => [...prev, ...files]);
      let imageUrl = [];
      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setImagesShow((prev) => [...prev, ...imageUrl]);
    }
  };
  const changeImage = (file, index) => {
    if (file) {
      let tempUrl = imagesShow;
      let tempImages = images;
      tempImages[index] = file;
      tempUrl[index] = { url: URL.createObjectURL(file) };
      setImagesShow([...tempUrl]);
      setImages([...tempImages]);
    }
  };
  const removeImage = (index) => {
    const filterImages = images.filter((_, i) => i !== index);
    const filterImagesShow = imagesShow.filter((_, i) => i !== index);
    setImagesShow([...filterImagesShow]);
    setImages([...filterImages]);
  };
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-[#d0d2d6] text-xl font-semibold">Add Product</h1>
          <Link className=" bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2">
            All Product
          </Link>
        </div>
        <div>
          <form>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
              <div className="w-full flex flex-col gap-1">
                <label className="text-sm font-semibold">Product Name</label>
                <input
                  type="text"
                  placeholder="Product Name"
                  name="name"
                  id="name"
                  onChange={inputHandler}
                  value={state.name}
                  className="w-full bg-[#e6e7fb] text-[#030811] rounded-md px-4 py-2 mt-2"
                />
              </div>
              <div className="w-full">
                <label className="text-sm font-semibold">Product Brand</label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  onChange={inputHandler}
                  value={state.brand}
                  placeholder="Product Brand"
                  className="w-full bg-[#e6e7fb] text-[#030811] rounded-md px-4 py-2 mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
              <div className="w-full">
                <label className="text-sm font-semibold">
                  Product Category
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  onChange={inputHandler}
                  value={state.category}
                  placeholder="Product Brand"
                  className="w-full bg-[#e6e7fb] text-[#030811] rounded-md px-4 py-2 mt-2"
                />
              </div>
              <div className="w-full">
                <label className="text-sm font-semibold">Product Stock</label>
                <input
                  type="text"
                  name="stock"
                  id="stock"
                  onChange={inputHandler}
                  value={state.stock}
                  placeholder="Product Stock"
                  className="w-full bg-[#e6e7fb] text-[#030811] rounded-md px-4 py-2 mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
              <div className="w-full flex flex-col gap-1">
                <label className="text-sm font-semibold">Product Price</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  onChange={inputHandler}
                  value={state.price}
                  placeholder="Product Price"
                  className="w-full bg-[#e6e7fb] text-[#030811] rounded-md px-4 py-2 mt-2"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label className="text-sm font-semibold">
                  Product Discount
                </label>
                <input
                  type="number"
                  name="discount"
                  id="discount"
                  onChange={inputHandler}
                  value={state.discount}
                  placeholder="Product Discount"
                  className="w-full bg-[#e6e7fb] text-[#030811] rounded-md px-4 py-2 mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
              <div className="w-full flex flex-col gap-1">
                <label className="text-sm font-semibold">Description</label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  onChange={inputHandler}
                  value={state.description}
                  placeholder="Product Description"
                  className="w-full bg-[#e6e7fb] text-[#030811] rounded-md px-4 py-2 mt-2"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#d0d2d6] mb-4">
              {imagesShow.length > 0 &&
                imagesShow.map((image, index) => {
                  return (
                    <div className="relative h-[180px]" key={index}>
                      <label htmlFor={index}>
                        <img
                          src={image.url}
                          alt="url"
                          className="rounded-sm h-full w-full"
                        />
                      </label>
                      <input
                        type="file"
                        onChange={(e) => {
                          changeImage(e.target.files[0], index);
                        }}
                        className="hidden"
                        id={index}
                      />
                      <span
                        onClick={() => removeImage(index)}
                        className="absolute p-2 z-10 top-1 right-1 cursor-pointer text-white bg-slate-700 hover:shadow-slate-400/50 hover:shadow-lg rounded-full"
                      >
                        <IoMdCloseCircle />
                      </span>
                    </div>
                  );
                })}
              <label
                htmlFor="image"
                className="flex justify-center items-center flex-col h-[180px] cursor-pointer border-dashed hover:border-red-500 w-full text-[#d0d2d6] border border-[#d0d2d6] rounded-md"
              >
                <span>
                  <IoMdImages />
                </span>
                <span>select image</span>
              </label>
              <input
                type="file"
                name="image"
                id="image"
                multiple
                accept="image/*"
                onChange={fileHandler}
                className="hidden"
              />
            </div>
            <div className="flex">
              <button className="bg-red-500  hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
