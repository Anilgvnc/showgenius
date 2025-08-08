import "./App.css";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import SingleInput from "./pages/SingleInput";
import MultipleInput from "./pages/MultipleInput";
import GenreInput from "./pages/GenreInput";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="single" element={<SingleInput />} />
          <Route path="multiple" element={<MultipleInput />} />
          <Route path="genre" element={<GenreInput />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
