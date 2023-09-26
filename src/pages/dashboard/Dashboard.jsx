import { FaChalkboardTeacher, FaHome } from "react-icons/fa";
import { BsBook, BsFillCartPlusFill } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open pt-16">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to={"/dashboard/my-classes"}>
                <BsFillCartPlusFill></BsFillCartPlusFill>Selected Classes
              </Link>
            </li>
            <li>
              <Link>
                <SiGoogleclassroom></SiGoogleclassroom> Enrolled Classes
              </Link>
            </li>
            <div className="divider">OR</div>
            <li>
              <Link to={'/'}><FaHome></FaHome> Home</Link>
            </li>
            <li>
              <Link to={'/classes'}><BsBook></BsBook>Classes</Link>
            </li>
            <li>
              <Link to={'/instructors'}><FaChalkboardTeacher></FaChalkboardTeacher>Instructors</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
