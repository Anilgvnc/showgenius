import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import SingleInput from "./pages/SingleInput";
import MultipleInput from "./pages/MultipleInput";
import GenreInput from "./pages/GenreInput";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
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
  );
};

export default App;
