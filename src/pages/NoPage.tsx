import { Link } from "react-router-dom";
import notFoundImg from "../assets/404.svg";

const NoPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div style={{ marginBottom: "32px" }}>
        <img
          style={{ height: 256, width: 256 }}
          src={notFoundImg}
          alt="404 not found"
        />
        <h1>404 - Page Not Found</h1>
      </div>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link className="logo-container" to="/">
        Home Page
      </Link>
    </div>
  );
};

export default NoPage;
