import "../App.css";
import ModuleButton from "../components/ModuleButton";
import MultipleImg from "../assets/multiple.jpg";
import SingleImg from "../assets/single.jpg";
import GenreImg from "../assets/genre.jpg";

const HomePage = () => {
  return (
    <div style={{ marginBottom: 100 }}>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1 style={{ marginBottom: 12 }}>Welcome to ShowGenius</h1>
        <p className="home-description">
          Discover new movies and TV shows tailored to your taste.
        </p>
      </div>
      <div className="module-buttons">
        <ModuleButton
          title="Watch with your friend"
          description="Suggestions for series or movies to watch with your friends"
          source={MultipleImg}
        />
        <ModuleButton
          title="By favorite content"
          description="Suggestions similar to your favorite movie or TV series"
          source={SingleImg}
        />
        <ModuleButton
          title="By genres"
          description="Suggestions similar to your favorite genres of movies or TV series"
          source={GenreImg}
        />
      </div>
    </div>
  );
};

export default HomePage;
