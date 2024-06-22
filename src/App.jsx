import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Findmovie } from "./pages/Findmovie";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="findmovie" element={<Findmovie />} />
      </Route>
    </Routes>
  );
}
