import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaGoogle } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { overrideLoaderStyle } from "../../utils/utils";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { messageClear, seller_login } from "../../store/Reducers/authReducer";

const Login = () => {
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(seller_login(state));
  };
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      // navigate("/");
    }
  }, [successMessage, errorMessage, dispatch]);
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff]">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to E-commerce</h2>
          <p className="text-sm mb-3 font-medium ">
            Please Sign In your account!
          </p>
          <form onSubmit={handleSubmit}>
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
                " Sign In"
              )}
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Don't have an account?{" "}
                <Link className="font-bold" to={"/register"}>
                  Sign Up
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

export default Login;
