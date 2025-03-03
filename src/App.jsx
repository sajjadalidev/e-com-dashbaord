import { useEffect, useState } from "react";
import Router from "./router/Router";
import PublicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";

function App() {
  const [allroutes, setAllRoutes] = useState([...PublicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allroutes, routes]);
  }, []);
  return <Router allRoutes={allroutes} />;
}
export default App;
