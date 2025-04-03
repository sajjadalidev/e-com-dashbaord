import { FaGoogle } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { overrideLoaderStyle } from "../../utils/utils";
import {
  messageClear,
  seller_register,
} from "../../store/Reducers/authReducer";
import toast from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );
  console.log("🚀 ~ Register ~ successMessage:", successMessage);
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(seller_register(state));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage, dispatch]);
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff]">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to E-commerce</h2>
          <p className="text-sm mb-3 font-medium ">
            Please register your account!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="username">User Name</label>
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="text"
                name="username"
                placeholder="Name"
                id="username"
                value={state.username}
                onChange={handleInput}
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                value={state.email}
                onChange={handleInput}
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                value={state.password}
                onChange={handleInput}
                required
              />
            </div>
            <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                value={state.checkbox}
                onChange={handleInput}
              />
              <label htmlFor="checkbox">
                I agree to privacy policy and terms
              </label>
            </div>
            <button
              disabled={loader}
              className="w-full py-2 bg-slate-800 hover:shadow-blue-300/5 hover:shadow-lg text-white rounded-md mb-3"
            >
              {loader ? (
                <PropagateLoader
                  cssOverride={overrideLoaderStyle}
                  color="#fff"
                />
              ) : (
                "Sign up"
              )}
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account?{" "}
                <Link className="font-bold" to={"/login"}>
                  Sign In
                </Link>{" "}
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px] "></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaFacebookSquare />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
