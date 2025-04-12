import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { admin_login, messageClear } from "../../store/Reducers/authReducer";
import { overrideLoaderStyle } from "../../utils/utils";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loader, errorMessage, successMessage } = useSelector(
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
    dispatch(admin_login(state));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/admin/dashboard");
    }
  }, [errorMessage, dispatch, successMessage, navigate]);

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff]">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <div>
            <div className="flex justify-center items-center mb-3">
              <img
                src="http://localhost:3001/images/logo.png"
                alt="Easy Shop"
                width={"100%"}
              />
            </div>
          </div>
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
                "Login"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
