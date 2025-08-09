import { Outlet, Link } from "react-router-dom";
import "../constants/Layout.css";
import Logo from "../assets/logo.png";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <header>
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
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
