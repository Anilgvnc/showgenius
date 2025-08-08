import { Outlet, Link } from "react-router-dom";
import "../constants/Layout.css";
import Logo from "../assets/logo.png";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="logo-container" to="/">
              <img src={Logo} className="logo" alt="ShowGenius" />
              <h3>ShowGenius</h3>
            </Link>
          </li>
          <li style={{ float: "right" }}>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
