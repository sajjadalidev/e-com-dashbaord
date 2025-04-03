import { useEffect, useState } from "react";
import Router from "./router/Router";
import PublicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info } from "./store/Reducers/authReducer";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const [allroutes, setAllRoutes] = useState([...PublicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allroutes, routes]);
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(get_user_info());
    } 
  }, [token]);
  return <Router allRoutes={allroutes} />;
}
export default App;
