import "./Footer.css";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2025 ShowGenius. All rights reserved.</p>
      <div className="social-links">
        <a
          href="https://play.google.com/store/apps/details?id=com.showgeniousai"
          target="_blank"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaGooglePlay />
          <span style={{ marginLeft: 8 }}>Google Play</span>
        </a>
        <a
          href="https://apps.apple.com/us/app/showgenius-ai-movies-tv-shows/id6677037386"
          target="_blank"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaAppStoreIos />
          <span style={{ marginLeft: 8 }}>Play Store</span>
        </a>
      </div>
      <p>
        Contact us at <a href="https://anilguvenc.web.app">@anilgnvc</a>
      </p>
    </div>
  );
};

export default Footer;
