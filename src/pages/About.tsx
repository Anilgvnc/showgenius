import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import MockupImg from "../assets/mockup.svg";
import "../constants/Button.css";

const About = () => {
  return (
    <div style={{ marginBottom: 100 }}>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <img
          src={MockupImg}
          alt="ShowGenius Mockup"
          style={{ width: "100%", maxWidth: 600 }}
        />
        <h1 style={{ marginBottom: 12 }}>About ShowGenius</h1>
        <p>
          ShowGenius is your go-to platform for discovering movies and TV shows.
          Whether you're looking for the latest blockbuster or a hidden gem,
          we've got you covered.
        </p>
        <p>
          ShowGenius, artificial intelligence platform that finds new
          recommendations for your favorite series or movies.
        </p>
      </div>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Download the app</h2>
        <div
          style={{
            padding: 24,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <button
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.showgeniousai",
                "_blank"
              )
            }
          >
            <FaGooglePlay />
            <span>Google Play</span>
          </button>
          <button
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/showgenius-ai-movies-tv-shows/id6677037386",
                "_blank"
              )
            }
          >
            <FaAppStoreIos />
            <span>App Store</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
