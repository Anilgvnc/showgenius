import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import notFoundImg from "../assets/404.svg";

const NoPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

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
      <p>You will be redirected to the home page in {countdown} seconds.</p>
      <Link className="logo-container" to="/">
        Home Page
      </Link>
    </div>
  );
};

export default NoPage;
