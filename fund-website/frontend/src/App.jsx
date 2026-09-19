import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Fund from "./pages/Fund";
import AdminLogin from "./pages/AdminLogin";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/fund" element={<Fund />} />

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;