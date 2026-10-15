import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/SideBar";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="root-main">
        <SideBar />

        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

/**
 * 1. use: userPromise > Suspense > promise > use(userPromise)
 * 2. [ less used so far] > useState + useEffect ( () => {}, [])
 * 3. load data before router definiation: load data bofore router component is rendered
 *
 */
